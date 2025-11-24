import { render } from '@testing-library/react'
import Section from '../Section'

describe('Section layout wrapper', () => {
  it('applies provided props to the section wrapper and renders children', () => {
    const { container, getByText } = render(
      <Section
        id="custom-section"
        gradient="from-black to-white"
        maxWidth="max-w-2xl"
        padding="py-10 px-4"
        className="extra-class"
      >
        <p>Content goes here</p>
      </Section>
    )

    expect(getByText('Content goes here')).toBeInTheDocument()

    const section = container.querySelector('#custom-section')
    expect(section).not.toBeNull()
    expect(section).toHaveClass('bg-gradient-to-b')
    expect(section.className).toContain('from-black')
    expect(section.className).toContain('to-white')
    expect(section.className).toContain('py-10')
    expect(section.className).toContain('px-4')
    expect(section.className).toContain('extra-class')

    const inner = section?.querySelector('div')
    expect(inner).not.toBeNull()
    expect(inner.className).toContain('max-w-2xl')
    expect(inner).toHaveClass('mx-auto')
  })

  it('falls back to default gradient, maxWidth, and padding', () => {
    const { container } = render(
      <Section id="default-section">
        <span>Defaults</span>
      </Section>
    )

    const section = container.querySelector('#default-section')
    expect(section).not.toBeNull()
    expect(section?.className).toContain('from-zinc-900')
    expect(section?.className).toContain('to-black')
    expect(section?.className).toContain('py-20')
    expect(section?.className).toContain('px-6')

    const inner = section?.querySelector('div')
    expect(inner?.className).toContain('max-w-5xl')
  })
})
