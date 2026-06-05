import * as React from "react";

interface SponsorCardProps {
  name: string;
  category: string;
  index: number;
  image?: string;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: () => void;
}

export function SponsorCard({
  name,
  category,
  index,
  image,
  onMouseMove,
  onMouseLeave,
}: SponsorCardProps) {
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const [imageError, setImageError] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setOffset({
      x: x * 20,
      y: y * 20,
    });

    onMouseMove?.(e);
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    onMouseLeave?.();
  };

  const gradients = [
    "from-[oklch(0.78_0.2_40)] to-[oklch(0.65_0.22_15)]",
    "from-[oklch(0.7_0.2_320)] to-[oklch(0.55_0.2_290)]",
    "from-[oklch(0.82_0.16_55)] to-[oklch(0.7_0.21_25)]",
    "from-[oklch(0.75_0.18_350)] to-[oklch(0.6_0.2_320)]",
    "from-[oklch(0.7_0.18_15)] to-[oklch(0.5_0.18_350)]",
    "from-[oklch(0.8_0.14_45)] to-[oklch(0.65_0.2_10)]",
    "from-[oklch(0.72_0.18_300)] to-[oklch(0.5_0.16_270)]",
    "from-[oklch(0.85_0.13_60)] to-[oklch(0.7_0.2_30)]",
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl bg-white/65 border border-white/80 p-6 hover:-translate-y-1 hover:bg-white/85 transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col items-center justify-center text-center min-h-[160px]"
      style={{
        transform: `perspective(1000px) rotateX(${offset.y * 0.5}deg) rotateY(${offset.x * -0.5}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Background glow that follows mouse */}
      <div
        className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`}
        style={{
          transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)`,
        }}
      />

      {/* Logo placeholder with gradient or image */}
      {image && !imageError ? (
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-xl object-contain shadow-glow mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300"
          style={{
            transform: `translate(${offset.x * 0.4}px, ${offset.y * 0.4}px)`,
            transition: "transform 0.1s ease-out",
          }}
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className={`h-16 w-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-display font-bold text-xl shadow-glow mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300`}
          style={{
            transform: `translate(${offset.x * 0.4}px, ${offset.y * 0.4}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {name[0]}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <h4 className="font-display font-semibold text-base text-foreground group-hover:text-coral transition-colors">
          {name}
        </h4>
        <p className="text-xs text-foreground/60 mt-1 font-mono uppercase tracking-widest">
          ✿ {category}
        </p>
      </div>

      {/* Accent line that follows mouse */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          transform: `translateX(${offset.x * 0.2}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
}

interface SponsorsSectionProps {
  sponsors: Array<{ n: string; cat: string; img?: string }>;
}

export function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-max">
      {sponsors.map((sponsor, idx) => (
        <div
          key={sponsor.n}
          className="animate-slide-up"
          style={{
            animationDelay: `${idx * 0.08}s`,
          }}
        >
          <SponsorCard
            name={sponsor.n}
            category={sponsor.cat}
            index={idx}
            image={sponsor.img}
          />
        </div>
      ))}
    </div>
  );
}
