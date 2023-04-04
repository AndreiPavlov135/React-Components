import { BrowserRouter } from 'react-router-dom';
import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import userEvent from '@testing-library/user-event';

it('Click the about router link', async () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText('About Us')).toBeInTheDocument();

  const user = userEvent.setup();
  const about = vi.spyOn(user, 'click');
  const aboutLink = screen.getByText(/About Us/i);

  await user.click(aboutLink);
  expect(about).toHaveBeenCalledTimes(1);
});
