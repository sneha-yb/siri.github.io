import { motion } from "framer-motion";
import { mainTabs, type MainTab } from "../content";

type Props = {
  activeTab: MainTab;
  onTabChange: (tab: MainTab) => void;
  onSayHi: () => void;
};

export function SiteNav({
  activeTab,
  onTabChange,
  onSayHi,
}: Props) {
  const navTheme =
    activeTab === "academic" ? "academic" : "linen";

  const headerClass = "fixed left-0 right-0 top-0 z-50 bg-transparent";

  const linkBase =
    navTheme === "academic"
      ? "text-[#8aabcc] hover:text-[#1a2030]"
      : "text-[#a89070] hover:text-[#281408]";

  const activeColor =
    navTheme === "academic" ? "text-[#1a2030]" : "text-[#281408]";

  const sayHiClass =
    navTheme === "academic"
      ? "rounded-full border border-[#c0d0e8] bg-transparent px-4 py-2 font-mono text-sm font-medium text-[#3a5070] transition hover:bg-white/50"
      : "rounded-full border border-[#c0a888] bg-[#fdf6ee] px-4 py-2 font-mono text-sm font-medium text-[#5a3820] transition hover:bg-white/70";

  return (
    <motion.header
      className={headerClass}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div />
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-5 md:flex" aria-label="Site sections">
            {mainTabs.map((item) => {
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onTabChange(item.id)}
                  className={`font-mono text-[15px] tracking-[0.05em] transition-colors ${
                    active ? activeColor : linkBase
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={onSayHi}
            className={sayHiClass}
          >
            Say hi
          </button>
        </div>
      </div>
    </motion.header>
  );
}
