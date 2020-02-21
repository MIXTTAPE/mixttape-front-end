import React from 'react';
import youtube from '../services/youtube';

export default function App() {
  youtube('malamente')
    .then(res => console.log(res.items));

  return <h1>Hello World</h1>;
}
