import { useEffect, useRef } from "react";

// Each layer = one wave band. Parameters tuned for a slow, emotional build (Teddy Swims energy).
// amp = peak height as fraction of canvas h
// freq = cycles across screen
// speed = animation pace (lower = slower/dreamier)
// harmonics = irregularity multiplier (higher = choppier peaks)
const LAYERS = [
  // Deep slow swells — the emotional foundation
  { amp: 0.10, freq: 0.55, speed: 0.22, phase: 0.0, harmonic: 0.28, color: "#7a3820", alpha: 0.28, y: 0.30 },
  { amp: 0.08, freq: 0.80, speed: 0.30, phase: 1.9, harmonic: 0.22, color: "#985840", alpha: 0.24, y: 0.22 },
  // Mid range — the melody
  { amp: 0.07, freq: 1.20, speed: 0.45, phase: 0.8, harmonic: 0.35, color: "#5a2810", alpha: 0.20, y: 0.36 },
  { amp: 0.09, freq: 0.95, speed: 0.38, phase: 2.6, harmonic: 0.30, color: "#7a3820", alpha: 0.22, y: 0.18 },
  // Upper partials — the shimmer
  { amp: 0.04, freq: 2.10, speed: 0.70, phase: 1.3, harmonic: 0.55, color: "#985840", alpha: 0.18, y: 0.12 },
  { amp: 0.05, freq: 1.75, speed: 0.58, phase: 0.5, harmonic: 0.48, color: "#5a2810", alpha: 0.18, y: 0.42 },
  // Sub bass swell — wide and slow
  { amp: 0.12, freq: 0.38, speed: 0.18, phase: 3.2, harmonic: 0.18, color: "#7a3820", alpha: 0.16, y: 0.28 },
  // Breath line — very gentle
  { amp: 0.03, freq: 3.00, speed: 0.90, phase: 2.0, harmonic: 0.65, color: "#985840", alpha: 0.14, y: 0.08 },
];

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function drawLayer(
      layer: (typeof LAYERS)[0],
      w: number,
      h: number,
    ) {
      const { amp, freq, speed, phase, harmonic, color, alpha, y } = layer;
      ctx!.beginPath();

      for (let px = 0; px <= w; px += 3) {
        const nx = (px / w) * Math.PI * 2;
        // Primary wave + harmonic distortion for irregularity
        const dy =
          Math.sin(nx * freq + t * speed + phase) * amp * h +
          Math.sin(nx * freq * 2.37 + t * speed * 1.6 + phase * 1.4) * amp * harmonic * h +
          Math.sin(nx * freq * 0.63 + t * speed * 0.75 + phase * 0.6) * amp * harmonic * 0.6 * h;

        if (px === 0) ctx!.moveTo(px, h * y + dy);
        else ctx!.lineTo(px, h * y + dy);
      }

      ctx!.strokeStyle = color;
      ctx!.globalAlpha = alpha;
      ctx!.lineWidth = 1.8;
      ctx!.lineJoin = "round";
      ctx!.lineCap = "round";
      ctx!.stroke();
      ctx!.globalAlpha = 1;
    }

    function tick() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      for (const layer of LAYERS) {
        drawLayer(layer, w, h);
      }

      t += 0.016; // ~60 fps tick
      animId = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
