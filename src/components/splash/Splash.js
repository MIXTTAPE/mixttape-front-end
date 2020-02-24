import React from 'react';
import Login from '../loginSignUp/Login';
import SignUp from '../loginSignup/Signup';

export default function Splash() {
  

  return (
    <>
      <h1>MIXIT</h1>
      <h2>A mixtape maker for the modern era.</h2>
      <Login />
      <SignUp />
    </>
  );
}
