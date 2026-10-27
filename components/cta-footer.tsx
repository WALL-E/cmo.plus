'use client'

import { ArrowRight, Mail } from 'lucide-react'
import { useLocale } from '@/components/locale-provider'
import { Logo } from '@/components/logo'
import { CONTACT_EMAIL, CONTACT_EMAILS } from '@/lib/i18n'

export function CtaFooter() {
  const { t } = useLocale()

  return (
    <>
      <section id="get-started" className="scroll-mt-14 border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center md:px-6 md:py-28">
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tighter md:text-5xl">
            {t.cta.title}
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">{t.cta.subtitle}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            {t.cta.button}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 text-sm text-muted-foreground">
            {t.cta.contactLabel}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-1.5 font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              <Mail className="size-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center md:px-6">
          <Logo />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            {CONTACT_EMAILS.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                {email}
              </a>
            ))}
          </div>
          <p>
            {'© '}
            {new Date().getFullYear()} {'cmo.plus. '}
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  )
}
