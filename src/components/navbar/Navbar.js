import React from "react";
import HeaderLogo from "../../assets/file.png";
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <section>
        <img src={HeaderLogo} alt="brand logo" height="40" width="40" />
        <span className={`${styles.brandText} ml-2`}>Articlyzer</span>
        <sub>
          <a
            className="ext-link"
            href="https://github.com/biswain2309/articlyzer-project/blob/master/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            v2.1.0
          </a>
        </sub>
      </section>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="ext-link ml-3"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/biswain2309/articlyzer-project"
          >
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <a
            className="ext-link ml-3"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ibiswas"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
