import { createFileRoute, Link } from "@tanstack/react-router";
import { CursorTrail } from "@/components/CursorTrail";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PartnerTabs } from "@/components/PartnerTabs";
import { ApplyBar } from "@/components/ApplyBar";
import { ArrowUpRight, HeartHandshake, Sparkles, Coins, LineChart, Shield } from "lucide-react";

export const Route = createFileRoute("/partner/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem & Grant Partners — DoraDAO" },
      {
        name: "description",
        content:
          "Fund the change builders actually need. Bounties, grants & ecosystem partnerships with transparent impact reporting from a community that ships.",
      },
      { property: "og:title", content: "Ecosystem & Grant Partners — DoraDAO" },
    ],
  }),
  component: Page,
});

const pillars = [
  {
    i: Coins,
    t: "Bounties & micro-grants",
    d: "Fund specific outcomes — apps shipped, tutorials written, integrations built. Trust-based, milestone-driven, transparent.",
  },
  {
    i: HeartHandshake,
    t: "Fellowship co-funding",
    d: "Underwrite a cohort. Stipends, mentorship, demo day. Your ecosystem becomes the default for emerging builders.",
  },
  {
    i: LineChart,
    t: "Impact reporting",
    d: "Quarterly reports aligned to your priorities — shipped products, jobs created, follow-on funding. Real numbers.",
  },
  {
    i: Shield,
    t: "Capacity to absorb capital",
    d: "An ops layer that can credibly receive, distribute and report on serious grant capital — not a side project.",
  },
];

function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sunset-wash text-foreground">
      <CursorTrail />
      <div className="relative z-10">
        <SiteNav active="partner" ctaLabel="Become a partner" ctaHref="/partner#become-a-partner" />
        <PartnerTabs active="ecosystem" />

        <section className="relative mx-auto w-[min(94%,1200px)] mt-6 md:mt-10">
          <div className="chapter-glass p-8 md:p-14 grid md:grid-cols-[1.1fr_1fr] gap-8 items-center">
            <div>
              <span className="pill inline-flex items-center gap-2 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-foreground/70">
                <Sparkles className="h-3 w-3" /> ecosystem & grants
              </span>
              <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Fund the change builders <span className="text-coral">actually need</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-foreground/75">
                Our university-to-career model targets the exact moments when builders in emerging
                markets get filtered out — with outcome measurement and the org capacity that
                serious grant capital requires.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/partner"
                  hash="become-a-partner"
                  className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
                >
                  Start an ecosystem partnership <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <img src="/doradao1/bounty.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1200px)] mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "$120K+", v: "distributed via bounties" },
              { k: "60+", v: "builders funded to ship" },
              { k: "100%", v: "milestone-based payouts" },
              { k: "Q", v: "transparent quarterly reports" },
            ].map((s) => (
              <div key={s.v} className="chapter-glass p-6 text-center">
                <div className="font-display text-3xl md:text-5xl font-extrabold text-coral">{s.k}</div>
                <div className="mt-2 text-xs md:text-sm text-foreground/65">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1200px)] mt-20 md:mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chapter-num">what you'll fund</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">
              Direct support for critical transition points
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {pillars.map(({ i: Icon, t, d }) => (
              <div key={t} className="chapter-glass p-7 hover:-translate-y-1 transition-transform">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{t}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1200px)] mt-20 md:mt-24 mb-24">
          <div className="chapter-glass p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold">
              Move capital to where it actually compounds.
            </h2>
            <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
              We'll co-design a grant or bounty program with you — and report back honestly.
            </p>
            <Link
              to="/partner"
              hash="become-a-partner"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
            >
              Become an ecosystem partner <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
      <ApplyBar label="Ecosystem partner · grants & bounties" ctaLabel="Co-design a program" ctaHref="/partner#become-a-partner" />
    </div>
  );
}
