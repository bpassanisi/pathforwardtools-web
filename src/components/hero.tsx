import Image from 'next/image'

export function Hero() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
    >
      <div className="flex flex-col items-center gap-8">
        <Image
          src="/brand/pf-tools-lockup-dark.svg"
          alt="PathForward Tools"
          width={195}
          height={44}
          priority
          className="h-auto w-48 md:w-56"
        />

        <div>
          <h1
            className="text-4xl font-bold md:text-6xl"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Done standing still.
          </h1>
          <p
            className="mt-4 max-w-lg text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--color-text-muted)' }}
          >
            PathForward Tools builds apps for people navigating what comes next.
          </p>
        </div>

        <a
          href="#apps"
          className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          Explore the apps
        </a>
      </div>
    </section>
  )
}
