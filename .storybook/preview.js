import '../src/index.css'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'Noir 900',
      values: [
        { name: 'Noir 900', value: '#0a0a0a' },
        { name: 'Noir 700', value: '#212121' },
      ],
    },
  },
}

export default preview
