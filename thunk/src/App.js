import React from 'react';
import './App.css';
import StarWars from './components/StarWars/StarWars.jsx';
import Photo from './components/Item/Photo';

export default function App() {
  return (
    <>
      <div className='task'>StarWars</div>
      <StarWars />
      <div className='task'>Фото</div>
      <Photo />
    </>
  );
}