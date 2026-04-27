import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { placeholders, resumeUrl, site, type MainTab } from "./content";
import { ContactSection } from "./components/ContactSection";
import { WaveBackground } from "./components/WaveBackground";
import { MobileDock } from "./components/MobileDock";
import { Reveal } from "./components/Reveal";
import { SiteNav } from "./components/SiteNav";
import policyDistillationBarsImg from "./assets/academic/policy-distillation-bars.png";
import eigenAttentionPerplexityImg from "./assets/academic/eigen-attention-perplexity.png";
import mmwaveWatermelonImg from "./assets/academic/mmwave-watermelon.png";
import youngResearchFellowCircuitImg from "./assets/academic/young-research-fellow-circuit.png";
import avishkarHyperloopGroupImg from "./assets/academic/avishkar-hyperloop-group.png";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
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

  const showWipBanner = false;

  return (
    <>
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
          <div style={{ background: "#f8f4f0" }}>
            <section className="relative h-[100dvh] overflow-hidden px-4 pt-24 sm:px-6">
              {/* Wave background */}
              <WaveBackground />

              {/* Soft animated blobs */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div
                  className="blob-float-slow absolute right-[-80px] top-[-60px] h-[320px] w-[320px] rounded-full blur-[65px]"
                  style={{ background: "#e0c8a8", opacity: 0.5 }}
                />
                <div
                  className="blob-float-fast absolute left-[-60px] top-[40px] h-[200px] w-[200px] rounded-full blur-[60px]"
                  style={{ background: "#d4b088", opacity: 0.35 }}
                />
                <div
                  className="blob-float absolute bottom-[-60px] right-[-40px] h-[180px] w-[180px] rounded-full blur-[55px]"
                  style={{ background: "#e8d4b8", opacity: 0.3 }}
                />
              </div>

              <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-end pb-8">
                <motion.p
                  className="font-mono text-[12px] uppercase tracking-[0.2em]"
                  style={{ color: "#a89070" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  HELLO
                </motion.p>
                <motion.h1
                  className="mt-4 font-display text-[56px] font-normal leading-[1.0] sm:text-[68px]"
                  style={{ color: "#281408" }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  I&apos;m{" "}
                  <span className="italic" style={{ color: "#985840" }}>
                    {site.name}.
                  </span>
                </motion.h1>
                <motion.p
                  className="mt-5 max-w-xl text-[16px] font-light leading-relaxed"
                  style={{ color: "#7a5838" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Electrical engineer who got pulled into AI and never looked back. Currently building things at Purdue, one rabbit hole at a time.
                </motion.p>

                <motion.div
                  className="mt-8 flex flex-wrap items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.28 }}
                >
                  <button
                    type="button"
                    onClick={() => setTab("academic")}
                    className="rounded-full px-6 py-3 font-mono text-[13px] tracking-[0.12em] transition"
                    style={{ background: "#281810", color: "#f8f4f0" }}
                  >
                    my work
                  </button>
                </motion.div>

                <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "#c8b498" }}>
                  <span className="h-px w-6" style={{ background: "#c8b498" }} />
                  <span>scroll</span>
                </div>

                {/* Info strip — directly below scroll hint */}
                <div
                  className="mt-10 border-t pt-6"
                  style={{ borderColor: "#ddd0c4" }}
                >
                  <div className="grid gap-4 md:grid-cols-4">
                    {[
                      { k: "currently", v: "MS @ Purdue · AI + ML" },
                      { k: "previously", v: "IIT Madras · AMD · TI" },
                      { k: "building", v: "things that actually work" },
                      { k: "also", v: "dancer · kdrama fan · nerd" },
                    ].map((x) => (
                      <div key={x.k}>
                        <div className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: "#a89080" }}>
                          {x.k}
                        </div>
                        <div className="mt-1 text-[13px]" style={{ color: "#381808" }}>
                          {x.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </section>

            <section className="px-4 py-32 sm:px-6 md:py-48">
              <div className="mx-auto max-w-6xl">
                <Reveal className="text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "#a89070" }}>
                    About
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl" style={{ color: "#281408" }}>
                    A little about myself
                  </h2>
                </Reveal>
                <div className="mt-10 flex flex-col items-center gap-10 md:mt-12 md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-16 xl:gap-20">
                  <Reveal className="shrink-0" delay={0.06}>
                    <div className="relative flex justify-center">
                      <div className="h-44 w-44 overflow-hidden rounded-full border-4 sm:h-52 sm:w-52 md:h-56 md:w-56" style={{ borderColor: "#c0a888", background: "#ede4d8", boxShadow: "0 4px 24px rgba(192,104,56,0.10)" }}>
                        <img
                          src={site.aboutPhotoSrc}
                          alt={`${site.name} — profile`}
                          className="h-full w-full object-cover object-center"
                          style={{
                            objectPosition: "55% 35%",
                            transform: "scale(1.8)",
                            transformOrigin: "center",
                          }}
                          loading="eager"
                          decoding="sync"
                          fetchPriority="high"
                        />
                      </div>
                    </div>
                  </Reveal>
                  <Reveal
                    className="w-full max-w-xl min-w-0 md:max-w-2xl md:flex-1"
                    delay={0.1}
                  >
                    <p className="text-center font-sans text-lg leading-relaxed md:text-left md:leading-[1.75]" style={{ color: "#7a5838" }}>
                      {placeholders.about}
                    </p>
                  </Reveal>
                </div>
              </div>
            </section>

            <ContactSection theme="linen" />
          </div>
        )}

        {tab === "academic" && (
          <>
            <div className="academic-page">
              <section className="px-4 pb-10 pt-36 sm:px-6 md:pt-40" style={{ background: "#f8f4f0" }}>
                <div className="mx-auto max-w-6xl">
                  <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="min-w-0">
                      <p className="academic-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[#8aabcc]">
                        Academic
                      </p>
                      <h1 className="academic-serif mt-3 text-[38px] font-normal leading-[1.05] text-[#1a2030] md:text-[44px]">
                        projects, teaching &amp;{" "}
                        <span className="italic text-[#5b8fc2]">cv.</span>
                      </h1>
                      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6a7a8a]">
                        A soft snapshot of where I&apos;ve worked, what I&apos;ve built,
                        and the systems I like to think about.
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center">
                      <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="academic-mono inline-flex items-center gap-2 rounded-full border border-[#dde8f4] bg-white px-4 py-2 text-[11px] font-medium tracking-[0.12em] text-[#5b8fc2] shadow-[0_1px_6px_rgba(91,143,194,0.06)] transition hover:shadow-[0_8px_28px_rgba(91,143,194,0.14)]"
                      >
                        Resume
                        <span aria-hidden className="text-[#9ab0c8]">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <div className="academic-divider mx-auto max-w-6xl px-4 sm:px-6" />

              {/* EXPERIENCE */}
              <section className="px-4 py-14 sm:px-6 md:py-16">
                <div className="mx-auto max-w-6xl">
                  <div
                    className="mb-10 h-[3px] w-14 rounded-[2px]"
                    style={{
                      background: "linear-gradient(to right, #c0a888, #7aaad8)",
                    }}
                  />
                  <p className="academic-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[#8aabcc]">
                    EXPERIENCE
                  </p>
                  <h2 className="academic-serif mt-3 text-[22px] font-normal text-[#1a2030]">
                    where i&apos;ve <em style={{ color: "#7aaad8" }}>worked.</em>
                  </h2>

                  <div className="mt-10 grid gap-8 md:grid-cols-[28px_1fr]">
                    <div
                      className="relative mx-auto hidden w-[2px] md:block"
                      style={{
                        background:
                          "linear-gradient(to bottom, #7aaad8, #a8c8e8, #d0e4f4)",
                      }}
                    />

                    <div className="space-y-6">
                      {[
                        {
                          company: "AMD",
                          role: "AI INTERN · CAD & EDA AUTOMATION",
                          date: "sep 2025 – dec 2025",
                          dot: { bg: "#7aaad8", ring: "#a8c8e8" },
                          meta: { color: "#5b8fc2" },
                          bullets: [
                            <>
                              <span className="font-medium text-[#3a5070]">
                                RAG pipeline
                              </span>{" "}
                              over <span className="font-medium text-[#3a5070]">2,100 pages</span> of chipmaker docs — engineers
                              stopped doing manual lookups
                            </>,
                            <>
                              <span className="font-medium text-[#3a5070]">
                                A* + RL autorouter
                              </span>{" "}
                              on live silicon — <span className="font-medium text-[#3a5070]">92/118</span> nets routed on a real AMD package
                            </>,
                          ],
                        },
                        {
                          company: "Shatayuh Jeevanam Healthcare",
                          role: "ML INTERN · HEALTHCARE AI",
                          date: "feb – may 2024",
                          dot: { bg: "#a8c8e8", ring: "#d0e4f4" },
                          meta: { color: "#6a9ac4" },
                          bullets: [
                            <>
                              LLMs for Alexa review sentiment —{" "}
                              <span className="font-medium text-[#3a5070]">92%</span>{" "}
                              accuracy for Ayurvedic health tracking
                            </>,
                          ],
                        },
                        {
                          company: "Texas Instruments",
                          role: "DIGITAL DESIGN INTERN",
                          date: "may – jul 2023",
                          dot: { bg: "#d0e4f4", ring: "#e7f2fb" },
                          meta: { color: "#7aaac4" },
                          bullets: [
                            <>
                              Formal verification for Ethernet PHY — bugs caught before tape-out
                            </>,
                            <>
                              <span className="font-medium text-[#3a5070]">26</span> register types auto-tested via generated CSV
                            </>,
                          ],
                        },
                      ].map((item, idx) => (
                        <div key={item.company} className="grid gap-3 md:grid-cols-[28px_1fr] md:gap-8">
                          <div className="relative hidden md:block">
                            <div
                              className="absolute left-1/2 top-4 h-2 w-2 -translate-x-1/2 rounded-full"
                              style={{
                                background: item.dot.bg,
                                boxShadow: `0 0 0 3px ${item.dot.ring}`,
                                opacity: idx === 0 ? 1 : idx === 1 ? 0.9 : 0.75,
                              }}
                            />
                          </div>
                          <div className="academic-card p-5">
                            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                              <div className="min-w-0">
                                <h3 className="text-[15px] font-medium text-[#1a2030]">
                                  {item.company}
                                </h3>
                                <p
                                  className="academic-mono mt-1 text-[11px] font-medium tracking-[0.12em]"
                                  style={{ color: item.meta.color }}
                                >
                                  {item.role}
                                </p>
                              </div>
                              <p className="academic-mono text-[11px] tracking-[0.12em] text-[#9ab0c8]">
                                {item.date}
                              </p>
                            </div>
                            <div className="mt-4 space-y-2 text-[14px] leading-relaxed text-[#6a7a8a]">
                              {item.bullets.map((b, i) => (
                                <div key={i} className="flex gap-2">
                                  <span style={{ color: item.dot.bg }}>·</span>
                                  <span>{b}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <div className="academic-divider mx-auto max-w-6xl px-4 sm:px-6" />

              {/* PROJECTS */}
              <section className="px-4 py-14 sm:px-6 md:py-16">
                <div className="mx-auto max-w-6xl">
                  <div
                    className="mb-10 h-[3px] w-14 rounded-[2px]"
                    style={{
                      background:
                        "linear-gradient(to right, #4aa88a, rgba(74,168,138,0))",
                    }}
                  />
                  <p className="academic-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[#8aabcc]">
                    PROJECTS
                  </p>
                  <h2 className="academic-serif mt-3 text-[22px] font-normal text-[#1a2030]">
                    things i&apos;ve <em style={{ color: "#4aa88a" }}>built.</em>
                  </h2>

                  <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {[
                      {
                        n: "01",
                        title: "Policy Distillation for RL Agents",
                        desc: "Compressed DQN teachers into compact CNN students using KL distillation. Pong student matched teacher at 11.5 vs 9.6. Breakout large student hit 136 vs teacher's 145 — at 4× fewer parameters.",
                        headerBg: "#eef4fb",
                        tags: [
                          { t: "RL", c: "#5b8fc2", bg: "rgba(91,143,194,0.10)" },
                          { t: "KL distillation", c: "#5b8fc2", bg: "rgba(91,143,194,0.10)" },
                          { t: "PyTorch", c: "#3f6f9d", bg: "rgba(91,143,194,0.06)" },
                          { t: "Atari", c: "#3f6f9d", bg: "rgba(91,143,194,0.06)" },
                          { t: "Purdue ECE", c: "#3f6f9d", bg: "rgba(91,143,194,0.06)" },
                        ],
                        svg: (
                          <img
                            src={policyDistillationBarsImg}
                            alt="Policy distillation results bar charts (Pong and Breakout)"
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        ),
                      },
                      {
                        n: "02",
                        title: "Eigen Attention — KV Compression",
                        desc: "SVD-based KV cache compression across LLaMA-3 8B, MPT-7B, OPT. Plus a hardware-optimized softmax in Verilog synthesized on Skywater 130nm — 1.16mW total power. Two bottlenecks, one project.",
                        headerBg: "#edf6f2",
                        tags: [
                          { t: "LLM", c: "#4aa88a", bg: "rgba(74,168,138,0.10)" },
                          { t: "CUDA", c: "#4aa88a", bg: "rgba(74,168,138,0.10)" },
                          { t: "Verilog", c: "#2d6b5a", bg: "rgba(74,168,138,0.06)" },
                          { t: "Hardware", c: "#2d6b5a", bg: "rgba(74,168,138,0.06)" },
                          { t: "ASIC", c: "#2d6b5a", bg: "rgba(74,168,138,0.06)" },
                        ],
                        svg: (
                          <img
                            src={eigenAttentionPerplexityImg}
                            alt="Perplexity and accuracy vs compression curves"
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        ),
                      },
                      {
                        n: "03",
                        title: "Fruit Ripeness via mmWave Radar",
                        desc: "FMCW radar sensing ripeness through the rind. First framework to model thick-rind fruit as three layers and predict SSC, moisture, and firmness together. Ongoing.",
                        headerBg: "#fff3f3",
                        headerH: "h-[170px]",
                        tags: [
                          { t: "mmWave", c: "#d46a7a", bg: "rgba(212,106,122,0.12)" },
                          { t: "TI Radar", c: "#d46a7a", bg: "rgba(212,106,122,0.12)" },
                          { t: "ML", c: "#a84a5b", bg: "rgba(212,106,122,0.08)" },
                          { t: "Signal Processing", c: "#a84a5b", bg: "rgba(212,106,122,0.08)" },
                        ],
                        svg: (
                          <img
                            src={mmwaveWatermelonImg}
                            alt="mmWave radar fruit ripeness setup photo"
                            className="h-full w-full object-cover"
                            style={{ objectPosition: "58% 44%" }}
                            loading="lazy"
                            decoding="async"
                          />
                        ),
                      },
                      {
                        n: "04",
                        title: "This website",
                        desc: "Vibe-coded with Claude in one afternoon. Transcript in my YC application.",
                        headerBg: "#f0f4ff",
                        tags: [
                          { t: "Claude", c: "#7a8ac8", bg: "rgba(122,138,200,0.12)" },
                          { t: "Cursor", c: "#7a8ac8", bg: "rgba(122,138,200,0.12)" },
                          { t: "Vibe-coded", c: "#9a8ac8", bg: "rgba(122,138,200,0.08)" },
                        ],
                        svg: (
                          <svg viewBox="0 0 360 110" className="h-full w-full">
                            <rect width="360" height="110" fill="#f0f4ff" />
                            <rect x="40" y="16" width="280" height="78" rx="12" fill="#fff" stroke="#c8d4f0" />
                            <rect x="40" y="16" width="280" height="18" rx="12" fill="#f7f9ff" stroke="#c8d4f0" />
                            <circle cx="54" cy="25" r="3" fill="#d18a8a" />
                            <circle cx="66" cy="25" r="3" fill="#d4bf7a" />
                            <circle cx="78" cy="25" r="3" fill="#84b88a" />
                            <text x="112" y="28" fontFamily="DM Mono" fontSize="9" fill="#9ab0c8">
                              sneha-yb.github.io/siri
                            </text>
                            <text x="56" y="54" fontFamily="DM Mono" fontSize="10" fill="#7a8ac8">
                              built-with claude
                            </text>
                            <text x="56" y="70" fontFamily="DM Mono" fontSize="10" fill="#9ab0c8">
                              // one afternoon
                            </text>
                            <text x="56" y="86" fontFamily="DM Mono" fontSize="10" fill="#9a8ac8">
                              ships &gt; perfects
                            </text>
                            <rect x="184" y="78" width="6" height="10" fill="#9ab0c8" opacity="0.75" />
                          </svg>
                        ),
                      },
                    ].map((p) => (
                      <div key={p.n} className="academic-card overflow-hidden">
                        <div
                          className={p.headerH ?? "h-[110px]"}
                          style={{ background: p.headerBg }}
                        >
                          {p.svg}
                        </div>
                        <div className="p-5">
                          <p className="academic-mono text-[10px] tracking-[0.18em] text-[#9ab0c8]">
                            PROJECT {p.n}
                          </p>
                          <h3 className="mt-2 text-[16px] font-medium text-[#1a2030]">
                            {p.title}
                          </h3>
                          <p className="mt-2 text-[14px] leading-relaxed text-[#6a7a8a]">
                            {p.desc}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {p.tags.map((tag) => (
                              <span
                                key={tag.t}
                                className="academic-mono rounded-full px-3 py-1 text-[10px]"
                                style={{
                                  border: `1px solid ${tag.c}`,
                                  color: tag.c,
                                  background: tag.bg,
                                }}
                              >
                                {tag.t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="academic-divider mx-auto max-w-6xl px-4 sm:px-6" />

              {/* BEYOND THE CLASSROOM */}
              <section className="px-4 py-14 sm:px-6 md:py-16">
                <div className="mx-auto max-w-6xl">
                  <div
                    className="mb-10 h-[3px] w-14 rounded-[2px]"
                    style={{
                      background:
                        "linear-gradient(to right, #7a8ac8, rgba(122,138,200,0))",
                    }}
                  />
                  <p className="academic-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[#8aabcc]">
                    BEYOND THE CLASSROOM
                  </p>
                  <h2 className="academic-serif mt-3 text-[22px] font-normal text-[#1a2030]">
                    other things i&apos;ve <em style={{ color: "#7a8ac8" }}>built.</em>
                  </h2>

                  <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {[
                      {
                        prefix: "[ hardware ]",
                        prefixColor: "#7a8ac8",
                        blob: "#7a8ac8",
                        title: "Avishkar Hyperloop",
                        desc: "We built a hyperloop. The Railway Minister of India showed up. Top 5 globally for electrical design. Not a bad undergrad project XD",
                        badge: "top 5 global · electrical design",
                        image: avishkarHyperloopGroupImg,
                        imageAspect: "aspect-[16/9]",
                        imageFit: "object-cover",
                        imagePosition: "50% 22%",
                        tags: ["EHW · European Hyperloop Week"],
                      },
                      {
                        prefix: "[ research ]",
                        prefixColor: "#7a8ac8",
                        blob: "#8aaac8",
                        title: "Young Research Fellow",
                        desc:
                          "Selected for IIT Madras YRF. Automated LDO regulator optimization.",
                        badge: "selective · IIT Madras",
                        image: youngResearchFellowCircuitImg,
                        imageAspect: "aspect-[16/9]",
                        imageFit: "object-contain",
                        imagePosition: "center",
                      },
                    ].map((c) => (
                      <div key={c.title} className="academic-card relative overflow-hidden p-5">
                        <div
                          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
                          style={{ background: c.blob, opacity: 0.12 }}
                        />
                        {c.image && (
                          <div className="mb-4 overflow-hidden rounded-[10px] bg-[#f4f8fd] p-2">
                            <img
                              src={c.image}
                              alt={`${c.title} poster`}
                              className={`w-full ${c.imageAspect ?? "aspect-[16/9]"} ${
                                c.imageFit ?? "object-contain"
                              }`}
                              loading="lazy"
                              decoding="async"
                              style={{ objectPosition: c.imagePosition ?? "center" }}
                            />
                          </div>
                        )}
                        <p
                          className="academic-mono text-[11px] font-medium tracking-[0.14em]"
                          style={{ color: c.prefixColor }}
                        >
                          {c.prefix}
                        </p>
                        <h3 className="mt-2 text-[16px] font-medium text-[#1a2030]">
                          {c.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-[#6a7a8a]">
                          {c.desc}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {c.tags?.map((t: string) => (
                            <span
                              key={t}
                              className="academic-mono inline-flex rounded-full px-3 py-1 text-[10px]"
                              style={{
                                border: "1px solid #7a8ac8",
                                color: "#7a8ac8",
                                background: "#f4f5ff",
                              }}
                            >
                              {t}
                            </span>
                          ))}
                          <span
                            className="academic-mono inline-flex rounded-full px-3 py-1 text-[10px]"
                            style={{
                              border: "1px solid #7a8ac8",
                              color: "#7a8ac8",
                              background: "#f4f5ff",
                            }}
                          >
                            {c.badge}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="academic-divider mx-auto max-w-6xl px-4 sm:px-6" />

              {/* TEACHING */}
              <section className="px-4 py-14 sm:px-6 md:py-16">
                <div className="mx-auto max-w-6xl">
                  <div
                    className="mb-10 h-[3px] w-14 rounded-[2px]"
                    style={{
                      background:
                        "linear-gradient(to right, #5b8fc2, rgba(91,143,194,0))",
                    }}
                  />
                  <p className="academic-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[#8aabcc]">
                    TEACHING
                  </p>
                  <h2 className="academic-serif mt-3 text-[22px] font-normal text-[#1a2030]">
                    where i&apos;ve <em style={{ color: "#5b8fc2" }}>taught.</em>
                  </h2>

                  <div className="academic-card mt-10 overflow-hidden">
                    <div
                      className="h-full w-full"
                      style={{
                        borderLeft: "3px solid transparent",
                        borderImage:
                          "linear-gradient(to bottom, #7aaad8, #a8c8e8) 1",
                      }}
                    >
                      <div className="p-6 md:p-7">
                        <p className="academic-mono text-[11px] tracking-[0.12em] text-[#9ab0c8]">
                          Graduate TA — Operating Systems · Purdue
                        </p>
                        <p className="mt-3 text-[14px] leading-relaxed text-[#6a7a8a]">
                          JOS labs —{" "}
                          <span className="font-medium text-[#5b8fc2]">
                            bootloading
                          </span>
                          ,{" "}
                          <span className="font-medium text-[#5b8fc2]">
                            virtual memory
                          </span>
                          ,{" "}
                          <span className="font-medium text-[#5b8fc2]">
                            kernel debugging
                          </span>
                          , paging, concurrency. If you can teach it, you know it cold.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="academic-divider mx-auto max-w-6xl px-4 sm:px-6" />

              {/* EDUCATION */}
              <section className="px-4 py-14 sm:px-6 md:py-16">
                <div className="mx-auto max-w-6xl pb-4">
                  <div
                    className="mb-10 h-[3px] w-14 rounded-[2px]"
                    style={{
                      background:
                        "linear-gradient(to right, #6aaac8, rgba(106,170,200,0))",
                    }}
                  />
                  <p className="academic-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[#8aabcc]">
                    EDUCATION
                  </p>
                  <h2 className="academic-serif mt-3 text-[22px] font-normal text-[#1a2030]">
                    where i&apos;ve <em style={{ color: "#6aaac8" }}>studied.</em>
                  </h2>

                  <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {[
                      {
                        blob: "#7aaad8",
                        school: "Purdue University",
                        details: ["MS Computer Engineering", "West Lafayette · 2024–2026"],
                        gpa: "3.96",
                        gpaLabel: "GPA",
                        gpaNote: "",
                      },
                      {
                        blob: "#a8c8e8",
                        school: "IIT Madras",
                        details: ["BTech Electrical Engineering", "Chennai · 2020–2024"],
                        gpa: "8.41",
                        gpaLabel: "GPA / 10",
                        gpaNote: "",
                      },
                    ].map((e) => (
                      <div key={e.school} className="academic-card relative overflow-hidden p-6">
                        <div
                          className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full"
                          style={{ background: e.blob, opacity: 0.12 }}
                        />
                        <h3 className="text-[16px] font-medium text-[#1a2030]">
                          {e.school}
                        </h3>
                        <div className="academic-mono mt-3 space-y-1 text-[11px] tracking-[0.12em] text-[#9ab0c8]">
                          {e.details.map((d) => (
                            <div key={d}>{d}</div>
                          ))}
                        </div>

                        <div className="mt-5">
                          <div className="academic-mono text-[26px] font-medium text-[#5b8fc2]">
                            {e.gpa}
                          </div>
                          <div className="academic-mono mt-1 text-[8px] uppercase tracking-[0.2em] text-[#9ab0c8]">
                            {e.gpaLabel}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </>
        )}


        <footer className="border-t border-ink-800/60 px-4 py-8 text-center font-sans text-xs text-ink-600 sm:px-6">
          © {new Date().getFullYear()} {site.name} · Built with curiosity
        </footer>
      </main>
    </>
  );
}
