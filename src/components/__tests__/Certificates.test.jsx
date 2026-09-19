import { render, screen } from '@testing-library/react'
import Certificates from '../Certificates'

describe('Certificates', () => {
  it('links the full-stack certificate to its verified credential', () => {
    render(<Certificates />)

    expect(screen.getByRole('heading', { name: 'Full Stack Web Development Certificate' })).toBeInTheDocument()
    expect(screen.getByText(/University of North Carolina at Charlotte/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view verified credential/i })).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/3d764556-e5f4-49b1-b94e-8875edb19b03/linked_in_profile'
    )
  })
})
