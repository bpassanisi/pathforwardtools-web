type App = {
  name: string
  domain: string | null
  description: string
  status: 'live' | 'coming-soon'
}

const APPS: App[] = [
  {
    name: 'PathForward Mind',
    domain: 'pathforwardmind.com',
    description: 'Mental clarity and tools for your inner work.',
    status: 'coming-soon',
  },
  {
    name: 'PathForward Clear',
    domain: 'pathforwardclear.com',
    description:
      'Navigate life after a criminal record. Expungement, rights restoration, housing, and employment — all in one place.',
    status: 'coming-soon',
  },
  {
    name: 'PathForward for Men',
    domain: 'pathforwardformen.com',
    description: 'Personal development tools built for the modern man.',
    status: 'coming-soon',
  },
  {
    name: 'PathForward Quantum',
    domain: null,
    description: 'Built for solopreneurs and independent builders.',
    status: 'coming-soon',
  },
  {
    name: 'PathForward Intelligence',
    domain: null,
    description: 'AI-powered career and business intelligence for independent professionals.',
    status: 'coming-soon',
  },
]

function AppCard({ app }: { app: App }) {
  return (
    <article
      className="relative flex flex-col rounded-2xl p-6 md:p-8"
      style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Coming Soon badge */}
      <span
        className="absolute right-4 top-4 rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        Coming Soon
      </span>

      <h3 className="pr-24 text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>
        {app.name}
      </h3>

      {/* Accent rule */}
      <div className="my-3 h-px w-12" style={{ backgroundColor: 'var(--color-accent)' }} />

      {/* Screenshot placeholder — replace with real UI screenshot when available */}
      <div
        className="mb-5 h-36 rounded-xl"
        style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
        aria-hidden="true"
      />

      <p className="mb-4 flex-1 text-sm leading-6" style={{ color: 'var(--color-text-muted)' }}>
        {app.description}
      </p>

      <div className="mt-auto">
        <a
          href="https://x.com/passante"
          className="text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ color: 'var(--color-accent)' }}
        >
          Follow @passante →
        </a>
        {app.domain && (
          <p className="mt-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            {app.domain}
          </p>
        )}
      </div>
    </article>
  )
}

export function AppCards() {
  return (
    <section
      id="apps"
      className="px-6 py-24 md:px-12 lg:px-20"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2">
          {APPS.map(app => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  )
}
