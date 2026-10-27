'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/components/locale-provider'

export function Hero() {
  const { t } = useLocale()

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-60"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center md:px-6 md:py-28">
        <a
          href="#workers"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          {t.hero.badge}
          <ArrowRight className="size-3" aria-hidden="true" />
        </a>

        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">
          {t.hero.title}
        </h1>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#workers"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            {t.hero.primary}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#timeline"
            className="inline-flex h-10 items-center rounded-md border border-border bg-background px-5 text-sm font-medium transition-colors hover:bg-muted"
          >
            {t.hero.secondary}
          </a>
        </div>

        <ul className="mt-4 flex items-center" aria-label={t.nav.workers}>
          {t.list.map((w, i) => (
            <li
              key={w.id}
              className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-500"
              style={{ animationDelay: `${150 + i * 90}ms`, marginLeft: i === 0 ? 0 : -12 }}
            >
              <Image
                src={`/workers/${w.id}.png`}
                alt={`${w.name}, ${w.role}`}
                width={56}
                height={56}
                className="size-12 rounded-full border-2 border-background object-cover shadow-sm md:size-14"
                priority
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
