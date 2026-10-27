'use client'

import { useLocale } from '@/components/locale-provider'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const { t, locale, setLocale } = useLocale()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-8">
          <a href="#top" className="flex items-center gap-2" aria-label="cmo.plus home">
            <Logo />
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#workers" className="transition-colors hover:text-foreground">
              {t.nav.workers}
            </a>
            <a href="#timeline" className="transition-colors hover:text-foreground">
              {t.nav.timeline}
            </a>
            <a href="#how" className="transition-colors hover:text-foreground">
              {t.nav.how}
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label="Language"
            className="flex items-center rounded-full border border-border p-0.5 text-xs font-medium"
          >
            {(['en', 'zh'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  locale === code
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {code === 'en' ? 'EN' : '中文'}
              </button>
            ))}
          </div>
          <a
            href="#signin"
            className="hidden rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            {t.nav.signIn}
          </a>
          <a
            href="#get-started"
            className="inline-flex h-8 items-center rounded-md bg-foreground px-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            {t.nav.getStarted}
          </a>
        </div>
      </div>
    </header>
  )
}
