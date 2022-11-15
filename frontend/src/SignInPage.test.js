import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignIn from './SignInPage'

test('renders learn react link', () => {
  // <BrowserRouter>
    render(<SignIn />)
    const linkElement = screen.getByTestId("comp");
    expect(linkElement).toBeInTheDocument()
  {/* </BrowserRouter> */}
 });

test('typography check for text', () => {
    // <BrowserRouter>
      render(<SignIn />)
      const linkElement = screen.getByTestId("dataShow");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Welcome Back. Sign in!")
    {/* </BrowserRouter> */}
  });

test('typography check for first name', () => {
    // <BrowserRouter>
      render(<SignIn />)
      const linkElement = screen.getByTestId("passwordCheck");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Password")
    {/* </BrowserRouter> */}
  });
  
  test('typography fail check for first name', () => {
    // <BrowserRouter>
      render(<SignIn />)
      const linkElement = screen.getByTestId("passwordCheck");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Wheeeeeeeee")
    {/* </BrowserRouter> */}
  });