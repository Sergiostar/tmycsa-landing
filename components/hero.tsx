import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
      <Image
        src="/images/portada.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/60 to-secondary/80" aria-hidden="true" />

      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
          <Image
            src="/images/logo-tmc-transparent.png"
            alt=""
            aria-hidden="true"
            width={224}
            height={239}
            className="h-6 w-auto drop-shadow-[0_0_3px_rgba(255,255,255,0.75)]"
          />
          TEMYCSA
        </p>
        <h1 className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Especialistas en Termofusión y Soluciones Geosintéticas para Minería y Construcción
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
          Instalación, suministro y pruebas de hermeticidad con los más altos estándares de calidad. Proyectos
          mineros, acuícolas, agrícolas y de construcción.
        </p>
        <a
          href="#servicios"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-black/20 transition-colors hover:bg-primary-hover"
        >
          Conoce nuestros servicios
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
