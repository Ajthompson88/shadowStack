import Section from './Section'
import SectionTitle from '../components/SectionTitle'

export default {
  title: 'Layout/Section',
  component: Section,
  args: {
    id: 'storybook-section',
    gradient: 'from-noir-900 to-black',
    maxWidth: 'max-w-4xl',
  },
}

export const Default = {
  render: (args) => (
    <Section {...args}>
      <SectionTitle id="storybook-title" title="Section Wrapper" />
      <p className="text-gray-200">
        The Section component provides gradient backgrounds, responsive
        padding, and a centered container. Customize via the <code>gradient</code>,{' '}
        <code>padding</code>, and <code>maxWidth</code> props instead of recreating
        the wrapper.
      </p>
    </Section>
  ),
}
