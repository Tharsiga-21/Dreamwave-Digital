import { createFileRoute, Link } from "@tanstack/react-router";
import { CursorTrail } from "@/components/CursorTrail";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PartnerTabs } from "@/components/PartnerTabs";
import { ApplyBar } from "@/components/ApplyBar";
import { ArrowUpRight, Megaphone, Sparkles, Target, FileText, Repeat } from "lucide-react";

export const Route = createFileRoute("/partner/csr")({
  head: () => ({
    meta: [
      { title: "CSR Partners — DoraDAO" },
      {
        name: "description",
        content:
          "Skills-based CSR partnerships with measurable outcomes tied to ESG and SDG reporting. Put your team's real skills to work.",
      },
      { property: "og:title", content: "CSR Partners — DoraDAO" },
    ],
  }),
  component: Page,
});

const features = [
  {
    i: Target,
    t: "Skills-based volunteering",
    d: "Mentoring, speaking, code reviews, portfolio crits — your team's actual expertise, not a Saturday painting wall.",
  },
  {
    i: FileText,
    t: "ESG- & SDG-ready reporting",
    d: "Quarterly outcome dashboards mapped to UN SDGs 4, 5, 8 and 10 — drop straight into your CSR & ESG reports.",
  },
  {
    i: Repeat,
    t: "Year-round, not one-off",
    d: "We design a cadence that fits your team — monthly office hours, quarterly bootcamps, an annual flagship moment.",
  },
  {
    i: Megaphone,
    t: "Turnkey internal advocacy",
    d: "Comms kits, photo/video assets, employee testimonials — everything you need to make the business case internally.",
  },
];

function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sunset-wash text-foreground">
      <CursorTrail />
      <div className="relative z-10">
        <SiteNav active="partner" ctaLabel="Become a partner" ctaHref="/partner#become-a-partner" />
        <PartnerTabs active="csr" />

        <section className="relative mx-auto w-[min(94%,1200px)] mt-6 md:mt-10">
          <div className="chapter-glass p-8 md:p-14 grid md:grid-cols-[1.1fr_1fr] gap-8 items-center">
            <div>
              <span className="pill inline-flex items-center gap-2 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-foreground/70">
                <Sparkles className="h-3 w-3" /> corporate social responsibility
              </span>
              <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Give your team a way to <span className="text-coral">actually move the needle</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-foreground/75">
                Generic volunteer days don't move anything. DoraDAO's structured CSR partnerships
                put your team's real skills to work — mentoring, speaking, reviewing — with the
                impact reporting to make the business case internally.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/partner"
                  hash="become-a-partner"
                  className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
                >
                  Start a CSR partnership <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <img src="/doradao1/community.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1200px)] mt-20 md:mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chapter-num">how csr works at doradao</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">
              Real skills. Real outcomes. Real reports.
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {features.map(({ i: Icon, t, d }) => (
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
              Make your CSR budget compound.
            </h2>
            <Link
              to="/partner"
              hash="become-a-partner"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
            >
              Become a CSR partner <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
      <ApplyBar label="CSR partner · skills-based impact" ctaLabel="Design a program" ctaHref="/partner#become-a-partner" />
    </div>
  );
}
