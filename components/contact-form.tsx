'use client'

import { Send } from 'lucide-react'

const fieldClass =
  'w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

export function ContactForm({ email }: { email: string }) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const from = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = `Solicitud de información - ${name}`
    const body = `${message}\n\nNombre: ${name}\nEmail: ${from}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-card p-6 text-card-foreground shadow-2xl sm:p-8">
      <h3 className="text-xl font-bold text-secondary">Envíenos un mensaje</h3>
      <div className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nombre
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Su nombre" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="correo@empresa.com"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Cuéntenos sobre su proyecto"
            className={`${fieldClass} resize-y`}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover"
        >
          Enviar Mensaje
          <Send className="size-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
