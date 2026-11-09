import { useState } from 'react'
import { Mail01Icon, CallIcon, Location01Icon, Clock01Icon } from 'hugeicons-react'
import PageHeader from '../components/PageHeader'

const info = [
  { icon: Mail01Icon, label: 'Email', value: 'hello@verdewear.com' },
  { icon: CallIcon, label: 'Phone', value: '+1 (555) 010-2024' },
  { icon: Location01Icon, label: 'Studio', value: '128 Market Street, Portland, OR' },
  { icon: Clock01Icon, label: 'Hours', value: 'Mon–Fri, 9am–6pm' },
]

export default function ContactUs() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Questions about an order, sizing, or anything else? We're happy to help."
      />

      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-14 px-6 md:grid-cols-2 md:px-10">
          <div>
            <h2 className="font-display text-2xl text-white">Send us a message</h2>

            {sent ? (
              <p className="mt-6 text-[15px] leading-relaxed text-white/70">
                Thanks for reaching out — we'll get back to you within one business day.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-none rounded-xl border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="font-display text-2xl text-white">Reach us directly</h2>
            <div className="mt-6 space-y-6">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60">{label}</p>
                    <p className="mt-0.5 text-[15px] text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
