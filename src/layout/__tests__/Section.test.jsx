import { render } from '@testing-library/react'
import Section from '../Section'

describe('Section layout wrapper', () => {
  it('applies provided props to the section wrapper and renders children', () => {
    const { container, getByText } = render(
      <Section
        id="custom-section"
        background="bg-black"
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
    expect(section).toHaveClass('bg-black')
    expect(section).toHaveClass('text-white')
    expect(section).toHaveClass('py-10')
    expect(section).toHaveClass('px-4')
    expect(section).toHaveClass('extra-class')

    const inner = section?.querySelector('div')
    expect(inner).not.toBeNull()
    expect(inner).toHaveClass('max-w-2xl')
    expect(inner).toHaveClass('mx-auto')
  })

  it('falls back to default background, maxWidth, and padding', () => {
    const { container } = render(
      <Section id="default-section">
        <span>Defaults</span>
      </Section>
    )

    const section = container.querySelector('#default-section')
    expect(section).not.toBeNull()
    expect(section).toHaveClass('bg-transparent')
    expect(section).toHaveClass('text-white')
    expect(section).toHaveClass('py-20')
    expect(section).toHaveClass('px-6')

    const inner = section?.querySelector('div')
    expect(inner).toHaveClass('max-w-5xl')
    expect(inner).toHaveClass('mx-auto')
  })
})