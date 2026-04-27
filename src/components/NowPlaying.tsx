import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TRACKS = [
  { title: "Lose Control", artist: "Teddy Swims", duration: 183 },
  { title: "APT.", artist: "ROSÉ & Bruno Mars", duration: 172 },
  { title: "Espresso", artist: "Sabrina Carpenter", duration: 175 },
  { title: "Die With A Smile", artist: "Lady Gaga & Bruno Mars", duration: 251 },
  { title: "Birds of a Feather", artist: "Billie Eilish", duration: 210 },
];

const TRACK_COLORS = ["#985840", "#7a6848", "#6a7858", "#587868", "#785870"];

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function NowPlaying() {
  const [trackIdx, setTrackIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const track = TRACKS[trackIdx];
  const color = TRACK_COLORS[trackIdx % TRACK_COLORS.length];
  const pct = Math.min((elapsed / track.duration) * 100, 100);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setElapsed((e) => {
          if (e >= track.duration) {
            setTrackIdx((i) => (i + 1) % TRACKS.length);
            return 0;
          }
          return e + 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, trackIdx, track.duration]);

  function prevTrack() {
    setTrackIdx((i) => (i - 1 + TRACKS.length) % TRACKS.length);
    setElapsed(0);
  }

  function nextTrack() {
    setTrackIdx((i) => (i + 1) % TRACKS.length);
    setElapsed(0);
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setElapsed(Math.floor(ratio * track.duration));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.4 }}
      className="flex w-full items-center gap-4 px-5 py-3 sm:gap-6 sm:px-8"
      style={{
        background: "rgba(237,228,220,0.72)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(192,168,136,0.30)",
      }}
    >
      {/* Spotify badge */}
      <div className="flex shrink-0 items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0">
          <circle cx="12" cy="12" r="12" fill="#1DB954" />
          <path
            d="M7 15.5c2.5-1.5 6.5-1.5 10 0M7.5 12c3-1.8 7-1.8 9 0M8.5 8.5c2.5-1.2 5.5-1.2 7 0"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] sm:block" style={{ color: "#a89070" }}>
          now playing
        </span>
      </div>

      {/* Rotating vinyl */}
      <div className="relative shrink-0">
        <motion.div
          className="h-9 w-9 rounded-full"
          style={{
            background: `conic-gradient(${color} 0%, #ede4d8 40%, ${color}99 70%, #ede4d8 100%)`,
            border: "1.5px solid rgba(192,168,136,0.4)",
          }}
          animate={{ rotate: playing ? 360 : 0 }}
          transition={playing ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0 }}
        >
          <div
            className="absolute inset-0 m-auto h-2.5 w-2.5 rounded-full"
            style={{ background: "#f0e8e0", border: "1px solid rgba(192,168,136,0.4)" }}
          />
        </motion.div>
      </div>

      {/* Track info */}
      <div className="w-[130px] shrink-0 sm:w-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={trackIdx}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.22 }}
          >
            <p className="truncate font-sans text-[13px] font-semibold leading-tight" style={{ color: "#281408" }}>
              {track.title}
            </p>
            <p className="truncate font-mono text-[9px]" style={{ color: "#a89070" }}>
              {track.artist}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar — fills remaining space */}
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <span className="shrink-0 font-mono text-[9px]" style={{ color: "#a89070" }}>
          {formatTime(elapsed)}
        </span>
        <div
          className="relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full"
          style={{ background: "rgba(192,168,136,0.28)" }}
          onClick={seek}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: color, width: `${pct}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="shrink-0 font-mono text-[9px]" style={{ color: "#a89070" }}>
          {formatTime(track.duration)}
        </span>
      </div>

      {/* Controls */}
      <div className="flex shrink-0 items-center gap-3">
        <button onClick={prevTrack} className="transition-opacity hover:opacity-50" style={{ color: "#785040" }} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
          </svg>
        </button>

        <button
          onClick={() => setPlaying((p) => !p)}
          className="flex h-7 w-7 items-center justify-center rounded-full transition-opacity hover:opacity-80"
          style={{ background: "#281810", color: "#f8f4f0" }}
          aria-label={playing ? "Pause" : "Play"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {playing ? (
              <motion.svg
                key="pause"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.12 }}
              >
                <path d="M6 19h4V5H6zm8-14v14h4V5z" />
              </motion.svg>
            ) : (
              <motion.svg
                key="play"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.12 }}
              >
                <path d="M8 5v14l11-7z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>

        <button onClick={nextTrack} className="transition-opacity hover:opacity-50" style={{ color: "#785040" }} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
