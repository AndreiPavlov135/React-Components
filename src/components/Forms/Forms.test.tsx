import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Forms from './Forms';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('<Forms />', () => {
  test('Forms', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    expect(screen.getByLabelText<HTMLSelectElement>('TITLE:')).toBeInTheDocument();
  });
});
