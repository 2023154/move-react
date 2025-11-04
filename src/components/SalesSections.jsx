import { TestimonialSlider } from './TestimonialSlider'
import {
  FiCheckCircle,
  FiClipboard,
  FiClock,
  FiCompass,
  FiFileText,
  FiHelpCircle,
  FiList,
  FiMail,
  FiSmartphone,
  FiTrendingUp,
  FiVideo
} from 'react-icons/fi'

const iconMap = {
  check: FiCheckCircle,
  list: FiList,
  clipboard: FiClipboard,
  compass: FiCompass,
  file: FiFileText,
  video: FiVideo,
  chart: FiTrendingUp,
  shield: FiHelpCircle,
  clock: FiClock,
  device: FiSmartphone,
  mail: FiMail
}

const Section = ({ id, title, eyebrow, children }) => (
  <section id={id} className="rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-lg">
    {eyebrow ? (
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-move-green">{eyebrow}</p>
    ) : null}
  <h2 className="text-3xl font-semibold text-move-green">{title}</h2>
    <div className="mt-4 space-y-4 text-base text-slate-200">{children}</div>
  </section>
)

const BulletList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => {
      const normalized = typeof item === 'string' ? { text: item } : item
      const Icon = iconMap[normalized.icon ?? 'check'] ?? FiCheckCircle
      return (
        <li key={index} className="flex items-start gap-3">
          <Icon className="mt-1 shrink-0 text-move-green" />
          <span>{normalized.text}</span>
        </li>
      )
    })}
  </ul>
)

const FeatureGrid = ({ items }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {items.map((item) => {
      const Icon = iconMap[item.icon ?? 'check'] ?? FiCheckCircle
      return (
        <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="flex items-center gap-3 text-move-green">
            <Icon className="text-xl" />
            <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
          </div>
          <p className="mt-3 text-sm text-slate-300">{item.description}</p>
        </div>
      )
    })}
  </div>
)

const Testimonials = ({ items }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {items.map((item, index) => (
      <blockquote key={index} className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-slate-200">
        <p className="italic">"{item.quote}"</p>
  <footer className="mt-4 text-right font-semibold text-move-green">- {item.author}</footer>
      </blockquote>
    ))}
  </div>
)

const FAQList = ({ items }) => (
  <div className="space-y-3">
    {items.map((item, index) => (
      <details key={index} className="group rounded-2xl border border-white/10 bg-black/20 p-4">
        <summary className="flex cursor-pointer items-center justify-between text-left text-base font-semibold text-slate-100">
          {item.question}
          <span className="text-move-green transition group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 text-sm text-slate-300">{item.answer}</p>
      </details>
    ))}
  </div>
)

const CtaCard = ({ id, title, text, buttonLabel, buttonHref = '#checkout', note }) => (
  <section id={id} className="rounded-3xl border border-move-green/40 bg-gradient-to-br from-[#c6f6d5] via-[#b6f2ce] to-[#a9e9c2] p-8 text-center shadow-lg">
    <h2 className="text-3xl font-semibold text-[#0f5132]">{title}</h2>
    <p className="mt-3 text-base text-[#1f5c42]">{text}</p>
    <a
      href={buttonHref}
      className="mt-6 inline-flex items-center justify-center rounded-full bg-move-green px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-move-green/30 transition hover:bg-[#0a7a4a]"
    >
      {buttonLabel}
    </a>
    {note ? <p className="mt-3 text-xs uppercase tracking-wide text-[#2e6c4c]/80">{note}</p> : null}
  </section>
)

export function SalesSections({ sales }) {
  if (!sales) return null
  const {
    problem,
    solution,
    product,
    benefits,
    differentiators,
    primaryCta,
    testimonials,
    visualTips,
    authority,
    secondaryCta,
    faq,
    guarantee,
    bonuses,
    urgency,
    finalCta,
    compatibility,
    support
  } = sales

  return (
    <div id="details" className="mx-auto max-w-5xl space-y-12 px-4 md:space-y-16">
      {problem ? (
        <Section id="problem" title={problem.title}>
          <BulletList items={problem.bullets} />
        </Section>
      ) : null}

      {solution ? (
        <Section id="solution" title={solution.title}>
          {solution.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Section>
      ) : null}

      {product ? (
        <Section id="produto" title={product.title}>
          <FeatureGrid items={product.items} />
          {product.note ? <p className="text-sm text-slate-400">{product.note}</p> : null}
        </Section>
      ) : null}

      {benefits ? (
        <Section id="beneficios" title={benefits.title}>
          <BulletList items={benefits.bullets} />
        </Section>
      ) : null}

      {differentiators ? (
        <Section id="diferenciais" title={differentiators.title}>
          <BulletList items={differentiators.bullets} />
        </Section>
      ) : null}

      {primaryCta ? (
        <CtaCard
          id={primaryCta.id}
          title={primaryCta.title}
          text={primaryCta.text}
          buttonLabel={primaryCta.buttonLabel}
          buttonHref={primaryCta.buttonHref}
          note={primaryCta.note}
        />
      ) : null}

      {testimonials ? (
        <Section id="prova-social" title={testimonials.title}>
          <TestimonialSlider testimonials={testimonials} />
        </Section>
      ) : null}

      {visualTips ? (
        <Section id="visual" title={visualTips.title}>
          <BulletList items={visualTips.bullets} />
        </Section>
      ) : null}

      {authority ? (
        <Section id="autoria" title={authority.title}>
          {authority.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Section>
      ) : null}

      {secondaryCta ? (
        <CtaCard
          id={secondaryCta.id}
          title={secondaryCta.title}
          text={secondaryCta.text}
          buttonLabel={secondaryCta.buttonLabel}
          buttonHref={secondaryCta.buttonHref}
          note={secondaryCta.note}
        />
      ) : null}

      {faq ? (
        <Section id={faq.id} title={faq.title}>
          <FAQList items={faq.items} />
        </Section>
      ) : null}

      {guarantee ? (
        <Section id="garantia" title={guarantee.title}>
          <p>{guarantee.text}</p>
        </Section>
      ) : null}

      {bonuses ? (
        <Section id="bonus" title={bonuses.title}>
          <BulletList items={bonuses.bullets} />
        </Section>
      ) : null}

      {urgency ? (
        <Section id="urgencia" title={urgency.title}>
          <p>{urgency.text}</p>
        </Section>
      ) : null}

      {finalCta ? (
        <CtaCard
          id={finalCta.id}
          title={finalCta.title}
          text={finalCta.text}
          buttonLabel={finalCta.buttonLabel}
          buttonHref={finalCta.buttonHref}
          note={finalCta.note}
        />
      ) : null}

      {compatibility ? (
        <Section id="compatibilidade" title={compatibility.title}>
          <BulletList items={compatibility.bullets} />
        </Section>
      ) : null}

      {support ? (
        <Section id="suporte" title={support.title}>
          <p>
            {support.description}{' '}
            {support.email ? (
              <a href={`mailto:${support.email}`} className="text-move-green underline">
                {support.email}
              </a>
            ) : null}
          </p>
          {support.responseTime ? <p className="text-sm text-slate-400">{support.responseTime}</p> : null}
        </Section>
      ) : null}
    </div>
  )
}
