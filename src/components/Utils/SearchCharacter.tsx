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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input
          {...register('name')}
          defaultValue={localStorage.value}
          onChange={(e) => getInputValue(e)}
        />
      </label>
      <input type="submit" value="search" />
    </form>
  );
}
