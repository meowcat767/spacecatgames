/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const version = __BUILD_INFO__.appVersion;
  const [uptime, setUptime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2024-05-21T00:00:00");

    const calculateUptime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setUptime({ days, hours, minutes, seconds });
    };

    calculateUptime();
    const interval = setInterval(calculateUptime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <div className="container">
        <p>
          © 2026 Nijika Softworks &{" "}
          <a href="https://github.com/neurontechofficial">
            Neuron Technologies
          </a>{" "}
          | All rights reserved.
        </p>

        {/* Uptime Counter */}
        <div className="uptime-wrapper">
          <div className="uptime-label">SITE UPTIME</div>
          <div className="uptime-counter">
            <div className="uptime-unit">
              <span className="value">{uptime.days}</span>
              <span className="unit-label">DAYS</span>
            </div>
            <div className="uptime-unit">
              <span className="value">
                {uptime.hours.toString().padStart(2, "0")}
              </span>
              <span className="unit-label">HRS</span>
            </div>
            <div className="uptime-unit">
              <span className="value">
                {uptime.minutes.toString().padStart(2, "0")}
              </span>
              <span className="unit-label">MIN</span>
            </div>
            <div className="uptime-unit highlight">
              <span className="value">
                {uptime.seconds.toString().padStart(2, "0")}
              </span>
              <span className="unit-label">SEC</span>
            </div>
          </div>
        </div>

        {/* Style for Uptime Counter */}
        <style>
          {`
            .uptime-wrapper {
              margin: 25px auto;
              padding: 15px;
              background: rgba(255, 255, 255, 0.03);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              max-width: 400px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
              border-bottom: 2px solid #e74c3c;
            }
            .uptime-label {
              font-size: 0.75rem;
              letter-spacing: 2px;
              color: #888;
              margin-bottom: 10px;
              font-weight: bold;
            }
            .uptime-counter {
              display: flex;
              justify-content: center;
              gap: 15px;
            }
            .uptime-unit {
              display: flex;
              flex-direction: column;
              align-items: center;
              min-width: 50px;
            }
            .uptime-unit .value {
              font-size: 1.5rem;
              font-weight: 800;
              color: #eee;
              font-family: 'Inter', monospace;
            }
            .uptime-unit .unit-label {
              font-size: 0.65rem;
              color: #666;
              margin-top: 4px;
            }
            .uptime-unit.highlight .value {
              color: #e74c3c;
            }
          `}
        </style>

        {/* Images */}
        <img src="images/react.png" width={150} height={60} />
        <img src="images/vite.svg" height={55} />
        <br />

        {/* Build Info */}
        <div style={{ marginTop: "20px", color: "#666", fontSize: "0.8rem" }}>
          <div>Built on: {new Date(__BUILD_INFO__.date).toLocaleString()}</div>
          <div>
            Node: {__BUILD_INFO__.node} | Vite: {__BUILD_INFO__.vite} | Version:{" "}
            {version}
          </div>
        </div>
      </div>
    </footer>
  );
}
