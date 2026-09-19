export default function SectionTitle({ id, eyebrow, title, description, align = "center" }) {
  const centered = align === "center";
  return (
    <div id={id} className={`${centered ? "text-center" : "text-left"} mb-12`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 max-w-4xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className={`mt-5 max-w-3xl text-lg leading-8 text-slate-400 ${centered ? "mx-auto" : ""}`}>{description}</p>}
    </div>
  );
}
