import { render, screen } from '@testing-library/react'
import Contact from '../Contact'

describe('Contact component', () => {
  it('renders the contact form inputs and button', () => {
    render(<Contact />)

    expect(
      screen.getByRole('heading', { name: "Let's build something dependable" })
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send message/i })
    ).toBeInTheDocument()
  })

it('includes direct contact, resume, and social links', () => {
  render(<Contact />)

  expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', 'mailto:aj.thompson8888@gmail.com')
  expect(screen.getByRole('link', { name: 'Résumé' })).toHaveAttribute('href', '/Andrew_Thompson_Resume.pdf')
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/andrew-thompson-442477aa')
  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/Ajthompson88')
})
})
