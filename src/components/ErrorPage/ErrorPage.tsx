import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <h1>Oops, smth wrong</h1>
      <Link to="/">Main</Link>
    </>
  );
}
