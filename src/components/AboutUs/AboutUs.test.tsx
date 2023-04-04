import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import AboutUs from './AboutUs';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('<AboutUs />', () => {
  test('AboutUs mounts properly', () => {
    const wrapper = render(<AboutUs />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe('AboutUs');
  });
});
