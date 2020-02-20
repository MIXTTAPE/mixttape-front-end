import React from 'react';
import Nav from '../nav/Nav.js';

export default function Header() {

  return (
    <>
      <h2>This is the Header</h2>
      <h3>Logo goes here</h3>
      <h3>Name goes here</h3>
      <Nav />
      <h3>Logout Button goes here</h3>
      <p>Logout should redirect to splash</p>
    </>
  );
}
