export default function Section({
  id,
  children,
  className = "",
  gradient = "from-zinc-900 to-black",
  maxWidth = "max-w-5xl",
  padding = "py-20 px-6",
}) {
  return (
    <section
      id={id}
      className={`bg-gradient-to-b ${gradient} text-white ${padding} ${className}`.trim()}
    >
      <div className={`${maxWidth} mx-auto`}>{children}</div>
    </section>
  );
}
