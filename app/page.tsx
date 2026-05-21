import site from "../content/site.json";

export default function HomePage() {
  return (
    <main>
      <header className="border-b border-black/10 px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            {site.brand.name}
          </span>
          <a
            href={site.hero.ctaHref}
            className="rounded-full px-4 py-2 text-sm font-medium"
            style={{
              background: "var(--site-primary)",
              color: "var(--site-bg)",
            }}
          >
            {site.hero.ctaLabel}
          </a>
        </div>
      </header>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p
            className="text-sm uppercase tracking-[0.2em]"
            style={{ color: "var(--site-accent)" }}
          >
            {site.brand.tagline}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg opacity-80">
            {site.hero.subhead}
          </p>
          <a
            href={site.hero.ctaHref}
            className="mt-10 inline-flex rounded-full px-6 py-3 text-base font-medium"
            style={{
              background: "var(--site-primary)",
              color: "var(--site-bg)",
            }}
          >
            {site.hero.ctaLabel}
          </a>
        </div>
      </section>

      {site.sections.map((section, idx) => (
        <section
          key={idx}
          className="border-t border-black/5 px-6 py-20"
          style={{
            background: idx % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)",
          }}
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              {section.title}
            </h2>
            {section.body ? (
              <p className="mt-4 max-w-2xl opacity-80">{section.body}</p>
            ) : null}
            {section.items && section.items.length > 0 ? (
              <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="rounded-2xl border border-black/10 p-6"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.body ? (
                      <p className="mt-2 opacity-80">{item.body}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}

      <footer
        className="border-t border-black/10 px-6 py-12 text-sm"
        style={{ background: "rgba(0,0,0,0.03)" }}
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">{site.brand.name}</p>
            <p className="opacity-70">{site.footer.blurb}</p>
          </div>
          <div className="space-y-1 opacity-80">
            {site.contact.phone ? <p>{site.contact.phone}</p> : null}
            {site.contact.email ? <p>{site.contact.email}</p> : null}
            {site.contact.address ? <p>{site.contact.address}</p> : null}
            {site.contact.hours ? <p>{site.contact.hours}</p> : null}
          </div>
        </div>
      </footer>
    </main>
  );
}
