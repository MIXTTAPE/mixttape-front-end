import React from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {

  return (
    <nav>
      <ul>
        <li><Link to={'/app/create'}><a href="#">Create</a></Link></li>
        <li><Link to={'/app/mixtapes'}><a href="#">My Mixtapes</a></Link></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  );
}
