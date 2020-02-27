import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../services/auth';

export default function Nav() {
  const history = useHistory();
  const handleLogout = () => {
    return logout()
      .then(res => history.replace('/'));
  };
  return (
    <nav>
      <ul>
        <li><Link to={'/app/create'}>Create</Link></li>
        <li><Link to={'/app/mixtapes'}>My Mixtapes</Link></li>
        <li><a href="#" onClick={handleLogout}>Logout</a></li>
      </ul>
    </nav>
  );
}
