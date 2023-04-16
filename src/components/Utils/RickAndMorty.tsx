import React, { useEffect, useState } from 'react';
import { RickAndMortyItem, RickAndMortyRes } from './Types/RickAndMorty';
import RickAndMortyPopUp from './RickAndMortyPopUp';
import './Utils-styles/RickAndMorty.css';
import './Utils-styles/Search-bar.css';
import Loader from './Loader';
import { useSearchCharactersQuery } from '../../store/rickAndMorty.api';
import { useDebounce } from '../../Hooks/debounce';

export default function RickAndMorty() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [resultApi, setResultApi] = useState<RickAndMortyRes>();
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState<RickAndMortyItem>();
  const [inputValue, setInputValue] = useState('');
  const debounced = useDebounce(inputValue);
  const popUpFloat = (content: RickAndMortyItem) => {
    setPopUp(true);
    setPopUpContent(content);
  };

  const { isLoading, isError, data } = useSearchCharactersQuery(debounced);
  // useEffect(() => {
  //   request<RickAndMortyRes>(`https://rickandmortyapi.com/api/character/${props.searchCharacter}`)
  //     .then((data) => {
  //       setLoaded(true);
  //       setResultApi(data);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // }, [props.searchCharacter]);
  // if (error) return <h2>Error: {error.message}</h2>;
  // else if (!loaded) return <Loader />;
  // else if (resultApi?.error) return <h2>No results...</h2>;
  // else
  return (
    <section className="cards-field">
      <div className="search-field">
        <label className="search-field__label" htmlFor="search">
          Search
        </label>
        <form
          className="search-field__group"
          // onSubmit={handleSubmit(onSubmit)}
          // onKeyDown={(e) => onEnterPress(e)}
        >
          <input
            className="search-field__input"
            type="search"
            id="search"
            defaultValue={localStorage.value}
            placeholder="search name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button className="search-field__btn" type="submit" onClick={(e) => e.preventDefault()}>
            Search
          </button>
        </form>
      </div>
      {data?.results.map((item) => {
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
      <div style={{ visibility: popUp ? 'visible' : 'hidden' }}>
        <RickAndMortyPopUp content={popUpContent} setPopUp={setPopUp} />
      </div>
    </section>
  );
}
