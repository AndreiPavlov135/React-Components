import { test } from 'vitest';
import { render } from '@testing-library/react';
import SearchCharacter from './SearchCharacter';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('<SearchCharacter/>', () => {
  test('The input field', () => {
    const testFn = () => true;
    render(<SearchCharacter setSearchCharacter={testFn} searchCharacter={''} />, {
      wrapper: BrowserRouter,
    });
    const input = document.querySelector('input') as HTMLInputElement | null;

    expect(input).toBeTruthy();

    expect(input?.textContent).toBe('');

    if (input) {
      expect(input.type).toBe('search');
    }
  });
});
