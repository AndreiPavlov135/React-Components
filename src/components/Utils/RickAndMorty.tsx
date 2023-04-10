import React, { useEffect, useState } from 'react';
import { RickAndMortyItem, RickAndMortyRes } from './Types/RickAndMorty';
import RickAndMortyPopUp from './RickAndMortyPopUp';
import './Utils-styles/RickAndMorty.css';
import Loader from './Loader';

export default function RickAndMorty(props: { searchCharacter: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [resultApi, setResultApi] = useState<RickAndMortyRes>();
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState<RickAndMortyItem>();
  const popUpFloat = (content: RickAndMortyItem) => {
    setPopUp(true);
    setPopUpContent(content);
  };
  async function request<TResponse>(url: string): Promise<TResponse> {
    const response = await fetch(url);
    const data = await response.json();
    return data as TResponse;
  }

  useEffect(() => {
    request<RickAndMortyRes>(`https://rickandmortyapi.com/api/character/${props.searchCharacter}`)
      .then((data) => {
        setLoaded(true);
        setResultApi(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [props.searchCharacter]);
  if (error) return <h2>Error: {error.message}</h2>;
  else if (!loaded) return <Loader />;
  else if (resultApi?.error) return <h2>No results...</h2>;
  else
    return (
      <section className="cards-field">
        {resultApi?.results.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="card-img"
                src={item.image}
                onClick={() => popUpFloat(item)}
                alt="Rick and Morty"
              />
            </div>
          );
        })}
        <div style={{ display: popUp ? 'block' : 'none' }}>
          <RickAndMortyPopUp content={popUpContent} setPopUp={setPopUp} />
        </div>
      </section>
    );
}
