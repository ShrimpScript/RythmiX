import React, { useState } from "react";
import "../components/styles/NavBar.css";
import { YouTube } from "pytube";

function Player() {
  const [url, setUrl] = useState("");

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleDownload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const video = await YouTube.fromUrl(url);
      const audio = video.streams.getAudioOnly();
      const out_file = await audio.download();

      const new_file = out_file.replace(/\.[^/.]+$/, ".mp3");
      console.log(new_file);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex" onSubmit={handleDownload}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Youtube Url"
            aria-label="Search"
            value={url}
            onChange={handleUrlChange}
          />
          <button className="btn btn-outline-success yt" type="submit">
            Download
          </button>
          <div className="about-info"></div>
        </form>
      </div>
    </nav>
  );
}

export default Player;
