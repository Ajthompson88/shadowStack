import { render, screen } from '@testing-library/react'
import Contact from '../Contact'

describe('Contact component', () => {
  it('renders the contact form inputs and button', () => {
    render(<Contact />)

    expect(
      screen.getByRole('heading', { name: 'Contact' })
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send message/i })
    ).toBeInTheDocument()
  })

  it('includes links to social profiles', () => {
    render(<Contact />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)
    const hrefs = links.map((link) => link.getAttribute('href'))
    expect(hrefs).toEqual([
      'https://www.facebook.com/andrew.thompson.58726',
      'https://www.instagram.com/aj.thompson8888/',
      'https://twitter.com',
      'https://www.linkedin.com/in/andrew-thompson-442477aa',
      'https://github.com/Ajthompson88',
    ])
  })
})
