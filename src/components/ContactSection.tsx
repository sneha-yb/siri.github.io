import { IconGitHub, IconLinkedIn } from "./SocialIcons";
import { Reveal } from "./Reveal";
import { site } from "../content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 py-24 sm:px-6 md:py-36"
    >
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-50 md:text-4xl">
            Let&apos;s connect
          </h2>
        </Reveal>
        <Reveal className="mt-10" delay={0.1}>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex rounded-full bg-accent px-8 py-3 font-sans text-sm font-semibold text-ink-950 transition hover:brightness-110"
          >
            {site.email}
          </a>
        </Reveal>
        <Reveal className="mt-8 flex flex-wrap justify-center gap-4" delay={0.15}>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-700/80 px-4 py-2 font-sans text-sm text-ink-300 transition hover:border-accent/40 hover:text-accent"
          >
            <IconGitHub className="h-5 w-5 shrink-0" />
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-700/80 px-4 py-2 font-sans text-sm text-ink-300 transition hover:border-accent/40 hover:text-accent"
          >
            <IconLinkedIn className="h-5 w-5 shrink-0" />
            LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
