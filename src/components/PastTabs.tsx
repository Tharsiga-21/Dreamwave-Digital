import { Link } from "@tanstack/react-router";

const tabs = [
  { key: "conf", label: "GWY Conference '26", to: "/past-initiatives" },
  { key: "v1", label: "DoraDAO 1.0 — Fellowship", to: "/doradao-1" },
] as const;

export function PastTabs({ active }: { active: "conf" | "v1" }) {
  return (
    <div className="relative mx-auto w-[min(94%,1100px)] mt-6 md:mt-10">
      <div className="chapter-glass inline-flex flex-wrap gap-1 p-1 rounded-full">
        {tabs.map((t) => (
          <Link
            key={t.key}
            to={t.to}
            className={
              active === t.key
                ? "rounded-full bg-coral px-4 py-2 text-xs md:text-sm font-semibold text-primary-foreground shadow-glow"
                : "rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-white/60 transition"
            }
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
