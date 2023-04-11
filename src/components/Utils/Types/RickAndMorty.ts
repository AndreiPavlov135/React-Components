import { Dispatch, SetStateAction } from 'react';

export type RickAndMortyInfo = {
  count: number;
  next: string;
  pages: number;
  prev: boolean;
};

export type RickAndMortyItem = {
  id: number;
  name: string;
  image: string;
  species: string;
  url: string;
  gender: string;
  status: string;
  type: string | undefined;
  created: string;
  location: Location;
};

export type Location = {
  name: string;
  url: string;
};

export type RickAndMortyRes = {
  results: RickAndMortyItem[];
  info: RickAndMortyInfo;
  error: string;
};

export type RickAndMortyProps = {
  content?: RickAndMortyItem;
  setPopUp: Dispatch<SetStateAction<boolean>>;
};

export type SearchValues = {
  name: string;
};
