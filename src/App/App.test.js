import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("should render the App", () => {
    render(<App />);
    const appElement = screen.getByTitle(/app/i);
    expect(appElement).toBeInTheDocument();
  })
});
