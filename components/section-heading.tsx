export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="flex max-w-2xl flex-col gap-3">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tighter md:text-4xl">{title}</h2>
      {subtitle ? <p className="text-pretty leading-relaxed text-muted-foreground">{subtitle}</p> : null}
    </div>
  )
}
