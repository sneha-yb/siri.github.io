import { AnimatePresence, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { placeholders, site, type MainTab } from "./content";
import resumePdfUrl from "./Sneha Reddy Palreddy_AI ML Engineer.pdf";
import { AboutHeroDecor } from "./components/AboutHeroDecor";
import { ContactSection } from "./components/ContactSection";
import { MobileDock } from "./components/MobileDock";
import { OrbField } from "./components/OrbField";
import { Reveal } from "./components/Reveal";
import { SiteNav } from "./components/SiteNav";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

function TiltCard({
  title,
  blurb,
  index,
}: {
  title: string;
  blurb: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useSpring(0, { stiffness: 260, damping: 28 });
  const my = useSpring(0, { stiffness: 260, damping: 28 });
  const rotateX = useTransform(my, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-8, 8]);
  const shadow = useTransform(
    [mx, my],
    ([x, y]) => `${(x as number) * 18}px ${(y as number) * 22}px 50px rgba(0,0,0,0.35)`
  );

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) / r.width);
    my.set((e.clientY - (r.top + r.height / 2)) / r.height);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        boxShadow: shadow,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-2xl border border-ink-700/70 bg-ink-900/40 p-6 ring-1 ring-white/[0.03] transition-colors hover:border-ink-600"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at 50% 40%, rgba(196,165,116,0.12), transparent 50%)",
        }}
      />
      <span className="font-mono text-xs text-accent/80">0{index + 1}</span>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink-50">
        {title}
      </h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-ink-400">
        {blurb}
      </p>
    </motion.div>
  );
}

