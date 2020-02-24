import React from 'react';
import Header from '../header/Header.js';
import Splash from '../splash/Splash.js';
import Create from '../create/Create.js';
import TapeList from '../tapeList/TapeList.js';
import TapeDetail from '../tapeDetail/TapeDetail.js';
import AboutUs from '../aboutUs/AboutUs.js';
import Player from '../player/Player.js';
import '../../styles/global.css';

export default function Mixt() {

  return (
    <>
      <Header />   
      <Create />
      <TapeList />
      <TapeDetail />
      <AboutUs />
      <Player />
    </>
  );
}
