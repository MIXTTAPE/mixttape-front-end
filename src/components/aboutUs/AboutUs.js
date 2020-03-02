import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const DeveloperLi = ({ name, img, about, github, linkedin }) => (
  <li>
    <img className="team-member-photo box-shadow" src={img} />
    <h2>{name}</h2>
    <p>{about}</p>
    <a href={linkedin} target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
    <a href={github} target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
  </li>
)

export default function AboutUs() {

  return (
    <div className="about-us-flex-container">
      <div className="about-us-container">
        <h1>The Team</h1>
        <ul className="team-members">
          <DeveloperLi
            name="Matt Munch"
            img="https://media-exp1.licdn.com/dms/image/C4E03AQH-Lifp3WhNzg/profile-displayphoto-shrink_800_800/0?e=1588204800&v=beta&t=rxRjvM3yP5JsR62o3lQuwRXXF-LW8VuMT5rSmE16LRY"
            about="Software developer with a heart of gold. Will eat cookies at all times."
            linkedin="https://www.linkedin.com/in/mattmunch/"
            github="https://github.com/Mattmunch" />
            {/* ETC.... */}
          <li>
            <img className="team-member-photo box-shadow" src="https://media-exp1.licdn.com/dms/image/C5603AQFBThwOTq795A/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=JJ2nQmdLAhQsyyAcQtO4w_9tOnZqd2Vf_7Q9ogDnsLU" />
            <h2>Joseph Tatum</h2>
            <p>Front end developer, Kate Bush enthusiast, and bakery connoisseur</p>
            <a href="https://www.linkedin.com/in/josephwtatum/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/josephtatum" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
          </li>
          <li>
            <img className="team-member-photo box-shadow" src="https://media-exp1.licdn.com/dms/image/C5603AQEtUKKp8hF-PA/profile-displayphoto-shrink_800_800/0?e=1588204800&v=beta&t=h2OdgmaUiPcKD7wqHAp3CtOkUhrqeiq3h3_TNXqwmkQ" />
            <h2>Travis Molter</h2>
            <p>Back end developer and avid outdoor / snowboarding enthusiast</p>
            <a href="https://www.linkedin.com/in/travismolter/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/treem0" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
          </li>
          <li>
            <img className="team-member-photo box-shadow" src="https://media-exp1.licdn.com/dms/image/C4E03AQFwRzax1QZcMQ/profile-displayphoto-shrink_800_800/0?e=1588204800&v=beta&t=jiDbP79ZHC7P2kOkgw62Y-o4StNrv-QHaqyHXL_ANv0" />
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
