import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <h1>Oops, smth wrong</h1>
        <Link to="/">Main</Link>
      </>
    );
  }
}
