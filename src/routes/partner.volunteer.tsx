import { createFileRoute, Link } from "@tanstack/react-router";
import { CursorTrail } from "@/components/CursorTrail";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PartnerTabs } from "@/components/PartnerTabs";
import { ApplyBar } from "@/components/ApplyBar";
import { ArrowUpRight, Sparkles, Mic, MessageSquare, FileSearch, Clock } from "lucide-react";

export const Route = createFileRoute("/partner/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer with DoraDAO — Mentor, speak, review" },
      {
        name: "description",
        content:
          "Share your expertise as a speaker, mentor or reviewer. Flexible commitment formats — mentorship, speaking, resume reviews and mock interviews.",
      },
      { property: "og:title", content: "Volunteer with DoraDAO" },
    ],
  }),
  component: Page,
});

const roles = [
  {
    i: MessageSquare,
    t: "1:1 mentor",
    d: "30–45 min a month with one mentee across the creator or early-career track. Long-term arc, not one-off coffee.",
  },
  {
    i: Mic,
    t: "Speaker / panelist",
    d: "Headline a session at GWY Conf, Pre-Conf, a Night Camp or an AMA. Curated rooms, sharp audiences.",
  },
  {
    i: FileSearch,
    t: "Resume & portfolio reviewer",
    d: "Show up for one batch a quarter. Async reviews + a live crit session. Highest-leverage 60 mins you'll spend.",
  },
  {
    i: Clock,
    t: "Office hours host",
    d: "Open a slot once a month on a topic you love. Builders book it. You teach, they ship. Repeat.",
  },
];

function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sunset-wash text-foreground">
      <CursorTrail />
      <div className="relative z-10">
        <SiteNav active="partner" ctaLabel="Volunteer" ctaHref="https://discord.gg/CRaEtrtZ2v" />
        <PartnerTabs active="volunteer" />

        <section className="relative mx-auto w-[min(94%,1200px)] mt-6 md:mt-10">
          <div className="chapter-glass p-8 md:p-14 grid md:grid-cols-[1.1fr_1fr] gap-8 items-center">
            <div>
              <span className="pill inline-flex items-center gap-2 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-foreground/70">
                <Sparkles className="h-3 w-3" /> volunteer with doradao
              </span>
              <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Share your <span className="text-coral">expertise</span>, shape a builder's path
              </h1>
              <p className="mt-5 text-base md:text-lg text-foreground/75">
                The builders in our community need more than inspiration — they need people with
                real experience willing to show up. Mentor, speak, review work, run an AMA. Your
                contribution directly shapes careers at the moments that matter.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://discord.gg/CRaEtrtZ2v"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
                >
                  Join the volunteer pool <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:partnerships@doradao.community?subject=Volunteer%20with%20DoraDAO"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-semibold hover:bg-white/80"
                >
                  Email us your shape
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <img src="/doradao1/session2.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1200px)] mt-20 md:mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chapter-num">ways to show up</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">
              Pick the shape that fits your week
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {roles.map(({ i: Icon, t, d }) => (
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
              One hour a month. Real careers shaped.
            </h2>
            <a
              href="https://discord.gg/CRaEtrtZ2v"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
            >
              Volunteer with us <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <SiteFooter />
      </div>
      <ApplyBar label="Volunteer · mentor, speak, review" ctaLabel="Join the pool" ctaHref="https://discord.gg/CRaEtrtZ2v" />
    </div>
  );
}
