import { Flame, Gauge, Layers, Workflow } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Layers,
    title: 'Instalación y Suministro de Geomembrana',
    description: 'Tendido profesional, reparación, anclaje y bota de tuberías en minas, piletas y represos.',
  },
  {
    icon: Workflow,
    title: 'Tendido de Tubería HDPE',
    description:
      'Instalación de tubería de alta densidad para proyectos mineros y acuícolas, incluyendo conexiones y Reparación de Estanques circulares.',
  },
  {
    icon: Flame,
    title: 'Termofusión Especializada',
    description:
      'Servicio técnico de fusión por calor utilizando equipos de la más alta tecnología (McElroy) para garantizar uniones perfectas.',
  },
  {
    icon: Gauge,
    title: 'Pruebas de Hermeticidad',
    description:
      'Pruebas de fuga con aire comprimido y pruebas de vacío para asegurar la integridad de cada soldadura.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Nuestros Servicios" title="Servicios Especializados" centered />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group flex flex-col rounded-lg border-2 border-transparent bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <span className="flex size-14 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-bold leading-snug text-secondary">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
