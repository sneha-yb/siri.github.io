import { motion } from "framer-motion";

/** Normalized viewBox 0–100; y biased to upper sky */
const CONSTELLATIONS: {
  stars: { x: number; y: number; r: number }[];
  links: [number, number][];
}[] = [
  {
    stars: [
      { x: 12, y: 18, r: 1.1 },
      { x: 22, y: 12, r: 0.7 },
      { x: 30, y: 22, r: 0.9 },
      { x: 18, y: 30, r: 0.6 },
      { x: 26, y: 35, r: 0.5 },
    ],
    links: [
      [0, 1],
      [1, 2],
      [0, 3],
      [2, 3],
      [3, 4],
    ],
  },
  {
    stars: [
      { x: 48, y: 10, r: 0.8 },
      { x: 55, y: 8, r: 1 },
      { x: 62, y: 16, r: 0.65 },
      { x: 52, y: 24, r: 0.55 },
      { x: 58, y: 28, r: 0.45 },
    ],
    links: [
      [0, 1],
      [1, 2],
      [0, 3],
      [2, 4],
      [3, 4],
    ],
  },
  {
    stars: [
      { x: 78, y: 14, r: 0.9 },
      { x: 88, y: 22, r: 0.6 },
      { x: 82, y: 32, r: 0.75 },
      { x: 72, y: 28, r: 0.5 },
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
  },
];

const SCATTER_STARS: { x: number; y: number; s: number; d: number }[] = [
  { x: 5, y: 8, s: 2, d: 0 },
  { x: 38, y: 6, s: 1.5, d: 0.3 },
  { x: 65, y: 4, s: 1, d: 0.6 },
  { x: 95, y: 12, s: 2, d: 0.9 },
  { x: 8, y: 42, s: 1, d: 0.2 },
  { x: 42, y: 38, s: 1.5, d: 0.5 },
  { x: 92, y: 45, s: 1, d: 0.8 },
  { x: 15, y: 52, s: 1, d: 0.15 },
  { x: 70, y: 48, s: 2, d: 0.45 },
];

export function AboutHeroDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-ink-900/40 via-transparent to-transparent" />

      <motion.div
        className="absolute inset-x-0 top-0 h-[58%]"
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 100 50"
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.35" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {CONSTELLATIONS.map((c, ci) => (
            <g key={ci}>
              {c.links.map(([a, b], li) => {
                const A = c.stars[a];
                const B = c.stars[b];
                return (
                  <motion.line
                    key={li}
                    x1={A.x}
                    y1={A.y}
                    x2={B.x}
                    y2={B.y}
                    stroke="rgba(196, 165, 116, 0.28)"
                    strokeWidth={0.12}
                    vectorEffect="non-scaling-stroke"
                    initial={{ opacity: 0.08 }}
                    animate={{ opacity: [0.08, 0.38, 0.08] }}
                    transition={{
                      duration: 6 + ci * 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: ci * 0.4 + li * 0.15,
                    }}
                  />
                );
              })}
              {c.stars.map((s, si) => (
                <motion.circle
                  key={si}
                  cx={s.x}
                  cy={s.y}
                  r={s.r * 0.35}
                  fill="rgba(244, 246, 248, 0.92)"
                  filter="url(#star-glow)"
                  animate={{
                    opacity: [0.45, 1, 0.45],
                    r: [s.r * 0.32, s.r * 0.42, s.r * 0.32],
                  }}
                  transition={{
                    duration: 3.2 + si * 0.4 + ci * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: si * 0.25 + ci * 0.5,
                  }}
                />
              ))}
            </g>
          ))}
        </svg>
      </motion.div>

      {SCATTER_STARS.map((st, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-ink-100/90 shadow-[0_0_10px_rgba(196,165,116,0.25)]"
          style={{
            width: st.s,
            height: st.s,
            left: `${st.x}%`,
            top: `${st.y}%`,
          }}
          animate={{
            opacity: [0.2, 0.85, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + (i % 5) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: st.d,
          }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-[8%] h-px w-[min(55vw,420px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        animate={{ opacity: [0.15, 0.45, 0.15], scaleX: [0.92, 1, 0.92] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
