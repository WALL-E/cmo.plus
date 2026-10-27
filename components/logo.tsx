export function Logo() {
  return (
    <span className="flex items-center gap-2 font-semibold tracking-tight">
      <span
        aria-hidden="true"
        className="flex size-6 items-center justify-center rounded-md bg-foreground font-mono text-sm leading-none text-background"
      >
        +
      </span>
      <span className="text-[15px]">
        cmo<span className="text-muted-foreground">.plus</span>
      </span>
    </span>
  )
}
