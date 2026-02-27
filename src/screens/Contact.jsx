import { ContactForm } from '../components/ContactForm'

export function ContactScreen({ contact }) {
  const title = contact?.title ?? 'Vamos conversar'
  const subtitle = contact?.subtitle ?? 'Envie sua mensagem e retornaremos com orientações personalizadas em até 24 horas.'
  const disclaimer = contact?.disclaimer

  return (
    <section id="contact" className="mx-auto max-w-4xl px-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-center text-3xl font-bold text-slate-900">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-center text-sm text-slate-500">
            {subtitle}
          </p>
        )}
        <div className="mt-8">
          <ContactForm labels={contact?.form} />
        </div>
        {disclaimer && (
          <p className="mt-6 text-center text-xs text-slate-400 opacity-80">
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  )
}
