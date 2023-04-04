import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Cards from './Cards';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

it('Button mounts properly', () => {
  const wrapper = render(<Cards />, { wrapper: BrowserRouter });
  const button = wrapper.container.querySelector('button') as HTMLButtonElement;

  expect(button.textContent).toBe('more...');
});
