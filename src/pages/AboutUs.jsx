import PageHeader from '../components/PageHeader'

const values = [
  {
    title: 'Materials First',
    detail: 'Every piece starts with the fabric — organic cotton, responsibly sourced wool, recycled fibers.',
  },
  {
    title: 'Made to Last',
    detail: 'We design for durability, not disposability, so your favorites stay in rotation for years.',
  },
  {
    title: 'Considered Design',
    detail: 'Clean, versatile silhouettes cut for how you actually move through your day.',
  },
]

export default function AboutUs() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About Verde Wear"
        description="Clothing built for movement, made to last."
      />

      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-display text-2xl text-white md:text-3xl">Why we started Verde Wear</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            Verde Wear began with a simple frustration: too much of what's sold as "everyday clothing" doesn't
            actually hold up to everyday life. We set out to build a smaller, considered collection of
            essentials — pieces cut from durable, natural fabrics, designed to move with you and get better
            with every wash, not fall apart after a season.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            We work in small batches with a focus on fabric quality over fast turnover, choosing materials
            first and building each silhouette around how it feels to actually wear.
          </p>
        </div>
      </section>

      <section className="bg-mid py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="font-display text-center text-2xl text-white md:text-3xl">What We Stand For</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-display text-lg text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{value.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
