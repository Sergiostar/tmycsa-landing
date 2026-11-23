import { SectionHeading } from '@/components/section-heading'

const brands = [
  { name: 'LEISTER', className: 'group-hover:text-[#d0021b]' },
  { name: 'McELROY', className: 'group-hover:text-[#f37021]' },
  { name: 'AGRU', className: 'group-hover:text-[#0062a8]' },
  { name: 'PTM', className: 'group-hover:text-[#00843d]' },
  { name: 'HÜRNER', className: 'group-hover:text-[#c8102e]' },
  { name: 'SOLMAX', className: 'group-hover:text-[#003a70]' },
]

export function Brands() {
  return (
    <section id="marcas" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Marcas que nos respaldan" title="Tecnología de Clase Mundial" centered />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <li
              key={brand.name}
              className="group flex h-28 items-center justify-center rounded-lg border border-border bg-card px-4 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <span
                className={`font-heading text-xl font-extrabold tracking-wide text-neutral-400 transition-colors duration-300 sm:text-2xl ${brand.className}`}
              >
                {brand.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
