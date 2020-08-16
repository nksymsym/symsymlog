import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import './common.css';

test('renders header', () => {
  const { getByText } = render(<Header />);
  const textElement = getByText(/タイトル/i);
  expect(textElement).toBeInTheDocument();
});
