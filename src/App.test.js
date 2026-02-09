// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RestPath title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RestPath/i);
    expect(titleElement).toBeInTheDocument();
});
