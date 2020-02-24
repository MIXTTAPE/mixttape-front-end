import React from 'react';
import { Link } from 'react-router-dom';
import Splash from '../splash/Splash';
export default function AboutUs() {

  return (
    <>
      <h1>The Team</h1>
      <ul>
        <li>Matt Munch</li>
        <li>Joseph Tatum</li>
        <li>Travis Molter</li>
        <li>Ian Andrewson</li>
      </ul>
      <Link to="/">Go Back </Link>
    </>
  );
}
