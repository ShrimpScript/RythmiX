import React from "react";

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
          <button className="btn btn-outline-success" type="submit">
            Download
          </button>
        </form>
      </div>
    </nav>
  );
}

export default YouTube;
