import { motion } from "framer-motion";
import { mainTabs, type MainTab } from "../content";

type Props = {
  activeTab: MainTab;
  onTabChange: (tab: MainTab) => void;
};

export function MobileDock({ activeTab, onTabChange }: Props) {
  return (
    <motion.div
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex items-center gap-0.5 rounded-2xl border border-ink-700/80 bg-ink-900/90 px-1.5 py-1.5 shadow-lg shadow-black/40 backdrop-blur-lg">
        {mainTabs.map((item) => {
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={`relative min-w-[4.25rem] rounded-xl px-2 py-2 text-center font-sans text-[10px] font-medium uppercase tracking-wide transition-colors ${
                active ? "text-accent" : "text-ink-500"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="dock-tab-pill"
                  className="absolute inset-0 -z-10 rounded-xl bg-ink-800"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              {item.label}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
