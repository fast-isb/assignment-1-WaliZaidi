import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import UpdatePersonalInfo from './updatePersonalInfo'

test('renders learn react link', () => {
  // <BrowserRouter>
    render(<UpdatePersonalInfo />)
    const linkElement = screen.getByTestId("comp");
    expect(linkElement).toBeInTheDocument()
  {/* </BrowserRouter> */}
 });

test('typography check for text', () => {
    // <BrowserRouter>
      render(<UpdatePersonalInfo />)
      const linkElement = screen.getByTestId("dataShow");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("First Name")
    {/* </BrowserRouter> */}
  });

test('button check', () => {
    // <BrowserRouter>
      render(<UpdatePersonalInfo />)
      const linkElement = screen.getByTestId("buttonCheck");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Submit")
    {/* </BrowserRouter> */}
  });
  
  test('typography check for text', () => {
    // <BrowserRouter>
      render(<UpdatePersonalInfo />)
      const linkElement = screen.getByTestId("dataShow");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Wheeeeeeeee")
    {/* </BrowserRouter> */}
  });

test('button check', () => {
    // <BrowserRouter>
      render(<UpdatePersonalInfo />)
      const linkElement = screen.getByTestId("buttonCheck");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Meow")
    {/* </BrowserRouter> */}
  });  
  