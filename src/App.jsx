import { profile, work, projects, stack, education } from './data.js'

const base = import.meta.env.BASE_URL

function Section({ label, children }) {
  return (
    <section className="grid gap-4 border-t border-rule py-10 md:grid-cols-[9rem_1fr] md:gap-8">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted md:pt-1">{label}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}

function ExtLink({ href, children }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      className="underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
    >
      {children}
      {external && <span aria-hidden="true"> ↗</span>}
    </a>
  )
}

function Stack({ items }) {
  return <p className="mt-3 font-mono text-xs text-muted">{items.join(' · ')}</p>
}

export default function App() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-8">
      <header className="flex justify-between py-4 font-mono text-xs text-muted">
        <span>{profile.handle}(1)</span>
        <span className="hidden sm:inline">Portfolio</span>
        <span>{profile.handle}(1)</span>
      </header>

      <div className="pb-14 pt-12 sm:pt-20">
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">{profile.intro}</p>

        <dl className="mt-10 grid gap-1.5 font-mono text-sm">
          {profile.status.map(([k, v], i) => (
            <div key={k} className="grid grid-cols-[4.5rem_1fr] gap-3">
              <dt className="text-muted">{k}</dt>
              <dd className="flex items-baseline gap-2">
                {i === 0 && <span className="inline-block size-2 shrink-0 bg-accent" aria-hidden="true" />}
                {v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <ExtLink href={`mailto:${profile.email}`}>{profile.email}</ExtLink>
          <ExtLink href={`${base}${profile.resume}`}>Resume (PDF)</ExtLink>
          {profile.links.map((l) => (
            <ExtLink key={l.label} href={l.href}>{l.label}</ExtLink>
          ))}
        </div>
      </div>

      <Section label="Work">
        <ol className="space-y-10">
          {work.map((w) => (
            <li key={w.role}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">{w.role}</h3>
                <span className="font-mono text-xs text-muted">{w.when}</span>
              </div>
              <p className="text-muted">{w.org}</p>
              <ul className="mt-3 space-y-1.5 leading-relaxed">
                {w.points.map((p) => (
                  <li key={p} className="grid grid-cols-[1rem_1fr]">
                    <span className="text-muted">–</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Stack items={w.stack} />
              {w.link && (
                <p className="mt-2 text-sm">
                  <ExtLink href={w.link.href}>{w.link.label}</ExtLink>
                </p>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Projects">
        <ol>
          {projects.map((p) => (
            <li key={p.name} className="border-b border-rule py-6 first:pt-0 last:border-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  {p.name}
                  {p.placement && (
                    <span className="ml-3 font-mono text-xs font-normal text-accent">{p.placement}</span>
                  )}
                </h3>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>
              <p className="text-sm text-muted">
                {p.event} · {p.role}
              </p>
              <p className="mt-2 leading-relaxed">{p.summary}</p>
              <Stack items={p.stack} />
              {p.links && (
                <p className="mt-2 flex gap-4 text-sm">
                  {p.links.map((l) => (
                    <ExtLink key={l.label} href={l.href}>{l.label}</ExtLink>
                  ))}
                </p>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Stack">
        <dl className="grid gap-3">
          {stack.map(([k, v]) => (
            <div key={k} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Education">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="font-semibold">{education.degree}</h3>
          <span className="font-mono text-xs text-muted">{education.when}</span>
        </div>
        <p className="text-muted">{education.school}</p>
        <ul className="mt-6 space-y-1.5 text-sm">
          {education.training.map(([year, what]) => (
            <li key={what} className="grid grid-cols-[3.5rem_1fr]">
              <span className="font-mono text-xs text-muted">{year}</span>
              <span>{what}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Contact">
        <p className="max-w-xl leading-relaxed">
          Hiring for an entry-level role in cloud, DevOps, IT support or development? Email works best.
        </p>
        <p className="mt-4 text-2xl font-semibold tracking-tight break-all sm:text-3xl">
          <ExtLink href={`mailto:${profile.email}`}>{profile.email}</ExtLink>
        </p>
        <p className="mt-3 font-mono text-sm text-muted">{profile.phone}</p>
      </Section>

      <footer className="flex flex-wrap justify-between gap-2 border-t border-rule py-6 font-mono text-xs text-muted">
        <span>
          React + Tailwind · built and deployed by GitHub Actions ·{' '}
          <ExtLink href="https://github.com/Yohanpau/Portfolio">source</ExtLink>
        </span>
        <span>last deploy {__BUILD_DATE__}</span>
      </footer>
    </div>
  )
}
