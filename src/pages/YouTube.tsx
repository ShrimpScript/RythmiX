import React from "react";
import "../components/styles/NavBar.css";

function YouTube() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Youtube Url"
            aria-label="Search"
          />
          <button className="btn btn-outline-success yt" type="submit">
            Download
          </button>
        </form>
      </div>
    </nav>
  );
}

export default YouTube;
