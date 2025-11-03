import { ContactForm } from '../components/ContactForm'

export function ContactScreen({ contact }) {
  const title = contact?.title ?? 'Vamos conversar'
  const subtitle = contact?.subtitle ?? 'Envie sua mensagem e retornaremos com orientações personalizadas em até 24 horas.'
  const disclaimer = contact?.disclaimer

  return (
    <section id="contact" className="mx-auto mt-20 max-w-4xl px-4">
      <div className="metallic-effect rounded-3xl border border-move-gray-light/10 bg-metallic-dark p-8 shadow-2xl md:p-10">
        <h2 className="text-center text-3xl font-semibold text-move-gold">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-center text-sm text-move-gray-light">
            {subtitle}
          </p>
        )}
        <div className="mt-8">
          <ContactForm labels={contact?.form} />
        </div>
        {disclaimer && (
          <p className="mt-6 text-center text-xs text-move-gray-light opacity-80">
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  )
}
