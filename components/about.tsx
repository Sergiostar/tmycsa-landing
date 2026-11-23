import Image from 'next/image'
import { Award, ShieldCheck, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const highlights = [
  { icon: ShieldCheck, label: 'Calidad garantizada en cada soldadura' },
  { icon: Wrench, label: 'Equipos de termofusión de alta tecnología' },
  { icon: Award, label: 'Alianza con las mejores marcas del mercado' },
]

export function About() {
  return (
    <section id="nosotros" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading eyebrow="Nosotros" title="Tecnología, Minería y Construcción" />
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            En TEMYCSA somos una empresa dedicada a la instalación y suministro de geomembrana, tubería, equipos de
            termofusión y accesorios. Aseguramos la correcta soldadura de cada proyecto en los sectores minero,
            acuícola, construcción y campos de golf, garantizando la más alta calidad gracias a nuestra alianza con
            las mejores marcas del mercado.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-medium text-foreground">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-lg bg-primary/15 sm:block" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/images/nosotros-termofusion.jpg"
              alt="Técnico de TEMYCSA operando una máquina de termofusión para unir tubería HDPE"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
