import React from 'react';
import Nav from '../nav/Nav.js';

export default function Header() {

  return (
    <header>
      <div className="header-container">
        <h1>MIXT</h1>
        <Nav />
      </div>
    </header>
  );
}
