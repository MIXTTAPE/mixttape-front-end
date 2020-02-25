import React from 'react';

export const WhatsPlaying = ({ source, nativeId }) => {
  console.log(source);
  let link = '';

  if(source === 'youtube') {
    link = `https://www.youtube.com/embed/${nativeId}?&autoplay=1`;
  }

  if(source === 'soundcloud') {
    link = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${173704180}&color=%23ff5500&auto_play=true`;
  }

  return (
    <iframe width="560" height="315" src={link} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" autoPlay={true}></iframe>
  );
};