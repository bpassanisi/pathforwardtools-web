export function Mission() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: 'var(--color-bg-mission)' }}
    >
      <div className="mx-auto max-w-[580px]">
        <blockquote
          className="border-l-4 pl-6 text-base leading-8 md:text-lg md:leading-9"
          style={{
            borderColor: 'var(--color-accent)',
            color: 'var(--color-text-dark)',
          }}
        >
          <p>Some people are rebuilding.</p>
          <p className="mt-2">Some are rethinking.</p>
          <p className="mt-2">Some are simply ready for what comes next.</p>
          <p className="mt-6" style={{ color: 'var(--color-text-dark-muted)' }}>
            PathForward Tools exists for all of them.
          </p>
        </blockquote>
      </div>
    </section>
  )
}
