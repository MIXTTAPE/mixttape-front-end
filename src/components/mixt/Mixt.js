import React from 'react';
import Header from '../header/Header.js';
import Splash from '../splash/Splash.js';
import Create from '../create/Create.js';
import TapeList from '../tapeList/TapeList.js';
import TapeDetail from '../tapeDetail/TapeDetail.js';
import AboutUs from '../aboutUs/AboutUs.js';
import Player from '../player/Player.js';

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
      <TapeDetail />
      <AboutUs />
      <Player />
    </>
  );
}
