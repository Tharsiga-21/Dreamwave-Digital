import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { speakerGrads, getInitials } from "@/lib/voices";

interface SpeakerDetailsProps {
  name: string;
  role: string;
  index: number;
  description?: string;
  image?: string;
}

export function SpeakerDetailCard({
  name,
  role,
  index,
  description,
  image,
}: SpeakerDetailsProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(true);
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="group relative rounded-2xl bg-white/10 border border-white/15 p-4 transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 shadow-soft cursor-pointer h-full min-h-[280px] perspective"
      style={{
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
      } as React.CSSProperties}
    >
      {/* Front side */}
      <div
        className="absolute inset-0 p-4 flex flex-col justify-between rounded-2xl"
        style={{
          backfaceVisibility: "hidden",
        } as React.CSSProperties}
      >
        {/* Avatar - Image or Gradient */}
        {image && imageLoaded && !imageError ? (
          <img
            src={image}
            alt={name}
            className="aspect-square rounded-xl object-cover shadow-glow relative overflow-hidden mb-3 w-full"
            onError={() => {
              setImageError(true);
              setImageLoaded(false);
            }}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div
            className={`aspect-square rounded-xl bg-gradient-to-br ${speakerGrads[index % speakerGrads.length]} grid place-items-center text-white font-display text-4xl font-bold shadow-glow relative overflow-hidden mb-3`}
          >
            <div className="absolute inset-0 grid-lines opacity-25" />
            <span className="relative drop-shadow-md">{getInitials(name)}</span>
          </div>
        )}

        {/* Info */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="flex items-center justify-between text-[10px] text-white/50 font-mono mb-2">
            <span>#0{(index % 8) + 1}</span>
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:text-coral transition group-hover:rotate-45 duration-300" />
          </div>
          <h4 className="font-display font-semibold text-base text-white leading-tight">
            {name}
          </h4>
          <p className="text-xs text-white/65 mt-1">{role}</p>
          <div className="mt-2 pt-2 border-t border-white/10 text-[10px] text-white/50">
            Click for bio
          </div>
        </div>
      </div>

      {/* Back side */}
      <div
        className="absolute inset-0 p-4 flex flex-col justify-between rounded-2xl bg-white/10 border border-white/15"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        } as React.CSSProperties}
      >
        <div>
          <h4 className="font-display font-semibold text-base text-white mb-2">
            {name}
          </h4>
          <p className="text-xs text-white/80 leading-relaxed">
            {description ||
              "Visionary leader and innovator in their field, bringing expertise and passion to the GWY community. Contributing to building the future of AI and creator economy."}
          </p>
        </div>
        <div className="text-[10px] text-white/50 text-center pt-2 border-t border-white/10">
          {role}
        </div>
      </div>
    </div>
  );
}

interface SpeakersSectionProps {
  speakers: Array<{ n: string; r: string; img?: string }>;
  title?: string;
}

export function SpeakersShowcase({ speakers, title }: SpeakersSectionProps) {
  return (
    <div>
      {title && (
        <h3 className="font-display font-semibold text-xl text-white mb-4">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {speakers.map((speaker, i) => (
          <div
            key={speaker.n}
            className="animate-fade-in"
            style={{
              animationDelay: `${i * 0.06}s`,
            }}
          >
            <SpeakerDetailCard
              name={speaker.n}
              role={speaker.r}
              index={i}
              image={speaker.img}
              description={`${speaker.n} is a leading innovator and mentor bringing expertise from ${speaker.r} to guide the next generation of creators and builders.`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
