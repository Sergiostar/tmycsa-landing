import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <span className={cn('flex flex-col leading-none', className)}>
      {inverted ? (
        <Image
          src="/images/logo-tmc-transparent.png"
          alt="TM&C"
          width={224}
          height={239}
          className="h-14 w-auto self-start object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.55)]"
        />
      ) : (
        <Image
          src="/images/logo-tmc.png"
          alt="TM&C"
          width={240}
          height={262}
          priority
          className="h-12 w-auto self-start object-contain"
        />
      )}
      <span
        className={cn(
          'mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]',
          inverted ? 'text-white/70' : 'text-muted-foreground',
        )}
      >
        Tecnología Minería y Construcción
      </span>
    </span>
  )
}
