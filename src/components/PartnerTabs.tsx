import { Link } from "@tanstack/react-router";

export const partnerTabs = [
  { key: "corporate", label: "Corporate", to: "/partner/corporate" },
  { key: "ecosystem", label: "Ecosystem & Grants", to: "/partner/ecosystem" },
  { key: "csr", label: "CSR", to: "/partner/csr" },
  { key: "volunteer", label: "Volunteer", to: "/partner/volunteer" },
] as const;

export type PartnerKey = (typeof partnerTabs)[number]["key"];

export function PartnerTabs({ active }: { active?: PartnerKey }) {
  return (
    <div className="relative mx-auto w-[min(94%,1200px)] mt-6 md:mt-8">
      <div className="chapter-glass inline-flex flex-wrap gap-1 p-1 rounded-full max-w-full overflow-x-auto">
        <Link
          to="/partner"
          className={
            !active
              ? "rounded-full bg-coral px-4 py-2 text-xs md:text-sm font-semibold text-primary-foreground shadow-glow whitespace-nowrap"
              : "rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-white/60 transition whitespace-nowrap"
          }
        >
          Overview
        </Link>
        {partnerTabs.map((t) => (
          <Link
            key={t.key}
            to={t.to}
            className={
              active === t.key
                ? "rounded-full bg-coral px-4 py-2 text-xs md:text-sm font-semibold text-primary-foreground shadow-glow whitespace-nowrap"
                : "rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-white/60 transition whitespace-nowrap"
            }
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
