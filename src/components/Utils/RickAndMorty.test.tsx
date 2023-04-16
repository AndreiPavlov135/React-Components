import { test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import RickAndMorty from './RickAndMorty';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import createFetchMock from 'vitest-fetch-mock';

describe('<RickAndMorty/>', () => {
  const fetchMocker = createFetchMock(vi);
  fetchMocker.enableMocks();
  test('Test on bad request', () => {
    render(<RickAndMorty />, {
      wrapper: BrowserRouter,
    });
    setTimeout(() => {
      expect(screen.getByText(/No results.../i)).toBeInTheDocument();
    }, 1000);
  });
});
