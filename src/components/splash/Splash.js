import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../loginSignUp/Login.js';
import SignUp from '../loginSignUp/SignUp.js';
import Illustration from '../../img/splash-illustration.svg';
export default function Splash() {
  
  const [copyContent, setCopyContent] = useState('login');
  const handleClick = (comp) => {
    if(comp === 'login') setCopyContent('login');
    if(comp === 'signup') setCopyContent('signup');
  };

  const renderedComponent = () => {
    if(copyContent === 'login') return <Login onClick={handleClick}/>;
    if(copyContent === 'signup') return <SignUp onClick={handleClick}/>;
  };

  return (
    <>
      <div className="full-screen-container">
        <div className="splash-container">
          <div className="image-container margin-right-medium">
            <img src={Illustration} />
          </div>
          <div className="copy-container">
            <h1>MIXT</h1>
            <h2>A mixtape maker for the modern era.</h2>
            {renderedComponent()}
          </div>
        </div>
      </div>
      <Link className="link-to-about" to={'/about'}>Who made this?</Link>
    </>
  );
}
