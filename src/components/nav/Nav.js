import React from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { logout } from '../../services/auth';

export default function Nav() {

  const handleLogout = () => {
    logout()
      .then(window.location.href = ('/'));
  };

  return (
    <nav>
      <ul>
        <li><Link to={'/app/create'}>Create</Link></li>
        <li><Link to={'/app/mixtapes'}>My Mixtapes</Link></li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
}
