import React, { useState } from 'react';
import './Main.css';
import Header from '../Header/Header';
import RickAndMorty from '../Utils/RickAndMorty';
import SearchCharacter from '../Utils/SearchCharacter';

export default function Main() {
  const [searchCharacter, setSearchCharacter] = useState('');
  return (
    <>
      <Header />
      <SearchCharacter setSearchCharacter={setSearchCharacter} searchCharacter={searchCharacter} />
      <RickAndMorty searchCharacter={searchCharacter} />
    </>
  );
}
