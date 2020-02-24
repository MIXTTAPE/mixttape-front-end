import React from 'react';
import Illustration from '../../img/splash-illustration.svg';

export default function Splash() {
  
  return (
    <div className="full-screen-container">
      <div className="splash-container">
        <div className="image-container margin-right-medium">
          <img src={Illustration} />
        </div>
        <div className="">
          <h1>MIXIT</h1>
          <h2>A mixtape maker for the modern era.</h2>
          <button className="button-primary margin-right-small">Login</button>
          <button className="button-secondary">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
