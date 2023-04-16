import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import Main from './Main';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('<Main />', () => {
  test('Main mounts properly', () => {
    const wrapper = render(
      <Provider store={store}>
        <Main />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    expect(wrapper).toBeTruthy();

    const links = wrapper.container.querySelectorAll('Link');
    for (const link of links) {
      expect(link?.textContent).toBe('Main');
    }
  });
});
