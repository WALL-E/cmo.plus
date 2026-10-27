'use client'

import Image from 'next/image'
import { useLocale } from '@/components/locale-provider'
import { SectionHeading } from '@/components/section-heading'
import { timelineRanges } from '@/lib/i18n'

const MAX_MONTHS = 9
const ticks = [0, 3, 6, 9]
const pct = (m: number) => `${(m / MAX_MONTHS) * 100}%`

export function TimelineSection() {
  const { t } = useLocale()
  const rows = [...t.list].sort((a, b) => timelineRanges[a.id].start - timelineRanges[b.id].start)

  return (
    <section id="timeline" className="scroll-mt-14 border-b border-border bg-muted/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:px-6 md:py-24">
        <SectionHeading eyebrow={t.timeline.eyebrow} title={t.timeline.title} subtitle={t.timeline.subtitle} />

        <figure className="flex flex-col gap-6 rounded-xl border border-border bg-card p-5 md:p-8">
          <div className="flex flex-col gap-5">
            {rows.map((w, i) => {
              const r = timelineRanges[w.id]
              return (
                <div key={w.id} className="grid grid-cols-1 items-center gap-2 md:grid-cols-[180px_1fr] md:gap-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`/workers/${w.id}.png`}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 rounded-full object-cover"
                    />
                    <div className="flex min-w-0 flex-col">
                      <span className="text-sm font-medium">{w.name}</span>
                      <span className="truncate text-xs text-muted-foreground">{w.role}</span>
                    </div>
                  </div>

                  <div className="relative h-9 rounded-md bg-muted">
                    {ticks.slice(1, -1).map((m) => (
                      <span
                        key={m}
                        aria-hidden="true"
                        className="absolute inset-y-0 w-px bg-border"
                        style={{ left: pct(m) }}
                      />
                    ))}
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-2 left-0 rounded-l-sm bg-[repeating-linear-gradient(135deg,var(--color-border)_0_4px,transparent_4px_8px)]"
                      style={{ width: pct(r.start) }}
                    />
                    <div
                      className="absolute inset-y-1.5 flex min-w-fit animate-in fade-in slide-in-from-left-4 fill-mode-both items-center justify-end rounded-sm bg-foreground px-2 duration-700"
                      style={{
                        left: pct(r.start),
                        width: pct(r.end - r.start),
                        animationDelay: `${i * 120}ms`,
                      }}
                    >
                      <span className="whitespace-nowrap font-mono text-[11px] font-medium text-background">
                        {w.timeToResult}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-[180px_1fr] md:gap-6">
            <div className="hidden md:block" />
            <div className="relative h-5 font-mono text-[11px] text-muted-foreground">
              {ticks.map((m) => (
                <span
                  key={m}
                  className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full"
                  style={{ left: pct(m) }}
                >
                  {m === 0 ? t.timeline.now : m === MAX_MONTHS ? `${m}+` : m}
                </span>
              ))}
            </div>
          </div>

          <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-3 w-6 rounded-sm bg-[repeating-linear-gradient(135deg,var(--color-border)_0_4px,transparent_4px_8px)] ring-1 ring-border"
              />
              {t.timeline.legendRamp}
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-3 w-6 rounded-sm bg-foreground" />
              {t.timeline.legendResult}
            </span>
            <span className="ml-auto font-mono">
              {t.timeline.months} {'→'}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
