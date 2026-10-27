'use client'

import Image from 'next/image'
import { ArrowUpRight, Check, Clock } from 'lucide-react'
import { useLocale } from '@/components/locale-provider'
import { SectionHeading } from '@/components/section-heading'
import type { WorkerCopy } from '@/lib/i18n'

export function WorkersSection() {
  const { t } = useLocale()

  return (
    <section id="workers" className="scroll-mt-14 border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:px-6 md:py-24">
        <SectionHeading eyebrow={t.workers.eyebrow} title={t.workers.title} subtitle={t.workers.subtitle} />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {t.list.map((worker) => (
            <li key={worker.id}>
              <WorkerCard
                worker={worker}
                bestForLabel={t.workers.bestForLabel}
                timeLabel={t.workers.timeLabel}
                online={t.workers.online}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function WorkerCard({
  worker,
  bestForLabel,
  timeLabel,
  online,
}: {
  worker: WorkerCopy
  bestForLabel: string
  timeLabel: string
  online: string
}) {
  return (
    <article className="group flex h-full flex-col gap-6 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_8px_30px_-12px_rgb(0_0_0/0.15)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={`/workers/${worker.id}.png`}
            alt={`${worker.name}, ${worker.role}`}
            width={64}
            height={64}
            className="size-16 rounded-full bg-muted object-cover"
          />
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg font-semibold tracking-tight">{worker.name}</h3>
            <p className="text-sm text-muted-foreground">{worker.role}</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
          {online}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-pretty font-medium">{worker.tagline}</p>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{worker.description}</p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {worker.capabilities.map((cap) => (
          <li
            key={cap}
            className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs text-foreground"
          >
            <Check className="size-3 text-muted-foreground" aria-hidden="true" />
            {cap}
          </li>
        ))}
      </ul>

      <dl className="mt-auto grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
        <div className="flex flex-col gap-1 bg-card p-3">
          <dt className="text-xs text-muted-foreground">{bestForLabel}</dt>
          <dd className="text-sm font-medium">{worker.bestFor}</dd>
        </div>
        <div className="flex flex-col gap-1 bg-card p-3">
          <dt className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3" aria-hidden="true" />
            {timeLabel}
          </dt>
          <dd className="flex flex-wrap items-baseline gap-x-2 text-sm font-medium">
            <span className="font-mono">{worker.timeToResult}</span>
            <span className="text-xs font-normal text-muted-foreground">{worker.speed}</span>
          </dd>
        </div>
      </dl>

      <a
        href="#get-started"
        className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-border text-sm font-medium transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
      >
        {worker.hire}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </article>
  )
}
