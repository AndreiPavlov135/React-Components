import React from 'react';
import { RickAndMortyProps } from './Types/RickAndMorty';
import './Utils-styles/RickAndMortyPopUp.css';

export default function RickAndMortyPopUp(props: RickAndMortyProps) {
  return (
    <section className="pop-up" onClick={() => props.setPopUp(false)}>
      <div className="pop-up_cards" onClick={(e) => e.stopPropagation()}>
        <h2>Name: {props.content?.name}</h2>
        <span>Gender: {props.content?.gender}</span>
        <span>Species: {props.content?.species}</span>
        <span>Status: {props.content?.status}</span>
        <span>Location: {props.content?.location.name}</span>
        <span>{props.content?.type ? `Type: ${props.content?.type}` : ''}</span>
        <button onClick={() => props.setPopUp(false)}>Close</button>
      </div>
    </section>
  );
}
