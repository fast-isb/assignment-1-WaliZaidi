import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignUp from './SignUpPage'

test('renders learn react link', () => {
  // <BrowserRouter>
    render(<SignUp />)
    const linkElement = screen.getByTestId("comp");
    expect(linkElement).toBeInTheDocument()
  {/* </BrowserRouter> */}
 });

test('typography check for text', () => {
    // <BrowserRouter>
      render(<SignUp />)
      const linkElement = screen.getByTestId("dataShow");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Please enter your details below:")
    {/* </BrowserRouter> */}
  });

test('typography check for first name', () => {
    // <BrowserRouter>
      render(<SignUp />)
      const linkElement = screen.getByTestId("firstNameShow");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("First Name")
    {/* </BrowserRouter> */}
  });
  
  test('typography fail check for text', () => {
    // <BrowserRouter>
      render(<SignUp />)
      const linkElement = screen.getByTestId("dataShow");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Wheeeeeeeee")
    {/* </BrowserRouter> */}
  });

test('typography fail check for first name', () => {
    // <BrowserRouter>
      render(<SignUp />)
      const linkElement = screen.getByTestId("firstNameShow");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Meow")
    {/* </BrowserRouter> */}
  });
  
  