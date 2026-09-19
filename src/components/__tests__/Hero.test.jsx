import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('communicates Andrew\'s role and primary actions immediately', () => {
    render(<Hero />)

    expect(screen.getByText('Backend-focused full-stack developer')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /build reliable software/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view featured work/i })).toHaveAttribute('href', '#work')
    expect(screen.getByRole('link', { name: 'Résumé' })).toHaveAttribute('href', '/Andrew_Thompson_Resume.pdf')
  })
})
