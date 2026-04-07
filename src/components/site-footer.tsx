export function SiteFooter() {
  return (
    <footer className="px-6 py-8 md:px-12" style={{ backgroundColor: 'var(--color-bg-footer)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <span
          className="text-sm font-semibold tracking-wider"
          style={{ color: 'var(--color-text-primary)' }}
        >
          PathForward Tools™
        </span>

        <div className="flex flex-wrap justify-center gap-4 text-sm" style={{ color: 'var(--color-text-muted)' }}>
          <a href="https://pathforwardmind.com" className="transition-opacity hover:opacity-80">
            Mind
          </a>
          <a href="https://pathforwardclear.com" className="transition-opacity hover:opacity-80">
            Clear
          </a>
          <a href="https://pathforwardformen.com" className="transition-opacity hover:opacity-80">
            for Men
          </a>
          <span>Quantum</span>
        </div>

        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          A Passante brand · © 2026
        </p>
      </div>
    </footer>
  )
}
