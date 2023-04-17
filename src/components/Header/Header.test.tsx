import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('Render Header', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Page:/i)).toBeInTheDocument();
  });
});
