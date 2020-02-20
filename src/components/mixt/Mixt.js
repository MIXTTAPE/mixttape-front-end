import React from 'react';
import Header from '../header/Header.js';
import Splash from '../splash/Splash.js';
import Create from '../create/Create.js';
import TapeList from '../tapeList/TapeList.js';

export default function Mixt() {

  return (
    <>
      <h1>THIS IS THE MAIN COMPONENT</h1>
      <Header />
      <h3>Router goes here</h3>
      <h3>Switch goes here</h3>
      <Splash />
      <Create />
      <TapeList />
      <h2>Detail goes here</h2>
      <h2>About Us goes here</h2>
      <h2>Player goes here</h2>
    </>
  );
}
