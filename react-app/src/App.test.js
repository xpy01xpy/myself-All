/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-04-12 17:40:34
 * @LastEditTime: 2021-04-14 14:40:10
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
