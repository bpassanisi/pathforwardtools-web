type AppStatus = 'live' | 'beta-soon' | 'in-build' | 'research'

type App = {
  name: string
  url: string | null
  description: string
  status: AppStatus
  screenshot?: string
}

const APPS: App[] = [
  {
    name: 'PathForward Intelligence',
    url: 'https://activate.sagetools.dev',
    description: 'AI-powered career and business intelligence for independent professionals.',
    status: 'live',
    screenshot: '/screenshots/intelligence.png',
  },
  {
    name: 'PathForward Quantum',
    url: null,
    description: 'Built for solopreneurs and independent builders.',
    status: 'beta-soon',
  },
  {
    name: 'PathForward for Men',
    url: null,
    description: 'Personal development tools built for the modern man.',
    status: 'beta-soon',
  },
  {
    name: 'PathForward Mind',
    url: null,
    description: 'Mental clarity and tools for your inner work.',
    status: 'beta-soon',
  },
  {
    name: 'PathForward Clear',
    url: null,
    description:
      'Navigate life after a criminal record. Expungement, rights restoration, housing, and employment — all in one place.',
    status: 'in-build',
  },
  {
    name: 'PathForward Family',
    url: null,
    description: "Preserve your family's stories, values, and legacy for generations to come.",
    status: 'research',
  },
]

const STATUS_CONFIG: Record<
  AppStatus,
  { label: string; color: string; bg: string }
> = {
  live: { label: 'Live', color: '#fff', bg: '#16A34A' },
  'beta-soon': { label: 'Beta Soon', color: '#0F1520', bg: '#D4A55A' },
  'in-build': { label: 'In Build', color: '#fff', bg: '#2563EB' },
  research: { label: 'Research', color: 'rgba(232,237,245,0.7)', bg: 'rgba(255,255,255,0.12)' },
}

function AppCard({ app }: { app: App }) {
  const s = STATUS_CONFIG[app.status]

  return (
    <article
      className="relative flex flex-col rounded-2xl p-6 md:p-8"
      style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {app.screenshot && (
        <img
          src={app.screenshot}
          alt={`${app.name} screenshot`}
          className="mb-4 w-full rounded-xl object-cover"
          style={{ height: 140 }}
        />
      )}
      <span
        className="absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider"
        style={{ backgroundColor: s.bg, color: s.color }}
      >
        {s.label}
      </span>

      <h3 className="pr-24 text-base font-semibold" style={{ color: 'var(--color-text-on-dark)' }}>
        {app.name}
      </h3>

      <div className="my-3 h-px w-12" style={{ backgroundColor: 'var(--color-accent)' }} />

      <p className="mb-5 flex-1 text-sm leading-6" style={{ color: 'var(--color-text-muted-on-dark)' }}>
        {app.description}
      </p>

      <div className="mt-auto">
        {app.status === 'live' && app.url ? (
          <a
            href={app.url}
            className="text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: 'var(--color-accent)' }}
          >
            Open app →
          </a>
        ) : app.status !== 'research' ? (
          <a
            href="https://x.com/passante"
            className="text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: 'var(--color-accent)' }}
          >
            Follow for updates →
          </a>
        ) : null}
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APPS.map(app => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  )
}
