import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SubmissionPage from './SubmissionPage'

test('renders learn react link', () => {
  // <BrowserRouter>
    render(<SubmissionPage />)
    const linkElement = screen.getByTestId("comp");
    expect(linkElement).toBeInTheDocument()
  {/* </BrowserRouter> */}
 });

test('typography check for text', () => {
    // <BrowserRouter>
      render(<SubmissionPage />)
      const linkElement = screen.getByTestId("dataShow");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Welcome Back! Please choose one option from below")
    {/* </BrowserRouter> */}
  });

test('buttonCheck', () => {
    // <BrowserRouter>
      render(<SubmissionPage />)
      const linkElement = screen.getByTestId("buttonCheck");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Update User Information")
    {/* </BrowserRouter> */}
  });
  
  test('typography fail check for text', () => {
    // <BrowserRouter>
      render(<SubmissionPage />)
      const linkElement = screen.getByTestId("dataShow");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Wheeeeeeeee")
    {/* </BrowserRouter> */}
  });

test('buttonCheck fail', () => {
    // <BrowserRouter>
      render(<SubmissionPage />)
      const linkElement = screen.getByTestId("buttonCheck");
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Meow")
    {/* </BrowserRouter> */}
  });
  
  