/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { trackGamePlay } from "./utils/analytics";

export default function Games() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("default");
  const [loading, setLoading] = useState(true);
  const [recentGames, setRecentGames] = useState([]);
  const [fps, setFps] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [flagDrawerOpen, setFlagDrawerOpen] = useState(false);
  const [showSurveyPopup, setShowSurveyPopup] = useState(false);
  const gamesGridRef = useRef(null);
  const highlightedGameRef = useRef(null);

  // Load games from API and localStorage
  useEffect(() => {
    fetch("/api/games.json")
      .then((r) => r.json())
      .then((data) => {
        setGames(data.games || []);
        setFilteredGames(data.games || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading games:", err);
        setLoading(false);
      });

    // Load Recently Played
    const savedRecent = localStorage.getItem("scg_recent");
    if (savedRecent) {
      setRecentGames(JSON.parse(savedRecent));
    }

    // Check for survey popup
    const surveySeen = localStorage.getItem("scg_survey_seen");
    if (!surveySeen) {
      setShowSurveyPopup(true);
    }
  }, []);

  // Search and Filter functionality
  useEffect(() => {
    let filtered = games;

    if (searchTerm) {
      filtered = games.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortType === "az") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "za") {
      filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredGames(filtered);
  }, [searchTerm, sortType, games]);

  // FPS Counter
  useEffect(() => {
    let lastFrame = performance.now();
    let frames = 0;
    let fpsValue = 0;

    function loop(now) {
      frames++;
      if (now - lastFrame >= 1000) {
        fpsValue = frames;
        frames = 0;
        lastFrame = now;
        setFps(fpsValue);
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }, []);

  // Back to top scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRandomGame = () => {
    if (filteredGames.length === 0) return;

    const randomIndex = Math.floor(Math.random() * filteredGames.length);
    const randomGame = filteredGames[randomIndex];

    // Find the game item element and scroll to it
    const gameElements = gamesGridRef.current?.querySelectorAll(".game-item");
    if (gameElements && gameElements[randomIndex]) {
      gameElements[randomIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Highlight effect
      gameElements[randomIndex].classList.add("highlight-game");
      setTimeout(() => {
        gameElements[randomIndex].classList.remove("highlight-game");
      }, 2000);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseSurvey = () => {
    setShowSurveyPopup(false);
    localStorage.setItem("scg_survey_seen", "true");
  };

  // Track Recently Played
  const handleGameClick = async (game) => {
    console.log("[Debug] handleGameClick triggered for:", game?.title);
    // Privacy-friendly analytics - we await it with a small timeout to prevent NS_BINDING_ABORTED
    try {
      console.log("[Debug] Calling trackGamePlay...");
      await Promise.race([
        trackGamePlay(game),
        new Promise((resolve) => setTimeout(resolve, 300)), // Max wait 300ms
      ]);
      console.log("[Debug] trackGamePlay finished or timed out");
    } catch (e) {
      console.warn("[Analytics] Tracking timed out or failed", e);
    }

    // Track Recently Played
    const newRecent = [
      game,
      ...recentGames.filter((g) => g.url !== game.url),
    ].slice(0, 10);
    console.log("[Debug] Updating recent games...");
    setRecentGames(newRecent);
    localStorage.setItem("scg_recent", JSON.stringify(newRecent));

    console.log("[Debug] Navigating to:", game.url);
    // Check if URL is external (starts with http:// or https://)
    if (game.url.startsWith("http://") || game.url.startsWith("https://")) {
      window.open(game.url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = game.url;
    }
  };

  if (loading) {
    return (
      <>
        <Helmet>
        </Helmet>
        <div className="container">
          {showSurveyPopup && (
            <div className="survey-popup-overlay">
              <div className="survey-popup">
                <button className="survey-close" onClick={handleCloseSurvey}>
                  &times;
                </button>
                <h3>Quick Survey! 🐱</h3>
                <p>
                  We'd love to hear your thoughts on Space Cat Games. It only
                  takes a minute!
                </p>
                <a
                  href="https://form.typeform.com/to/Dp8OGYV7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn survey-btn"
                  onClick={handleCloseSurvey}
                >
                  Take the Survey
                </a>
              </div>
            </div>
          )}
          <h1>Games Collection</h1>
          <div className="game-controls skeleton-controls">
            <div className="skeleton skeleton-search"></div>
            <div className="skeleton skeleton-button"></div>
          </div>
          <div className="games-grid">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="game-item skeleton-card">
                <div className="skeleton skeleton-img"></div>
                <div className="skeleton skeleton-text"></div>
              </div>
            ))}
          </div>
        </div>
        <style>
          {`
                    .skeleton {
                        background: #333;
                        background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
                        background-size: 200% 100%;
                        animation: skeleton-loading 1.5s infinite;
                        border-radius: 4px;
                    }
                    @keyframes skeleton-loading {
                        0% { background-position: 200% 0; }
                        100% { background-position: -200% 0; }
                    }
                    .skeleton-search { height: 40px; width: 100%; margin-bottom: 20px; }
                    .skeleton-button { height: 40px; width: 150px; }
                    .skeleton-img { width: 100%; aspect-ratio: 16/10; border-radius: 8px; margin-bottom: 10px; }
                    .skeleton-text { height: 16px; width: 80%; margin: 0 auto; }
                    .skeleton-card { border: none !important; background: transparent !important; }
                    `}
        </style>
        {showSurveyPopup && (
          <div className="survey-popup-overlay">
            <div className="survey-popup">
              <button className="survey-close" onClick={handleCloseSurvey}>
                &times;
              </button>
              <h3>Quick Survey! 🐱</h3>
              <p>
                We'd love to hear your thoughts on Space Cat Games. It only
                takes a minute!
              </p>
              <a
                href="https://form.typeform.com/to/Dp8OGYV7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn survey-btn"
                onClick={handleCloseSurvey}
              >
                Take the Survey
              </a>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Browse our extensive collection of free browser games"
        />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/games.css" rel="stylesheet" />
      </Helmet>

      <div className="container">
        {showSurveyPopup && (
          <div className="survey-popup-overlay">
            <div className="survey-popup">
              <button className="survey-close" onClick={handleCloseSurvey}>
                &times;
              </button>
              <h3>Quick Survey! 🐱</h3>
              <p>
                We'd love to hear your thoughts on Space Cat Games. It only
                takes a minute!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfr0O_HBmgdmwvA8SWpezahNCwK_ob52XNKRBYmAgvuPFWOXg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn survey-btn"
                onClick={handleCloseSurvey}
              >
                Take the Survey
              </a>
            </div>
          </div>
        )}
        <h1>Games Collection</h1>
        <p>
          Browse our extensive collection of free browser games. Click on any
          game to start playing instantly!
        </p>

        {/* QoL Features Section */}
        <div className="game-controls">
          <div className="search-container">
            <input
              type="text"
              id="gameSearch"
              className="search-input"
              placeholder="Search for games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="controls-row">
            <div className="sort-options">
              <label htmlFor="gameSort">Sort by:</label>
              <select
                id="gameSort"
                className="sort-select"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="default">Default</option>
                <option value=" az">Name (A-Z)</option>
                <option value="za">Name (Z-A)</option>
              </select>
            </div>

            <button
              id="randomGameBtn"
              className="btn random-btn"
              onClick={handleRandomGame}
            >
              <span className="icon">🎲</span> Random Game
            </button>
          </div>

          <div className="game-count">
            Showing <span id="visibleCount">{filteredGames.length}</span> of{" "}
            <span id="totalCount">{games.length}</span> games
          </div>
        </div>

        {/* Recently Played Section - Moved below controls */}
        {recentGames.length > 0 && (
          <section className="recent-games-section">
            <h2>Recently Played</h2>
            <div className="recent-games-scroll">
              <div className="games-grid recent-grid">
                {recentGames.map((game, index) => (
                  <div key={`recent-${index}`} className="game-item small">
                    <button
                      type="button"
                      onClick={() => handleGameClick(game)}
                      title={game.title}
                    >
                      <img
                        src={game.img}
                        alt={game.title}
                        onError={(e) => {
                          e.target.src = "/images/noimg.png";
                        }}
                      />
                    </button>
                    <p>{game.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="games-grid" id="gamesGrid" ref={gamesGridRef}>
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <div
                key={index}
                className="game-item"
                onClick={() => {
                  console.log("[Debug] DIV click triggered for:", game?.title);
                  handleGameClick(game);
                }}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(
                      "[Debug] Button click triggered for:",
                      game?.title
                    );
                    handleGameClick(game);
                  }}
                  title={game.title}
                >
                  <img
                    src={game.img}
                    alt={game.alt || game.title}
                    onError={(e) => {
                      e.target.src = "/images/noimg.png";
                    }}
                  />
                </button>
                <p>{game.title}</p>
              </div>
            ))
          ) : (
            <div className="no-games">
              <p>No games found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
      <style>
        {`
                    .game-item { 
                        position: relative; 
                        overflow: hidden;
                        border-radius: 12px;
                        transition: transform 0.3s ease;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .game-item:hover { transform: translateY(-5px); }
                    
                    /* Strict reset for all buttons inside game items */
                    .game-item button {
                        appearance: none !important;
                        -webkit-appearance: none !important;
                        outline: none !important;
                    }

                    .recent-games-section { margin-bottom: 40px; }
                    .recent-games-scroll { 
                        overflow-x: auto; 
                        padding-bottom: 12px;
                        scrollbar-width: thin;
                    }
                    .recent-grid { 
                        display: flex !important; 
                        flex-wrap: nowrap !important; 
                        gap: 15px; 
                        justify-content: flex-start !important;
                    }
                    .game-item.small { 
                        min-width: 140px; 
                        max-width: 140px;
                    }
                    .game-item.small button {
                        height: 140px !important;
                        padding: 10px !important;
                        border-radius: 15px !important;
                    }
                    .game-item.small img {
                        max-width: 80px !important;
                        max-height: 80px !important;
                    }
                    .game-item.small p { 
                        font-size: 0.8em; 
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-top: 8px;
                    }
                    `}
      </style>

      <Footer />

      {/* FPS Counter */}
      <div
        id="fps-counter"
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          background: "rgba(20,20,20,0.8)",
          color: "#0f0",
          fontFamily: "monospace",
          fontSize: 16,
          padding: "6px 12px",
          borderRadius: 6,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        FPS: {fps}
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          id="backToTop"
          title="Go to top"
          onClick={handleBackToTop}
          style={{
            display: "block",
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 99,
            fontSize: 18,
            border: "none",
            outline: "none",
            backgroundColor: "#e74c3c",
            color: "white",
            cursor: "pointer",
            padding: 15,
            borderRadius: "50%",
            width: 50,
            height: 50,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s, transform 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#c0392b";
            e.target.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#e74c3c";
            e.target.style.transform = "translateY(0)";
          }}
        >
          ↑
        </button>
      )}

      {/* Flag Drawer mroew*/}
      <div
        id="flag-drawer"
        className={flagDrawerOpen ? "open" : ""}
        style={{
          position: "fixed",
          top: 120,
          right: flagDrawerOpen ? 0 : -184,
          width: 220,
          transition: "right 0.3s",
          zIndex: 10000,
        }}
      >
        <div
          id="flag-drawer-tab"
          onClick={() => setFlagDrawerOpen(!flagDrawerOpen)}
          style={{
            position: "absolute",
            left: -36,
            top: 0,
            width: 36,
            height: 60,
            background: "#222",
            color: "#fff",
            borderRadius: "8px 0 0 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 24,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            userSelect: "none",
          }}
        >
          🏳️
        </div>
        <div
          id="flag-drawer-content"
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px 0 0 8px",
            padding: "10px 5px 10px 10px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            minWidth: 180,
            minHeight: 70,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflowX: "auto",
          }}
        >
          <img
            src="https://count.getloli.com/@:spacecatgames?name=%3Aspacecatgames&theme=original-new&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=0&prefix=0"
            alt="Visitor counter"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
