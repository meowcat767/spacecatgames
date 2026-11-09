/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { Helmet } from "react-helmet";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Archive() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="container">
        <h1>Welcome to the Archive</h1>
        <p>
          Explore the history of Space Cat Games with our collection of
          historical artifacts, images, and resources.
        </p>

        {/* content preserved, but ensure images have alt and correct public paths */}
        <section className="archive-section">
          <h2>Cut/Lost Images</h2>
          <div className="archive-item">
            <img
              src="https://i.ibb.co/S4CnCSwh/3dgifmaker23094.gif"
              alt="Cut loading image"
            />
            <p>
              Above: cut loading image, to be used in Version 12 and the
              OpenGameSite Loader 1.2.
            </p>
          </div>
          <div className="archive-item">
            <img
              src="https://i.ibb.co/1fxj5K19/download-9.jpg"
              alt="Cut logo for Version 10"
            />
            <p>
              Above: cut logo for Version 10, left in files until Version 12.
            </p>
          </div>
          <div className="archive-item">
            <img
              src="https://i.ibb.co/HDbQ8pR4/download-4.png"
              alt="Cut background image"
            />
            <p>
              Above: this image is assumed to be a cut background image from
              early Floppa Utils.
            </p>
          </div>
          <div className="archive-item">
            <img
              src="https://i.ibb.co/cXsLCLkf/download-8.png"
              alt="Beta identification image"
            />
            <p>Above: beta identification image used in early testing.</p>
          </div>
          <div className="archive-item">
            <img
              src="https://i.ibb.co/LXKCrHQp/3dgifmaker33064.gif"
              alt="HSTS testing GIF"
            />
            <p>This GIF was used briefly for HSTS responsiveness testing.</p>
          </div>
        </section>

        <section className="archive-section">
          <h2>Old Version Logos</h2>
          <div className="archive-item">
            <img
              src="https://i.ibb.co/nNHtpM9J/download-2.png"
              alt="Prototype logo"
            />
            <p>Prototype of the first Space Cat Games logo.</p>
          </div>
          <div className="archive-item">
            <img
              src="https://i.ibb.co/gZ11vVZj/download-1.png"
              alt="Version 8 logo"
            />
            <p>Version 8's logo.</p>
          </div>
          <div className="archive-item">
            <img
              src="https://i.ibb.co/B53qsCg5/download.png"
              alt="Version 7 final logo"
            />
            <p>Version 7's final logo; early Space Cat Games history.</p>
          </div>
          <div className="archive-item">
            <img
              src="https://i.ibb.co/JjY5b6X0/download.gif"
              alt="Cut Floppa Games Version 7 logo"
            />
            <p>
              Cut Floppa Games Version 7 logo; final logo before rename to Space
              Cat Games.
            </p>
          </div>
          <div className="archive-item">
            <img
              src="https://i.postimg.cc/t4T4CwH1/RELEASE-CANDIDATE-2-SCG-13-4-I-23-06-2025.png"
              alt="Release Candidate 2 logo"
            />
            <p>Release Candidate 2 logo used to identify internal builds.</p>
          </div>
          <div className="archive-item">
            <img
              src="https://i.postimg.cc/zGtSVsb4/2025-06-23-SCG-14-1-INT-Internal-Release-Candidate-7.gif"
              alt="Internal RC7 loading spinner"
            />
            <p>Loading spinner used by internal build 14.1-INT-RC7.</p>
          </div>
        </section>

        <section className="archive-section">
          <h2>Old Screenshots</h2>
          <div className="archive-item">
            <img
              src="https://neocities.org/site_screenshots/12/65/spacecatgames/result.html.540x405.webp"
              alt="Neocities screenshot of early development"
            />
            <p>
              This screenshot has been recovered from Neocities; shows early
              development.
            </p>
          </div>
        </section>

        <div className="archive-item">
          <img
            src="https://neocities.org/site_screenshots/12/65/spacecatgames/maintain.html.540x405.webp"
            alt="Neocities outage screenshot"
          />
          <p>Screenshot recovered from Neocities showing an outage screen.</p>
        </div>

        <section className="archive-section">
          <h2>Other Historical Items</h2>
          <div className="archive-item">
            <h3>Space Cat Games Version II</h3>
            <p>
              Abandoned rewrite known as Space Cat Games Version II; briefly
              maintained and released once.
            </p>
          </div>
          <div className="archive-item">
            <h3>SPC Legacy</h3>
            <p>
              Lost internal version known as "SPC Legacy"; traces exist in code
              but it never released.
            </p>
          </div>
        </section>

        <div className="marquee-container">
          <marquee>
            <img src="/neocities.png" width={100} height={30} alt="Neocities" />
            <img
              src="/Team_Astrocat.png"
              width={70}
              height={30}
              alt="Team Astrocat"
            />
            <img src="/gplv3.svg" width={70} height={30} alt="GPL v3" />
            <img
              src="/mothracompat.gif"
              width={70}
              height={30}
              alt="Mothra Compatible"
            />
            <img
              src="https://9p.io/plan9/img/power36.gif"
              width={70}
              height={30}
              alt="Plan 9"
            />
            <a href="https://maschinensturmer.neocities.org/">
              <img
                src="https://maschinensturmer.neocities.org/ningenshikkakubotan.png"
                alt="Maschinensturmer"
              />
            </a>
            <a href="https://adilene.net/">
              <img
                src="https://i.ibb.co/9k8TjjhS/sitebutton.gif"
                alt="Adilene"
              />
            </a>
            <a href="https://zorrpu.neocities.org">
              <img
                src="https://zorrpu.com/stamps-etc/link-me/Zorp%2088x31.jpg"
                alt="Zorrpu"
              />
            </a>
            <a href="https://frutigeraeroarchive.org/">
              <img
                src="https://frutigeraeroarchive.org/images/buttons/frutigeraeroarchive_button.png"
                alt="Frutiger Aero Archive"
              />
            </a>
            <a href="https://winbows.neocities.org/" target="_top">
              <img
                src="https://winbows.neocities.org/resources/winbows-btn.png"
                title="Winbows XP"
                alt="Winbows XP"
              />
            </a>
            <a href="https://funnyorangecat.neocities.org">
              <img
                src="https://i.postimg.cc/kXmxWz6D/IMG-0352.png"
                alt="Funny Orange Cat"
              />
            </a>
            <a href="https://webgore.neocities.org/">
              <img
                src="https://webgore.neocities.org/images/sitebutton.gif"
                alt="Webgore"
              />
            </a>
            <a href="https://lopster.neocities.org/roring/roring">
              <img
                src="https://lopster.neocities.org/deco/buttons/roring%20button.gif"
                alt="Lopster"
              />
            </a>
          </marquee>
        </div>
      </div>

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
        FPS: --
      </div>

    </>
  );
}
