const cardContent = `
ShadowStack uses noir gradients, subtle highlights, and neon glows.
Use the \`glossy-card\` class to keep cards consistent.
`

export default {
  title: 'Primitives/GlossyCard',
}

export const Default = {
  render: () => (
    <div className="p-10 bg-noir-900 min-h-[50vh] text-white">
      <div className="max-w-md glossy-card p-6 space-y-3">
        <h3 className="text-xl font-semibold">Glossy Card</h3>
        <p>{cardContent}</p>
        <button className="bg-blueglow-dark hover:bg-blueglow-light text-white rounded px-4 py-2 transition">
          Call To Action
        </button>
      </div>
    </div>
  ),
}
