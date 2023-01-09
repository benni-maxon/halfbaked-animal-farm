/* eslint-disable indent */
import React from 'react';
import './Main.css';
import background from '../../background.png';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((item) => (
        <Animal key={item.name} {...item} />
      ))}
    </main>
  );
}
