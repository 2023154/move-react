import { ContactForm } from '../components/ContactForm'

export function ContactScreen({ contact }) {
  return (
    <section id="contact" className="mx-auto mt-16 max-w-4xl px-4">
      <div className="rounded-3xl border border-move-gray-light/10 bg-metallic-dark p-8 metallic-effect">
        <h2 className="text-center text-3xl font-semibold text-move-gold">{contact.title}</h2>
        <p className="mt-3 text-center text-sm text-move-gray-light">
          We answer within 24 hours and share personalized study plans for your journey.
        </p>
        <div className="mt-8">
          <ContactForm labels={contact.form} />
        </div>
      </div>
    </section>
  )
}
