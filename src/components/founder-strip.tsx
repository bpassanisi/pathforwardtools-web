export function FounderStrip() {
  return (
    <section
      className="px-6 py-16 md:px-12 lg:px-20"
      style={{ backgroundColor: '#0F1E30' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text-on-dark)' }}>
              Brandon Passanisi
            </p>
            <p className="mt-1 text-sm" style={{ color: 'var(--color-text-muted-on-dark)' }}>
              Northern California · Building PathForward
            </p>
          </div>
          <a
            href="https://passante.io"
            className="text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: 'var(--color-accent)' }}
          >
            passante.io →
          </a>
        </div>
      </div>
    </section>
  )
}