export default function App() {
  const [tab, setTab] = useState<MainTab>("about");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);

  function goLogo() {
    setTab("about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const showWipBanner = tab === "academic" || tab === "fun";

  return (
    <>
      <OrbField />
      <SiteNav
        activeTab={tab}
        onTabChange={setTab}
        onLogoClick={goLogo}
        onSayHi={scrollToContact}
      />
      <MobileDock activeTab={tab} onTabChange={setTab} />

      <AnimatePresence>
        {showWipBanner && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 right-0 top-[4.5rem] z-40 border-b border-accent/25 bg-ink-950/95 px-4 py-2.5 text-center shadow-sm shadow-black/20 backdrop-blur-md sm:top-[4.75rem] md:top-20 sm:py-3"
          >
            <p className="mx-auto max-w-2xl font-sans text-xs leading-snug text-ink-300 sm:text-sm">
              <span className="font-semibold text-accent">Under design</span>
              <span className="text-ink-500"> · </span>
              This section of the site is still being designed — thanks for your patience.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {tab === "about" && (
          <>
            <section className="relative flex min-h-[100dvh] flex-col justify-end px-4 pb-24 pt-32 sm:px-6 md:pb-32">
              <AboutHeroDecor />
              <div className="relative z-10 mx-auto w-full max-w-6xl">
                <motion.p
                  className="font-mono text-xs uppercase tracking-[0.35em] text-accent"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  Hello
                </motion.p>
                <motion.h1
                  className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-50 sm:text-6xl md:text-7xl"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.25 }}
                >
                  I&apos;m{" "}
                  <span className="bg-gradient-to-r from-ink-100 via-accent to-ink-200 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                    {site.name}
                  </span>
                  .
                </motion.h1>
                <motion.p
                  className="mt-6 max-w-xl font-sans text-lg text-ink-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                >
                  {site.tagline}
                </motion.p>
                <motion.div
                  className="mt-10 flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <button
                    type="button"
                    onClick={() => setTab("academic")}
                    className="rounded-full bg-ink-100 px-6 py-3 font-sans text-sm font-semibold text-ink-950 transition hover:bg-white"
                  >
                    Academic
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab("fun")}
                    className="rounded-full border border-ink-600 px-6 py-3 font-sans text-sm font-medium text-ink-200 transition hover:border-accent/50 hover:text-accent"
                  >
                    Fun
                  </button>
                </motion.div>
              </div>
              <motion.div
                className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <div className="h-10 w-6 rounded-full border-2 border-ink-600">
                  <div className="mx-auto mt-2 h-1.5 w-1 rounded-full bg-accent" />
                </div>
              </motion.div>
            </section>

            <section className="px-4 py-24 sm:px-6 md:py-32">
              <div className="mx-auto max-w-6xl">
                <Reveal className="text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
                    About
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-ink-50 md:text-4xl">
                    A little about myself
                  </h2>
                </Reveal>
                <div className="mt-10 flex flex-col items-center gap-10 md:mt-12 md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-16 xl:gap-20">
                  <Reveal className="shrink-0" delay={0.06}>
                    <div className="relative flex justify-center">
                      <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-ink-700 bg-ink-900 shadow-lg shadow-black/30 ring-2 ring-accent/25 sm:h-52 sm:w-52 md:h-56 md:w-56">
                        <img
                          src={site.aboutPhotoSrc}
                          alt={`${site.name} — profile`}
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </Reveal>
                  <Reveal
                    className="w-full max-w-xl min-w-0 md:max-w-2xl md:flex-1"
                    delay={0.1}
                  >
                    <p className="text-center font-sans text-lg leading-relaxed text-ink-300 md:text-left md:leading-[1.75]">
                      {placeholders.about}
                    </p>
                  </Reveal>
                </div>
              </div>
            </section>

            <ContactSection />
          </>
        )}

        {tab === "academic" && (
          <>
            <section className="px-4 pb-12 pt-44 sm:px-6 md:pt-48">
              <div className="mx-auto max-w-6xl">
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
                    Academic
                  </p>
                  <h1 className="mt-3 font-display text-4xl font-semibold text-ink-50 md:text-5xl">
                    Projects, teaching &amp; CV
                  </h1>
                  <p className="mt-4 max-w-2xl font-sans text-ink-400">
                    My technical side.
                  </p>
                </Reveal>
              </div>
            </section>

            <section
              id="projects"
              className="border-y border-ink-800/80 bg-ink-900/20 px-4 py-24 sm:px-6 md:py-32"
            >
              <div className="mx-auto max-w-6xl">
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
                    Projects
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-ink-50 md:text-4xl">
                    Things I&apos;ve built
                  </h2>
                  <p className="mt-4 max-w-2xl font-sans text-ink-400">
                    {placeholders.projectsIntro}
                  </p>
                </Reveal>
                <div className="mt-14 grid gap-6 md:grid-cols-3">
                  {placeholders.projectCards.map((card, i) => (
                    <Reveal key={card.title} delay={0.06 * (i + 1)}>
                      <TiltCard
                        title={card.title}
                        blurb={card.blurb}
                        index={i}
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            <section className="border-t border-ink-800/80 bg-ink-900/15 px-4 py-24 sm:px-6 md:py-32">
              <div className="mx-auto max-w-6xl">
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
                    Teaching
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-ink-50 md:text-4xl">
                    Classroom energy
                  </h2>
                </Reveal>
                <div className="mt-12 grid gap-4 md:grid-cols-2">
                  {placeholders.teaching.map((t, i) => (
                    <Reveal key={t.role} delay={0.08 * i}>
                      <div className="rounded-2xl border border-ink-700/60 bg-ink-950/40 p-6">
                        <p className="font-mono text-xs text-accent">{t.term}</p>
                        <h3 className="mt-2 font-display text-xl text-ink-50">
                          {t.role}
                        </h3>
                        <p className="mt-2 font-sans text-sm text-ink-400">
                          {t.note}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            <section className="border-t border-ink-800/80 px-4 py-24 sm:px-6 md:py-32">
              <div className="mx-auto max-w-5xl">
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
                    Resume
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-ink-50 md:text-4xl">
                    CV at a glance
                  </h2>
                  <p className="mt-4 max-w-2xl font-sans text-sm text-ink-400">
                    View inline below or open in a new tab if your browser prefers its own PDF viewer.
                  </p>
                </Reveal>
                <Reveal className="mt-10" delay={0.06}>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={resumePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-ink-600 px-5 py-2.5 font-sans text-sm font-medium text-ink-200 transition hover:border-accent/50 hover:text-accent"
                    >
                      Open in new tab
                    </a>
                    <a
                      href={resumePdfUrl}
                      download="Sneha_Reddy_Palreddy_Resume.pdf"
                      className="inline-flex rounded-full bg-accent/15 px-5 py-2.5 font-sans text-sm font-medium text-accent ring-1 ring-accent/30 transition hover:bg-accent/25"
                    >
                      Download PDF
                    </a>
                  </div>
                </Reveal>
                <Reveal className="mt-8" delay={0.1}>
                  <div className="overflow-hidden rounded-2xl border border-ink-700/80 bg-ink-900/30 shadow-xl shadow-black/20 ring-1 ring-white/[0.04]">
                    <iframe
                      title="Sneha Reddy Palreddy — resume PDF"
                      src={resumePdfUrl}
                      className="h-[min(85vh,1100px)] w-full bg-ink-900"
                    />
                  </div>
                </Reveal>
              </div>
            </section>

            <ContactSection />
          </>
        )}

        {tab === "fun" && (
          <>
            <section className="px-4 pb-12 pt-44 sm:px-6 md:pt-48">
              <div className="mx-auto max-w-6xl">
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
                    Fun
                  </p>
                  <h1 className="mt-3 font-display text-4xl font-semibold text-ink-50 md:text-5xl">
                    Off the clock
                  </h1>
                  <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink-300">
                    {placeholders.fun.intro}
                  </p>
                </Reveal>
              </div>
            </section>

            <section className="border-t border-ink-800/80 bg-ink-900/15 px-4 py-24 sm:px-6 md:py-32">
              <div className="mx-auto max-w-6xl">
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold text-ink-50 md:text-3xl">
                    Extra bits
                  </h2>
                </Reveal>
                <ul className="mt-10 space-y-6">
                  {placeholders.fun.extras.map((item, i) => (
                    <Reveal key={item.title} delay={0.06 * i}>
                      <li className="rounded-2xl border border-ink-700/60 bg-ink-950/30 p-6">
                        <h3 className="font-display text-xl text-ink-100">
                          {item.title}
                        </h3>
                        <p className="mt-2 font-sans text-sm text-ink-400">
                          {item.detail}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </section>

            <ContactSection />
          </>
        )}

        <footer className="border-t border-ink-800/60 px-4 py-8 text-center font-sans text-xs text-ink-600 sm:px-6">
          © {new Date().getFullYear()} {site.name} · Built with curiosity
        </footer>
      </main>
    </>
  );
}
