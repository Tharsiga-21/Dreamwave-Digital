import { createFileRoute, Link } from "@tanstack/react-router";
import { CursorTrail } from "@/components/CursorTrail";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ApplyBar } from "@/components/ApplyBar";
import { ProgramTabs } from "@/components/ProgramTabs";
import { ArrowUpRight, Crown, Sparkles, Gift, MessagesSquare, Trophy, IceCream, Calendar } from "lucide-react";

export const Route = createFileRoute("/programs/gwy-25")({
  head: () => ({
    meta: [
      { title: "GWY Fellowship '25 — Programs" },
      { name: "description", content: "A 4-week cohort for creators, designers and builders to demystify Web3 and find their voice — together." },
      { property: "og:title", content: "GWY Fellowship 2025" },
      { property: "og:description", content: "4 weeks. Real conversations. A mini e-pageant. Ice-cream graduation." },
    ],
  }),
  component: Page,
});

const why = [
  { k: "<25%", v: "of Web3 users are women" },
  { k: "Dev-heavy", v: "onboarding gatekeeps creators" },
  { k: "Consumer", v: "apps & GameFi drive real adoption" },
  { k: "0", v: "street-style, creator-led spaces — until now" },
];

const weekly = [
  { w: "Week 01", t: "Find your voice", d: "Why you yap, what you yap about, and who you're really talking to." },
  { w: "Week 02", t: "The Web3 unlock", d: "Wallets, onchain culture, GameFi, consumer apps — explained like a friend would." },
  { w: "Week 03", t: "Ship something", d: "A thread, a video, a meme, a mini-product. Anything that puts you on the map." },
  { w: "Week 04", t: "Graduate loud", d: "Demo + a finale night. Cameras on, ice-cream out, shoutouts flying." },
];

const moments = [
  { i: MessagesSquare, t: "2k+ messages in 3 hours", d: "The WhatsApp group went off the moment selections dropped at 9 PM." },
  { i: Crown, t: "The X Queen e-pageant", d: "A mini, very-online pageant the fellowship still talks about." },
  { i: IceCream, t: "The ₹50 ice-cream finale", d: "No agenda. No pressure. Just sweet, silly, unforgettable." },
  { i: Trophy, t: "Yapping Degrees, awarded", d: "Cameras on, shoutouts, reflections — a real graduation, online." },
];

function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sunset-wash text-foreground">
      <CursorTrail />
      <div className="relative z-10">
        <SiteNav active="programs" ctaLabel="Apply to 2.0" ctaHref="https://discord.gg/CRaEtrtZ2v" />
        <ProgramTabs active="gwy25" />

        <section className="relative mx-auto w-[min(94%,1180px)] mt-6 md:mt-10">
          <div className="chapter-glass overflow-hidden">
            <div className="relative aspect-[16/7] md:aspect-[16/6] overflow-hidden">
              <img src="/programs/gwy25-hero.jpg" alt="GWY Fellowship sunset banner" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-transparent" />
              <span className="absolute top-4 left-4 pill inline-flex items-center gap-2 px-3 py-1 text-[11px] uppercase tracking-[0.25em] bg-white/70 backdrop-blur text-foreground/80">
                <Crown className="h-3 w-3" /> the origin cohort · 2025
              </span>
            </div>
            <div className="p-7 md:p-12 text-center">
              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Girls Who Yap <span className="text-coral">Fellowship</span>
              </h1>
              <p className="mt-3 text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-foreground/60">
                4-week cohort · creators, designers, builders
              </p>
              <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-foreground/75">
                The crypto world is a fast-moving frontier — often jargon-heavy, often gatekept. Girls Who Yap
                redefines that narrative. We demystify Web3 by showing its <em>practical</em> side: real impact,
                real careers, real ownership — in a room built for women.
              </p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">why now</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              The gap is <span className="text-coral">real</span>
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
          <div className="text-center">
            <span className="chapter-num">program structure</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              The <span className="text-coral">4-week</span> arc
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-sm text-foreground/65">
              We stick to this rhythm — and ping you 18 hours ahead on Discord/email when anything shifts.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {weekly.map((p) => (
              <div key={p.w} className="chapter-glass p-6 rounded-3xl">
                <div className="text-[11px] uppercase tracking-[0.25em] text-coral font-semibold">{p.w}</div>
                <h3 className="mt-3 font-display text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="chapter-glass p-8 md:p-12">
            <div className="text-center">
              <span className="chapter-num">bounties · yap to earn</span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
                Contribute value, <span className="text-coral">get rewarded</span>
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-foreground/70">
                Cash, swag, shoutouts and the occasional surprise. Bounties launched 13 Aug 2025 and ran the
                whole cohort.
              </p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { i: Gift, t: "Cash incentives" },
                { i: Sparkles, t: "Shoutouts & spotlights" },
                { i: Trophy, t: "Merch & swag drops" },
                { i: Crown, t: "The X Queen titles" },
              ].map((b) => {
                const Icon = b.i;
                return (
                  <div key={b.t} className="rounded-2xl border border-border bg-white/65 p-5 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-coral shrink-0" />
                    <div className="text-sm font-semibold">{b.t}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">moments from 1.0</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              The bits we'll <span className="text-coral">never forget</span>
            </h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {moments.map((m) => {
              const Icon = m.i;
              return (
                <div key={m.t} className="chapter-glass p-6 rounded-3xl">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-coral text-primary-foreground shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{m.t}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{m.d}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24 mb-16 md:mb-24">
          <div className="chapter-glass p-8 md:p-12 text-center">
            <Calendar className="mx-auto h-8 w-8 text-coral" />
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
              Fellowship 1.0 closed its curtain. <span className="text-coral">2.0 is open.</span>
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-foreground/70">
              See the full 1.0 recap — graduation snaps, pageant moments, the WhatsApp chaos — or jump
              straight to applying for the next edition.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link to="/past-initiatives" className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95">
                See the 1.0 recap <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-semibold hover:bg-white/80">
                Apply to Fellowship 2.0
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
      <ApplyBar label="Fellowship 2.0 · applications open" ctaLabel="Apply" ctaHref="https://discord.gg/CRaEtrtZ2v" />
    </div>
  );
}
