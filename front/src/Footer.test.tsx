import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import './common.css';

test('renders footer', () => {
  const { getByText } = render(<Footer />);
  const textElement = getByText(/FooterItem1/i);
  expect(textElement).toBeInTheDocument();
});
