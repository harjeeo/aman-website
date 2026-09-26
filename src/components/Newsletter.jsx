export default function Newsletter() {
  return (
    <section className="bg-mid py-16">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <h2 className="font-display text-3xl text-white md:text-4xl">Subscribe to our Newsletter</h2>
        <p className="mt-3 text-sm text-white/70">
          Be the first to know about new drops, restocks, and studio stories.
        </p>
        <form
          className="mt-7 flex flex-col gap-3 sm:mx-auto sm:max-w-md sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full border-2 border-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
