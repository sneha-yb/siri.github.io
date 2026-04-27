import { IconGitHub, IconLinkedIn } from "./SocialIcons";
import { Reveal } from "./Reveal";
import { site } from "../content";

type Props = {
  theme?: "linen" | "dark";
};

export function ContactSection({ theme = "linen" }: Props) {
  const isDark = theme === "dark";
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 py-24 sm:px-6 md:py-36"
      style={{ background: isDark ? undefined : "#f8f4f0" }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <p
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: isDark ? undefined : "#a89070" }}
          >
            Contact
          </p>
          <h2
            className={`mt-3 font-display text-3xl font-semibold md:text-4xl ${isDark ? "text-ink-50" : ""}`}
            style={isDark ? undefined : { color: "#281408" }}
          >
            Let&apos;s connect
          </h2>
        </Reveal>
        <Reveal className="mt-10" delay={0.1}>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex rounded-full px-8 py-3 font-sans text-sm font-semibold transition"
            style={
              isDark
                ? undefined
                : { background: "#281810", color: "#f8f4f0" }
            }
          >
            {site.email}
          </a>
        </Reveal>
        <Reveal className="mt-8 flex flex-wrap justify-center gap-4" delay={0.15}>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm transition"
            style={
              isDark
                ? undefined
                : {
                    borderColor: "#c0a888",
                    color: "#5a3820",
                    background: "transparent",
                  }
            }
          >
            <IconGitHub className="h-5 w-5 shrink-0" />
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm transition"
            style={
              isDark
                ? undefined
                : {
                    borderColor: "#c0a888",
                    color: "#5a3820",
                    background: "transparent",
                  }
            }
          >
            <IconLinkedIn className="h-5 w-5 shrink-0" />
            LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
