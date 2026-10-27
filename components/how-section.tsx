'use client'

import { useLocale } from '@/components/locale-provider'
import { SectionHeading } from '@/components/section-heading'

export function HowSection() {
  const { t } = useLocale()

  return (
    <section id="how" className="scroll-mt-14 border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:px-6 md:py-24">
        <SectionHeading eyebrow={t.how.eyebrow} title={t.how.title} />
        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 bg-card p-6">
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
