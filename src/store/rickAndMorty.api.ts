import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RickAndMortyRes } from 'components/Utils/Types/RickAndMorty';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickandmortyapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com',
  }),
  endpoints: (build) => ({
    searchCharacters: build.query<RickAndMortyRes, string>({
      query: (search: string) => ({
        url: 'api/character',
        params: {
          name: search,
        },
      }),
    }),
  }),
});

export const { useSearchCharactersQuery } = rickAndMortyApi;
