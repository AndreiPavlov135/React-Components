import React from 'react';
import './Main.css';
import SearchBar from '../Utils/SearchBar';
import Header from '../Header/Header';

export default class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SearchBar />
      </>
    );
  }
}
