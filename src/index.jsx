/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { trackGamePlay } from "./utils/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function Home() {
  const [buildId, setBuildId] = useState("");
  const [tip, setTip] = useState("");
  const [header, setHeader] = useState("");
  const [gameOfTheDay, setGameOfTheDay] = useState(null);

  const tips = [
    "Aishite Aishite Aishite!",
    "Mayday! Go ahead and fire away!",
    "webstorm better than vscode lmao",
    "quick release christmas day lmfao - meowcat767",
    "1 year of service!",
    "The most Cutting Edge games website.",
    "Cirno is behind you by the way.",
    "did you know that for some reason this is react now?",
    "Now the train's gone and left.",

  ];

  useEffect(() => {
    const version = __BUILD_INFO__.appVersion;
    // Header randomization
    if (Math.random() < 0.1) {
      setHeader(`スペースキャットゲーム バージョン${version}`);
    } else {
      setHeader(`Welcome to Space Cat Games ${version} - Hello, React!`);
    }

    // Random tips
    const pickTip = () => setTip(tips[Math.floor(Math.random() * tips.length)]);
    pickTip();
    const interval = setInterval(pickTip, 5000);

    // Fetch Game of the Day
    fetch("/games.json")
      .then((r) => r.json())
      .then((data) => {
        if (data.games && data.games.length > 0) {
          // Get current date string in GMT (YYYY-MM-DD)
          const dateStr = new Date().toISOString().split("T")[0];

          // Simple deterministic hash function
          let hash = 0;
          for (let i = 0; i < dateStr.length; i++) {
            hash = (hash << 5) - hash + dateStr.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
          }

          // Use the hash to pick a game index
          const index = Math.abs(hash) % data.games.length;
          const dailyGame = data.games[index];
          setGameOfTheDay(dailyGame);
        }
      })
      .catch((err) =>
        console.error("Failed to fetch games for Game of the Day:", err)
      );

    // Build ID - prefer local build info which is now accurate
    if (__BUILD_INFO__.gitCommit !== "unknown") {
      setBuildId("Build: " + __BUILD_INFO__.gitCommit);
    } else {
      fetch(
        "https://api.github.com/repos/Starry-Systems/spacecatgames/commits?per_page=1"
      )
        .then((r) => r.json())
        .then((d) => {
          if (d?.[0]?.sha) {
            setBuildId("Build ID: " + d[0].sha.slice(0, 7));
          } else {
            setBuildId("Session ID: " + Math.random().toString().slice(2, 10));
          }
        })
        .catch(() =>
          setBuildId("Session ID: " + Math.random().toString().slice(2, 10))
        );
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="The worlds best free and open source games website!"
        />
        <meta name="keywords" content="games, open source, browser games" />
        <meta property="og:title" content="Space Cat Games - Home" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="hero">
        <SpeedInsights />
        <div className="container">
          <h1 id="main-header">{header}</h1>
          <div id="build-id">{buildId}</div>
          <div id="random-tip" className="random-tip">
            {tip}
          </div>

          <br />
          <a href="/games" className="btn">
            Play Now
          </a>
        </div>
      </div>

      <div className="container">
        {gameOfTheDay && (
          <section className="game-of-the-day">
            <h2>Game of the Day</h2>
            <div className="games-grid single-game">
              <Game
                title={gameOfTheDay.title}
                img={gameOfTheDay.img}
                url={gameOfTheDay.url}
              />
            </div>
          </section>
        )}

        <section className="features">
          <h2>Why Play at Space Cat Games?</h2>

          <div className="features-grid">
            <Feature
              title="Free Games"
              text="All games are free. No subscriptions."
            />
            <Feature
              title="No Downloads"
              text="Instant browser play. OpenGL required."
            />
            <Feature
              title="Variety"
              text="From classics to modern community hits."
            />
            <Feature
              title="Open Source"
              text="Fork it. Break it. Improve it."
            />
          </div>
        </section>

        <section className="featured-games">
          <h2>Featured Games</h2>
          <p className="center">
            Featured games are selected at the start of every month
          </p>

          <div className="games-grid">
            <Game
              title="Geometry Dash"
              img="https://i.ibb.co/Xr5LnpSz/Logo-of-Geometry-Dash-svg.png"
              url="/games/gm.html"
            />

            <Game
              title="Snow Rider 3D"
              img="/images/snowrider.png"
              url="/games/snowrider.html"
            />

            <Game
              title="Space Waves"
              img="/images/spacewavesicon.png"
              url="/games/spacewaves.html"
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

function Feature({ title, text }) {
  return (
    <div className="feature">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Game({ title, img, url }) {
  const handleClick = async () => {
    // Privacy-friendly analytics - we await it with a small timeout to prevent NS_BINDING_ABORTED
    try {
      await Promise.race([
        trackGamePlay({ title, url }),
        new Promise((resolve) => setTimeout(resolve, 300)), // Max wait 300ms
      ]);
    } catch (e) {
      console.warn("[Analytics] Tracking timed out or failed", e);
    }

    // Check if URL is external (starts with http:// or https://)
    if (url.startsWith("http://") || url.startsWith("https://")) {
      // Open external links in new tab
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      // Use regular browser navigation for internal game routes
      // These are actual static HTML files that need to be loaded from the public directory
      window.location.href = url;
    }
  };

  return (
    <div className="game-item">
      <button onClick={handleClick}>
        <img src={img} alt={title} />
      </button>
      <p>{title}</p>
    </div>
  );
}
