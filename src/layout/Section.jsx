export default function Section({
  id,
  children,
  className = "",
  background = "bg-transparent",
  maxWidth = "max-w-5xl",
  padding = "py-20 px-6",
}) {
  return (
    <section
      id={id}
      className={`${background} text-white ${padding} ${className}`.trim()}
    >
      <div className={`${maxWidth} mx-auto`}>{children}</div>
    </section>
  );
}