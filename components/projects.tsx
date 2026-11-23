import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    title: 'Impermeabilización en Mina',
    image: '/images/proyecto-mina.png',
    alt: 'Vista aérea de una pileta minera revestida con geomembrana negra',
    wide: true,
  },
  {
    title: 'Tendido en Piletas',
    image: '/images/proyecto-piletas-tendido.png',
    alt: 'Personal tendiendo geomembrana en un reservorio de agua',
  },
  {
    title: 'Montaje de Tubería HDPE',
    image: '/images/proyecto-tuberia-mcelroy.jpg',
    alt: 'Línea de tubería HDPE de gran diámetro en una zanja de mina',
  },
  {
    title: 'Pruebas de Hermeticidad',
    titleClassName: 'text-sm',
    image: '/images/proyecto-pruebas-leister.jpg',
    alt: 'Técnico realizando prueba de presión de aire en una soldadura de geomembrana',
  },
  {
    title: 'Jaulas Marinas',
    image: '/images/proyecto-jaulas-marina.jpg',
    alt: 'Jaulas acuícolas circulares de tubería HDPE flotando en el mar',
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Galería de Proyectos" title="Experiencia en Campo" />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className={cn(
                'group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md',
                project.wide && 'sm:col-span-2 sm:aspect-auto sm:min-h-72',
              )}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes={project.wide ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="mb-2 block h-1 w-8 rounded-full bg-primary transition-all duration-300 group-hover:w-14" aria-hidden="true" />
                <h3 className={`${project.titleClassName ?? 'text-lg'} font-bold text-white`}>
                  {project.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
