import Image from 'next/image'

export function AttributionBridge() {
  return (
    <section
      className="px-6 py-16 text-center md:px-12"
      style={{ backgroundColor: '#0F1E30' }}
    >
      <div className="mx-auto flex max-w-sm flex-col items-center gap-4">
        <a href="https://passante.io" aria-label="Visit Passante website">
          <Image
            src="/brand/passante-icon.png"
            alt="Passante"
            width={32}
            height={32}
            className="h-8 w-8 opacity-80 transition-opacity hover:opacity-100"
          />
        </a>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          PathForward Tools is a Passante brand.
        </p>
        <a
          href="https://passante.io"
          className="text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ color: 'var(--color-accent)' }}
        >
          passante.io →
        </a>
      </div>
    </section>
  )
}
