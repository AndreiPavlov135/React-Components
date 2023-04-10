import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './Utils-styles/Search-bar.css';
import { SearchValues } from './Types/RickAndMorty';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function SearchCharacter(props: {
  setSearchCharacter: Dispatch<SetStateAction<string>>;
  searchCharacter: string;
}) {
  const { register, handleSubmit } = useForm<SearchValues>();
  const onSubmit: SubmitHandler<SearchValues> = (data) => {
    props.setSearchCharacter(`?name=${data?.name}`);
  };
  const [inputValue, setInputValue] = useState('');
  function getInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setInputValue(e.target.value);
  }
  useEffect(() => {
    return () => {
      localStorage.value = inputValue;
    };
  });
  return (
    <div className="search-field">
      <label className="search-field__label" htmlFor="search">
        Search
      </label>
      <form className="search-field__group" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="search-field__input"
          type="search"
          id="search"
          defaultValue={localStorage.value}
          placeholder="search name"
          {...register('name')}
          onChange={(e) => getInputValue(e)}
        />
        <button className="search-field__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
