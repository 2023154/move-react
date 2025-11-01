export function ContactForm({ labels }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
      }}
      className="grid gap-4"
    >
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {labels.name}
        <input type="text" required className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-accent" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {labels.email}
        <input type="email" required className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-accent" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {labels.message}
        <textarea rows="5" required className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-accent" />
      </label>
      <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-night transition hover:bg-emerald-500">
        {labels.button}
      </button>
    </form>
  )
}
