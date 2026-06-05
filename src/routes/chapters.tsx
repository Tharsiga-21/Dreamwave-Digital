import { createFileRoute } from "@tanstack/react-router";
import { CursorTrail } from "@/components/CursorTrail";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ApplyBar } from "@/components/ApplyBar";
import {
  ArrowUpRight,
  Sparkles,
  Heart,
  Users,
  Coffee,
  Moon,
  MapPin,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export const Route = createFileRoute("/chapters")({
  head: () => ({
    meta: [
      { title: "GWY City Chapters — Start one. Join one." },
      {
        name: "description",
        content:
          "High-trust local circles across cities. Apply to host a GWY Chapter in your city, or join the one closest to you.",
      },
      { property: "og:title", content: "GWY City Chapters" },
      {
        property: "og:description",
        content:
          "Soft space. Real space. Unrushed space. Start a chapter in your city or apply to join.",
      },
    ],
  }),
  component: ChaptersPage,
});

const fitYou = [
  "people naturally trust you and open up around you",
  "you already have access to (or can build) high-quality networks",
  "you understand people beyond their LinkedIn titles",
  "you value depth over visibility",
  "you can host a room with confidence and calm",
];

const youllDo = [
  { i: Users, t: "Curate the room", d: "Bring together high-intent founders, operators & corporate leaders." },
  { i: Coffee, t: "Host gatherings", d: "Small, private dinners, brunches, gaming evenings, jams, workations." },
  { i: Heart, t: "Hold the culture", d: "Discreet, non-transactional, high-quality. No invisible scoreboard." },
  { i: Moon, t: "Keep the pulse", d: "Momentum beyond events — introductions, follow-ups, real conversations." },
];

const notFor = [
  "people chasing visibility or clout",
  "people who rely on mass invites",
  "people who treat networking as transactions",
  "people who need constant direction",
];

const APPLY_URL = "https://luma.com/qshaop0s";
const JOIN_URL = "https://luma.com/connectdoradao";

function ChaptersPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sunset-wash text-foreground">
      <CursorTrail />
      <div className="relative z-10">
        <SiteNav active="chapters" ctaLabel="Host" ctaHref={APPLY_URL} />

        {/* HERO */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-10 md:mt-16">
          <div className="chapter-glass p-8 md:p-14 text-center">
            <span className="pill inline-flex items-center gap-2 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-foreground/70">
              <Sparkles className="h-3 w-3" /> high-trust circles across cities
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
              GWY <span className="text-coral">City Chapters</span>
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-base md:text-lg text-foreground/75">
              A small rebellion. A gentle one. A warm one. Rooms where you don't have to
              arrive as your best version, or your smartest version — just your{" "}
              <em>current</em> version. However you are. However you feel.
            </p>
            <p className="mt-4 font-hand text-2xl md:text-3xl text-coral">
              Soft space. Real space. Unrushed space.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={APPLY_URL}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
              >
                Start a chapter in your city <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={JOIN_URL}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white/80"
              >
                <MapPin className="h-4 w-4" /> Join a chapter near you
              </a>
            </div>
          </div>
        </section>

        {/* THE FEELING */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="chapter-glass p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-foreground/80 leading-relaxed space-y-4">
              <span className="chapter-num">the why</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                It began as a feeling.
              </h2>
              <p>
                That quiet, hard-to-explain feeling you carry back home after being in all
                the "right" rooms with all the "right" people… and still wondering,{" "}
                <em>why did it feel a little empty?</em>
              </p>
              <p>
                Not empty-empty. Just… slightly off. Like everyone was there, but not really{" "}
                <em>there</em>.
              </p>
              <p>
                Chapters are about making space for connection. No pressure to "make
                something happen." No invisible scoreboard of who met whom. Just people…
                sitting, talking, pausing, laughing a little too long.
              </p>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="chapter-glass p-8 md:p-10">
              <span className="chapter-num">who this is for</span>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">You're a strong fit if…</h2>
              <ul className="mt-5 space-y-3">
                {fitYou.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle2 className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-hand text-2xl text-coral">taste &gt; experience</p>
            </div>
            <div className="chapter-glass p-8 md:p-10">
              <span className="chapter-num">who this is NOT for</span>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">Probably not your room if…</h2>
              <ul className="mt-5 space-y-3">
                {notFor.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground/80">
                    <XCircle className="h-5 w-5 text-foreground/40 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL DO */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">what you'll do</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              Build a <span className="text-coral">strong</span> network, not a large one
            </h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {youllDo.map(({ i: Icon, t, d }) => (
              <div key={t} className="chapter-glass p-6 hover:-translate-y-1 transition-transform">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA — apply / join */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24 mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="chapter-glass p-8 md:p-10">
              <span className="chapter-num">host</span>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">
                Start a chapter
              </h3>
              <p className="mt-3 text-foreground/75 leading-relaxed">
                We're looking for <strong>one person per city</strong> to build and run
                these rooms from the ground up. If that sounds like you — apply.
              </p>
              <a
                href={APPLY_URL}
                target="_blank" rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
              >
                Apply to host <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="chapter-glass p-8 md:p-10">
              <span className="chapter-num">join</span>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">
                Join a chapter
              </h3>
              <p className="mt-3 text-foreground/75 leading-relaxed">
                Already a chapter near you? Subscribe to DoraDAO on Luma to get invited
                to the next gathering in your city.
              </p>
              <a
                href={JOIN_URL}
                target="_blank" rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-semibold hover:bg-white/80"
              >
                <MapPin className="h-4 w-4" /> Find your city
              </a>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
      <ApplyBar label="Open rooms in 8+ cities" ctaLabel="Host a chapter" ctaHref={APPLY_URL} />
    </div>
  );
}
