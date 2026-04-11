import { motion } from "framer-motion";
import { mainTabs, site, type MainTab } from "../content";

type Props = {
  activeTab: MainTab;
  onTabChange: (tab: MainTab) => void;
  onLogoClick: () => void;
  onSayHi: () => void;
};

export function SiteNav({
  activeTab,
  onTabChange,
  onLogoClick,
  onSayHi,
}: Props) {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-ink-800/60 bg-ink-950/75 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={onLogoClick}
          className="group text-left font-display text-lg font-semibold tracking-tight text-ink-50 transition-colors hover:text-accent"
        >
          {site.name}
          <span className="block font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-ink-500 group-hover:text-ink-400">
            Home
          </span>
        </button>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Site sections">
          {mainTabs.map((item) => {
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                className={`relative rounded-full px-3 py-1.5 font-sans text-sm transition-colors ${
                  active ? "text-ink-50" : "text-ink-400 hover:text-ink-200"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-tab-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ink-800/80 ring-1 ring-ink-700/80"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={onSayHi}
          className="rounded-full bg-accent/15 px-4 py-2 font-sans text-sm font-medium text-accent ring-1 ring-accent/30 transition hover:bg-accent/25"
        >
          Say hi
        </button>
      </div>
    </motion.header>
  );
}
