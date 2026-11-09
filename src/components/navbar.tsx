/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { Link } from "react-router-dom";

export default function Navbar() {
  const version = __BUILD_INFO__.appVersion;

  return (
    <div className="topnav">
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/opensource">Source Code</Link>
      <Link to="/credits">Credits</Link>
      <Link to="/changelog">Changelog</Link>
      <Link to="/archive">Archive</Link>
      <Link to="/settings" style={{ color: '#e74c3c', fontWeight: 'bold' }}>Settings</Link>
      <span
        style={{
          float: "right",
          padding: "14px 16px",
          color: "#888",
          fontSize: "0.8rem",
          cursor: "default",
        }}
      >
        v{version}
      </span>
    </div>
  );
}
