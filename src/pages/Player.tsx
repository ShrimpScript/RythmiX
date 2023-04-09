import React, { useState } from "react";
import "../components/styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Card, Button } from "react-bootstrap";

function Player() {
  const [downloads, setDownloads] = useState<any[]>([]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newDownload = (
      <Card
        style={{ width: "18rem", backgroundColor: "#9147ff", color: "#fff" }}
      >
        <Card.Img variant="top" src="..." />
        <Card.Body>
          <Card.Title>Music Title</Card.Title>
          <Card.Text>Music Description</Card.Text>
          <Button
            variant="primary"
            style={{
              borderColor: "#fff",
              color: "#fff",
              backgroundColor: "transparent",
            }}
          >
            <FontAwesomeIcon icon={faPlay} /> Play
          </Button>
          <Button
            variant="secondary"
            className="ms-2"
            style={{
              borderColor: "#fff",
              color: "#fff",
              backgroundColor: "transparent",
            }}
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </Button>
        </Card.Body>
      </Card>
    );
    setDownloads([...downloads, newDownload]);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div
        className="container-fluid"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Youtube Url"
            aria-label="Search"
            style={{ flexShrink: 0 }}
          />
          <button className="btn btn-outline-success yt" type="submit">
            Download
          </button>
          <div className="about-info"></div>
        </form>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {downloads.map((download, index) => (
            <div key={index} style={{ margin: "5px" }}>
              {download}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Player;
