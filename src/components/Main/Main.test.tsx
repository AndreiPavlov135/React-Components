import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import Main from './Main';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('<Main />', () => {
  test('Main mounts properly', () => {
    const wrapper = render(<Main />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    const links = wrapper.container.querySelectorAll('Link');
    for (const link of links) {
      expect(link?.textContent).toBe('Main');
    }
  });
});
