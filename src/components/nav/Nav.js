import React from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {

  return (
    <nav>
      <ul>
        <li><Link to={'/app/create'}>Create</Link></li>
        <li><Link to={'/app/mixtapes'}>My Mixtapes</Link></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  );
}
