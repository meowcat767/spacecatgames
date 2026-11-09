/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import commits from "./data/commits.json";

export default function Changelog() {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>


            <div className="container">
                <h1>Changelog</h1>
                <p>Track the evolution of Space Cat Games through our version history.</p>

                {commits && commits.length > 0 && (
                    <section className="changelog-section">
                        <h2>Recent Commits</h2>
                        <ul className="commit-list">
                            {commits.map((commit) => (
                                <li key={commit.hash} className="commit-item">
                                    <span className="commit-date">{commit.date}</span> - <strong>{commit.message}</strong> <small>({commit.hash})</small>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className="changelog-section">
                    <h2>Version 18</h2>
                    <p className="release-date">January 1, 2026</p>
                    <h3>Bugs Addressed:</h3>
                    <ul>
                        <li>Happy New Year!</li>
                        <li>We now use React!</li>
                        <li>We have fixed many bugs.</li>
                    </ul>
                    <h3>New features</h3>
                    <ul>
                        <li>New UI theme.</li>
                        <li>React.</li>
                        <li>Ability to search for games.</li>
                    </ul>
                </section>

                <br />
                <section className="changelog-section">
                    <h2>Version 16.1</h2>
                    <p className="release-date">October 6, 2025</p>
                    <h3>Bugs Addressed:</h3>
                    <ul>
                        <li>Weird game button layout.</li>
                        <li>A LOT of console errors!</li>
                        <li>Fixed missing Nijika Softworks logo in footer.</li>
                        <li>Fixed missing Games link in the navbar for the news page.</li>
                    </ul>
                    <h3>New features</h3>
                    <ul>
                        <li>New UI theme.</li>
                        <li>Added Suika Game, Truck Space 2, Warfare Arena 3 and Paperception.</li>
                    </ul>
                </section>
                <section className="changelog-section">
                    <h2>Version 15</h2>
                    <p className="release-date">July 3, 2025</p>
                    <h3>Bugs Addressed:</h3>
                    <ul>
                        <li>Button Div Chaining</li>
                        <li>Navbar not registering clicks if you are using a large mouse cursor.</li>
                        <li>Fixed link to GitHub taking you to a 404 page (again).</li>
                        <li>Fixed React not loading sometimes.</li>
                        <li>New Games Buttons.</li>
                    </ul>
                    <h3>New features</h3>
                    <ul>
                        <li>New game organistion.</li>
                        <li>New Hero Gradient</li>
                        <li>Starting to write things in React</li>
                    </ul>
                </section>
                <section className="changelog-section">
                    <h2>Version 14</h2>
                    <p className="release-date">June 4, 2025</p>
                    <h3>Bugs Addressed:</h3>
                    <ul>
                        <li>Images not loading from marquee bar.</li>
                        <li>Fixed more alt text on game items.</li>
                        <li>Fixed link to Github taking you to a 404 page.</li>
                        <li>Added a <em>secret</em> header that might appear sometimes...</li>
                        <li>CSS Re-write for Games Page</li>
                    </ul>
                    <h3>New features</h3>
                    <ul>
                        <li>New Dark Theme!</li>
                        <li>Free Advertising!</li>
                        <li>SuperTuxKart!</li>
                    </ul>
                </section>
                <section className="changelog-section">
                    <h2>Version 13</h2>
                    <p className="release-date">May 20, 2025</p>
                    <h3>Bugs Addressed:</h3>
                    <ul>
                        <li>New UI upgrade</li>
                        <li>Fixed alt text on game items</li>
                        <li>Fixed OrcaBar status not reporting to dex classes</li>
                        <li>Fixed the tag soup situation</li>
                        <li>Updated JQuery to pull from Google AJAX</li>
                    </ul>
                    <h3>New features</h3>
                    <ul>
                        <li>New UI!</li>
                        <li>New Games Selector</li>
                        <li>CSS Rewrite</li>
                        <li>Tips System</li>
                        <li>Google AJAX JQuery</li>
                        <li>Console Error Dumping</li>
                        <li>StarryCat SB3 Runtime</li>
                    </ul>
                </section>
                <section className="changelog-section">
                    <h2>Version 12.1</h2>
                    <p className="release-date">April 10, 2025</p>
                    <h3>Bugs Addressed:</h3>
                    <ul>
                        <li>Fixed most console errors</li>
                        <li>Fixed fps.js</li>
                        <li>Fixed server loader bug</li>
                    </ul>
                    <h3>New Features:</h3>
                    <ul>
                        <li>Added marquee for bottom banners</li>
                        <li>Added archive</li>
                        <li>Added new bottom banners</li>
                    </ul>
                </section>

                <section className="changelog-section">
                    <h2>Version 12</h2>
                    <p className="release-date">March 15, 2025</p>
                    <h3>Bugs Addressed:</h3>
                    <ul>
                        <li>Addressed 30 bugs</li>
                        <li>Patched 5 security risks</li>
                        <li>Patched a cross-site scripting bug</li>
                        <li>Patched a XHTML injection bug</li>
                        <li>Patched a bug in the OpenSiteLoader</li>
                        <li>Patched the TurboHTML read bug</li>
                        <li>Patched FVC not loading correctly</li>
                        <li>Patched a rendering issue with Gecko in the OrcaBar UI script</li>
                        <li>Patched fps.js causing a &quot;{'{'}&quot; not addressed error</li>
                    </ul>
                </section>

                <section className="changelog-section">
                    <h2>Version 11</h2>
                    <p className="release-date">January 5, 2025</p>
                    <h3>Changes:</h3>
                    <ul>
                        <li>Major UI redesign</li>
                        <li>Added 15 new games</li>
                        <li>Improved performance on mobile devices</li>
                        <li>Updated backend infrastructure</li>
                    </ul>
                </section>

                <section className="changelog-section">
                    <h2>Version 10</h2>
                    <p className="release-date">October 15, 2024</p>
                    <h3>Changes:</h3>
                    <ul>
                        <li>Rebranding to Space Cat Games completed</li>
                        <li>New logo and visual identity</li>
                        <li>Streamlined navigation</li>
                    </ul>
                </section>

                <section className="changelog-section">
                    <h2>Previous Versions</h2>
                    <p>
                        For information about previous versions (9 and earlier), please visit
                        our <a href="/archive">Archive</a>.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}

