import { render, screen } from '@testing-library/react'
import SectionTitle from '../SectionTitle'

describe('SectionTitle', () => {
  it('renders the provided title text', () => {
    render(<SectionTitle id="projects" title="Projects" />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Projects' })
    ).toBeInTheDocument()
  })

  it('applies the supplied id to the wrapper div', () => {
    const { container } = render(
      <SectionTitle id="skills" title="Skills" />
    )

    expect(container.querySelector('#skills')).not.toBeNull()
  })
})
