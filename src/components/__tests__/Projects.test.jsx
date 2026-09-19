import { render, screen } from '@testing-library/react'
import Projects from '../Projects'

describe('Projects', () => {
  it('features ReliefRoot and FlowBoard without presenting the portfolio as featured work', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { name: 'ReliefRoot' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'FlowBoard' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /shadowstack/i })).not.toBeInTheDocument()
  })
})
