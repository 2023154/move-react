import { useMemo, useState } from 'react'

const defaultLabels = {
  name: 'Nome',
  email: 'E-mail',
  message: 'Mensagem',
  button: 'Enviar'
}

export function ContactForm({ labels }) {
  const formLabels = useMemo(() => ({ ...defaultLabels, ...labels }), [labels])
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const endpoint = useMemo(
    () => import.meta.env.VITE_CONTACT_ENDPOINT || 'http://localhost:4000/contact',
    []
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('send_failed')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Failed to submit contact form', err)
      setStatus('error')
      setError('Não foi possível enviar sua mensagem. Tente novamente em instantes.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {formLabels.name}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-move-green"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {formLabels.email}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-move-green"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {formLabels.message}
        <textarea
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-move-green"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-move-green metallic-effect px-6 py-3 text-sm font-semibold uppercase tracking-wide text-move-beige shadow-glow transition hover:bg-move-gold hover:text-move-gray-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Enviando...' : formLabels.button}
      </button>
      {status === 'success' && (
        <p className="text-sm font-medium text-move-green">Mensagem enviada! Verifique seu e-mail para nossa resposta.</p>
      )}
      {status === 'error' && (
        <p className="text-sm font-medium text-red-400">{error}</p>
      )}
    </form>
  )
}
