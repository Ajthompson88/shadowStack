import SectionTitle from './SectionTitle'

export default {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  args: {
    id: 'section-title',
    title: 'Featured Projects',
  },
}

export const Default = {}

export const LongTitle = {
  args: {
    title: 'A Much Longer, More Descriptive Section Title',
  },
}
