import React, { useEffect, useState } from 'react';
import { RickAndMortyItem, RickAndMortyRes } from './Types/RickAndMorty';
import RickAndMortyPopUp from './RickAndMortyPopUp';

export default function RickAndMorty() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [resultApi, setResultApi] = useState<RickAndMortyRes>();
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState<RickAndMortyItem>();
  const popUpFloat = (content: RickAndMortyItem) => {
    setPopUp(true);
    setPopUpContent(content);
  };
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: RickAndMortyRes) => {
        setLoaded(!loaded);
        setResultApi(data);
        console.log(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  if (error) return <h2>Error: {error.message}</h2>;
  else if (!loaded) return <h2>Progressing...</h2>;
  else if (resultApi?.error) return <h2>No results...</h2>;
  else
    return (
      <>
        {resultApi?.results.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} onClick={() => popUpFloat(item)} alt="Rick and Morty" />
            </div>
          );
        })}
        <div style={{ display: popUp ? 'flex' : 'none' }}>
          <RickAndMortyPopUp content={popUpContent} setPopUp={setPopUp} />
        </div>
      </>
    );
}
