import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-light bg-light" id="work">
      <div id="header">
        <h1 id="title">My Portfolio</h1>
      </div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="index.html" target="_blank">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="portfolio.html" target="_blank">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html" target="_blank">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
