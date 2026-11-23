import { Mail, UserRound } from 'lucide-react'
import { Logo } from '@/components/logo'
import { SectionHeading } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'

export const CONTACT_EMAIL = 'contacto@tmycsa.com'

export function Contact() {
  return (
    <footer id="contacto" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <SectionHeading eyebrow="Contacto" title="En TEMYCSA siempre es un placer atenderle." inverted />

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-primary">
                <UserRound className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold text-white">Sergio H. Ocaño Careaga</p>
                <p className="text-white/70">Gerente de Proyecto</p>
              </div>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-primary">
                <Mail className="size-6" aria-hidden="true" />
              </span>
              <span className="text-lg text-white underline-offset-4 group-hover:text-primary group-hover:underline">
                {CONTACT_EMAIL}
              </span>
            </a>
          </div>
        </div>

        <ContactForm email={CONTACT_EMAIL} />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <Logo inverted />
          <p className="text-sm text-white/60">
            {'© '}
            {new Date().getFullYear()} TEMYCSA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
