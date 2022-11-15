import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

test('renders learn react link', () => {
  <BrowserRouter>
    render(<App />)
    const linkElement = screen.getByTestId("comp");
    expect(linkElement).toBeInTheDocument()
  </BrowserRouter>
});

//works as of now
