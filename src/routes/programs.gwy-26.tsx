import { createFileRoute, Link } from "@tanstack/react-router";
import { CursorTrail } from "@/components/CursorTrail";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ApplyBar } from "@/components/ApplyBar";
import { ProgramTabs } from "@/components/ProgramTabs";
import { ArrowUpRight, Calendar, MapPin, Mic, Sparkles, Users, Globe, Lock, Gamepad2, Star, Trophy } from "lucide-react";

export const Route = createFileRoute("/programs/gwy-26")({
  head: () => ({
    meta: [
      { title: "GWYCONF '26 — Programs" },
      { name: "description", content: "GWYCONF'26 — a curated, invite-only women-specific gathering shaping the creator economy in AI & Web3." },
      { property: "og:title", content: "GWYCONF '26" },
      { property: "og:description", content: "28 March 2026 · New Delhi · invite-only." },
    ],
  }),
  component: Page,
});

const why = [
  { k: "$250B+", v: "creator economy" },
  { k: "75%", v: "women feel tech-excluded" },
  { k: "90%", v: "creators lack ownership" },
  { k: "2×", v: "growth via communities" },
];

const tracks = [
  { i: Mic, t: "Speaker sessions", d: "Founders, operators, and creators who actually shipped." },
  { i: Star, t: "Talent Night", d: "A stage built for first-timers — yap, perform, pitch, be seen." },
  { i: Sparkles, t: "Creator challenges", d: "Live prompts. Real outputs. Bragging rights." },
  { i: Gamepad2, t: "Gaming rooms", d: "Casual play, serious bonding — yes, this is a track." },
  { i: Users, t: "Community spotlights", d: "We hand the mic to the people building rooms of their own." },
  { i: Globe, t: "Live collaborations", d: "Cross-city, cross-discipline pairings that ship by day end." },
];

const winners = [
  { cat: "Fastest Growing Regional Community", winner: "GoalMate Community" },
  { cat: "Top Chapter-Led Community", winner: "GDG On Campus — Sharda University Agra" },
  { cat: "Top Student-Led Community", winner: "AI4Tomorrow" },
];

function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sunset-wash text-foreground">
      <CursorTrail />
      <div className="relative z-10">
        <SiteNav active="programs" ctaLabel="Get on the list" ctaHref="https://lu.ma/Doradao" />
        <ProgramTabs active="gwy26" />

        <section className="relative mx-auto w-[min(94%,1180px)] mt-6 md:mt-10">
          <div className="chapter-glass overflow-hidden">
            <div className="relative aspect-[16/7] md:aspect-[16/6] overflow-hidden">
              <img src="/programs/gwy26-hero.jpg" alt="GWYCONF'26 stage banner" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-transparent" />
              <span className="absolute top-4 left-4 pill inline-flex items-center gap-2 px-3 py-1 text-[11px] uppercase tracking-[0.25em] bg-white/70 backdrop-blur text-foreground/80">
                <Lock className="h-3 w-3" /> invite-only · women-specific
              </span>
            </div>
            <div className="p-7 md:p-12 text-center">
              <h1 className="font-display text-4xl md:text-7xl font-extrabold leading-[1.02]">
                GWY<span className="text-coral">CONF</span>'26
              </h1>
              <p className="mt-5 mx-auto max-w-2xl text-base md:text-lg text-foreground/75">
                A highly curated, one-day in-person gathering that brings together leading dev-creators,
                professionals, and community builders from across India for an intentional, immersive day
                focused on the future of the creator economy.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm">
                <span className="pill inline-flex items-center gap-2 px-3 py-1.5 bg-white/70"><Calendar className="h-3.5 w-3.5 text-coral" /> PRECONF · 28 Feb 2026</span>
                <span className="pill inline-flex items-center gap-2 px-3 py-1.5 bg-white/70"><Calendar className="h-3.5 w-3.5 text-coral" /> IRL · 28 Mar 2026</span>
                <span className="pill inline-flex items-center gap-2 px-3 py-1.5 bg-white/70"><MapPin className="h-3.5 w-3.5 text-coral" /> New Delhi, India</span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">vision</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              Make tech work <span className="text-coral">for you</span>
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-foreground/75">
              AI and Web3 are everywhere — shaping culture, money, creativity. For too many women it still
              feels confusing, over-technical, or built without us in mind. GWYCONF exists to shift that
              narrative: a creator-first room for storytellers, founders, artists, and community builders
              intentionally shaping a personal brand.
            </p>
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">why now</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              The numbers <span className="text-coral">don't lie</span>
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {why.map((r) => (
              <div key={r.v} className="chapter-glass p-6 text-center">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-coral">{r.k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/60">{r.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="chapter-glass p-8 md:p-12">
            <div className="text-center">
              <span className="chapter-num">preconf · virtual</span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
                12 hours. <span className="text-coral">10+ tracks.</span> One global room.
              </h2>
              <p className="mt-3 mx-auto max-w-2xl text-foreground/70">
                A 12-hour global online experience designed to give people across borders, professions, and
                genders a real glimpse into what the IRL conference feels like — open to all, free to attend.
              </p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tracks.map((p) => {
                const Icon = p.i;
                return (
                  <div key={p.t} className="rounded-2xl border border-border bg-white/65 p-5">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-coral text-primary-foreground shadow-glow">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold">{p.t}</h3>
                    <p className="mt-1 text-sm text-foreground/70 leading-relaxed">{p.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="chapter-glass p-8 md:p-12">
            <div className="text-center">
              <span className="chapter-num">community awards · '25</span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
                Earned, not given <Trophy className="inline h-7 w-7 text-coral align-middle" />
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-foreground/70">
                The result of the very first PRECONF — and the bar we're raising for '26.
              </p>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {winners.map((a) => (
                <div key={a.cat} className="rounded-2xl border border-border bg-white/65 p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-foreground/55">{a.cat}</div>
                  <div className="mt-2 font-display text-lg font-bold text-foreground">{a.winner}</div>
                  <Trophy className="mt-3 h-5 w-5 text-coral" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24 mb-16 md:mb-24">
          <div className="chapter-glass p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Two ways in: <span className="text-coral">PRECONF or IRL</span>
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-foreground/70">
              PRECONF is open and free. The IRL day is invite-only — get on the waitlist to be considered.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href="https://lu.ma/Doradao" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95">
                Join the waitlist <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/programs/gwy-25" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-semibold hover:bg-white/80">
                See the '25 origin
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
      <ApplyBar label="GWYCONF'26 · 28 Mar · New Delhi" ctaLabel="Waitlist" ctaHref="https://lu.ma/Doradao" />
    </div>
  );
}
