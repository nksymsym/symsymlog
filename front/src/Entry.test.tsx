import React from 'react';
import { render } from '@testing-library/react';
import Entry from './Entry';
import './common.css';

test('renders header', () => {
  const { getByText } = render(<Entry />);
  const textElement = getByText(/タイトル/i);
  expect(textElement).toBeInTheDocument();
});

// test('renders body', () => {
//   const { getByText } = render(<Entry />);
//   const textElement = getByText(/見出し/i);
//   expect(textElement).toBeInTheDocument();
// });
