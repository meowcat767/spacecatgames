/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Credits() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="container">
        <h1>Credits &amp; Acknowledgments</h1>
        <section className="credits-section">
          <h2>Development Team</h2>
          <ul className="credits-list">
            <li>
              <strong>Lead Developer:</strong>{" "}
              <a href="https://meowcat.site">Ben</a>
            </li>
            <li>
              <strong>Developer:</strong>{" "}
              <a href="https://lakshin.dev">Lakshin Hemachandran</a>
            </li>
            <li>
              <strong>Developer:</strong>{" "}
              <a href="https://anirudh.is-a.dev">Anirudh Karthik</a>
            </li>
            <li>
              <strong>
                <a href="https://github.com/neurontechofficial">
                  Neuron Technologies{" "}
                </a>
              </strong>
            </li>
          </ul>
          <br />
          <h2>Operations Team (NS)</h2>
          <ul className="credits-list">
            <li>
              <strong>Data: </strong>maz
            </li>
          </ul>
        </section>
        <section className="credits-section">
          <h2>Special Thanks</h2>
          <ul className="credits-list">
            <li>
              <strong>Chase:</strong> for giving us permission to distribute
              copies of Chicken Game.
            </li>
            <li>
              <strong>Neocities:</strong> For hosting us for almost a year
            </li>
            <li>
              <strong>Kaiden:</strong> For helping start this project.
            </li>
            <li>
              <strong>Luka:</strong> For being an early tester.
            </li>
            <li>
              <strong>Netlify:</strong> For keeping us running at the moment.
            </li>
          </ul>
        </section>
        <h3>Tools</h3>
        <ul className="credits-list">
          <li>
            <strong>React: </strong>Created by Meta Platforms, Inc.{" "}
            <a href="https://react.dev/">https://react.dev</a>
          </li>
          <li>
            <strong>Vite: </strong>Created by VoidZero Inc.{" "}
            <a href="https://vite.dev/">https://vite.dev</a>
          </li>
          <li>
            <strong>Git: </strong>Source Control Management System{" "}
            <a href="https://git-scm.com/">https://git-scm.com/</a>
          </li>
          <li>
            <strong>Node.js: </strong>The JavaScript runtime we use.{" "}
            <a href="https://nodejs.org/">https://nodejs.org/</a>
          </li>
          <li>
            <strong>OwO </strong>Huohhhh. fuwwy stwing twansfowmew ;3
            <a href="https://yarnpkg.com/package?q=owo&name=%40zuzak%2Fowo">
              {" "}
              OwO on Yarn
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
