import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function AboutUs() {

  return (
    <>
      <h1>The Team</h1>
      <ul>
        <li>
          <h2>Matt Munch</h2>
          <p>About Matt</p>
          <a href="https://www.linkedin.com/in/mattmunch/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
          <a href="https://github.com/Mattmunch" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </li>
        <li>
          <h2>Joseph Tatum</h2>
          <p>About Joseph</p>
          <a href="https://www.linkedin.com/in/josephwtatum/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
          <a href="https://github.com/josephtatum" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </li>
        <li>
          <h2>Travis Molter</h2>
          <p>About Travis</p>
          <a href="https://www.linkedin.com/in/travismolter/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
          <a href="https://github.com/treem0" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </li>
        <li>
          <h2>Ian Andrewson</h2>
          <p>About Ian</p>
          <a href="https://www.linkedin.com/in/ianandrewson/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
          <a href="https://github.com/ianandrewson" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </li>
      </ul>
      <Link to="/">Go Back </Link>
    </>
  );
}
