import { motion } from "framer-motion";

const orbs = [
  { cx: "12%", cy: "18%", r: 280, delay: 0 },
  { cx: "88%", cy: "72%", r: 220, delay: 0.8 },
  { cx: "70%", cy: "12%", r: 140, delay: 1.4 },
];

export function OrbField() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="grain absolute inset-0 z-[1]" />
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-3xl"
          style={{
            width: o.r,
            height: o.r,
            left: o.cx,
            top: o.cy,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
            delay: o.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </div>
  );
}
