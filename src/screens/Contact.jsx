import { ContactForm } from '../components/ContactForm'

export function ContactScreen({ contact }) {
  return (
    <section id="contact" className="mx-auto mt-16 max-w-4xl px-4">
      <div className="rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-lg">
        <h2 className="text-center text-3xl font-semibold text-accent">{contact.title}</h2>
        <p className="mt-3 text-center text-sm text-slate-400">
          We answer within 24 hours and share personalized study plans for your journey.
        </p>
        <div className="mt-8">
          <ContactForm labels={contact.form} />
        </div>
      </div>
    </section>
  )
}
