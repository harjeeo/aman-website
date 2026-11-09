export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-mid py-16 text-center md:py-20">
      {eyebrow && <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">{eyebrow}</p>}
      <h1 className="font-display mt-3 text-4xl text-white md:text-5xl">{title}</h1>
      {description && (
        <p className="mx-auto mt-3 max-w-md px-6 text-[15px] leading-relaxed text-white/70">{description}</p>
      )}
    </section>
  )
}
