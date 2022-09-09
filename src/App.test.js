import { render, screen, act } from '@testing-library/react';
import App from './App';

test('reaches correct result', async () => {
  act(() => { // eslint-disable-line
    render(<App />);
  });
  await new Promise((r) => setTimeout(r, 2000));
  const linkElement = screen.getByText("The heat pump rebate for $10k in heat pump expenditures in 2023 is $8000.");
  expect(linkElement).toBeInTheDocument();
});
