import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import Joseph from '../../img/team/joseph.jpeg';
import Ian from '../../img/team/ian.jpeg';
import Travis from '../../img/team/travis.jpeg';
import Matt from '../../img/team/matt.jpeg';

export default function AboutUs() {

  return (
    <div className="about-us-flex-container">
      <div className="about-us-container">
        <h1>The Team</h1>
        <ul className="team-members">
          <li>
            <img className="team-member-photo box-shadow" src={Matt} />
            <h2>Matt Munch</h2>
            <p>Software developer with a heart of gold. Will eat cookies at all times.</p>
            <a href="https://www.linkedin.com/in/mattmunch/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/Mattmunch" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
          </li>
          <li>
            <img className="team-member-photo box-shadow" src={Joseph} />
            <h2>Joseph Tatum</h2>
            <p>Front end developer, Kate Bush enthusiast, and bakery connoisseur</p>
            <a href="https://www.linkedin.com/in/josephwtatum/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/josephtatum" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
          </li>
          <li>
            <img className="team-member-photo box-shadow" src={Travis} />
            <h2>Travis Molter</h2>
            <p>Back end developer and avid outdoor / snowboarding enthusiast</p>
            <a href="https://www.linkedin.com/in/travismolter/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/treem0" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
          </li>
          <li>
            <img className="team-member-photo box-shadow" src={Ian} />
            <h2>Ian Andrewson</h2>
            <p>Ian is a software developer and analog synth enthusiast.</p>
            <a href="https://www.linkedin.com/in/ianandrewson/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/ianandrewson" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
          </li>
        </ul>
        <Link to="/">Back to Main</Link>
      </div>
    </div>
  );
}
