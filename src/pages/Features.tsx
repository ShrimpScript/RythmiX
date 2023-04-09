import React from "react";
import "../components/styles/NavBar.css";

function Features() {
  return (
    <div className="features-container">
      <h1>
        Features <span className="badge bg-secondary">V1.0</span>
      </h1>
      <p style={{ width: "40%" }}>
        Our website empowers music lovers to effortlessly download and listen to
        their favorite tracks on-the-go. With just a few clicks, users can input
        the URL of their preferred video and our platform will automatically
        convert and prepare the audio for offline listening, anytime and
        anywhere.
      </p>
    </div>
  );
}

export default Features;
