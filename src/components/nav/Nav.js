import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../selectors/userSelectors';
export default function Nav() {

  const authenticated = useSelector(isAuthenticated);

  const handleLogout = () => {
    logout()
      .then(window.location.href = ('/'));
  };

  if(!authenticated) {
    return (
      <nav>
        <ul>
          <li><Link to={'/'}>Sign Up</Link></li>
          <li><Link to={'/'}>Log In</Link></li>
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <ul>
        <li><Link to={'/app/create'}>Create</Link></li>
        <li><Link to={'/app/mixtapes'}>My Mixtapes</Link></li>
        <li><Link to={'/'} onClick={handleLogout}>Logout</Link></li>
      </ul>
    </nav>
  );
}
