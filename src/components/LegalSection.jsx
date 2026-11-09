export default function LegalSection({ title, children }) {
  return (
    <div className="border-b border-white/10 py-8 last:border-b-0">
      <h2 className="font-display text-xl text-white md:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-white/70">{children}</div>
    </div>
  )
}
