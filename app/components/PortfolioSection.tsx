import React, { useMemo, useState } from "react";
import FadeIn from "./FadeIn";
import TechBackground from "./TechBackground";

interface Project {
  title: string;
  tag: string; // "Web App", "Android", etc.
  img: string;
  desc: string;
  link?: string;
}

interface PortfolioSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
  partners?: { name: string; logo: string; href?: string }[];
}

export default function PortfolioSection({
  title = "Selected work",
  subtitle = "Quietly opinionated builds. Tangible outcomes. No fluff.",
  projects = [
    {
      title: "Cargo Reservation System",
      tag: "Web App",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      desc: "End-to-end cargo booking with schedule, pricing, and tracking.",
      link: "#contact",
    },
    {
      title: "Visitor Management",
      tag: "Web + Face Recognition",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      desc: "Secure check-in/out with face recognition and real-time logs.",
      link: "#contact",
    },
    {
      title: "Barcode Scanner",
      tag: "Android",
      img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
      desc: "Component tracking with robust offline scanning pipeline.",
      link: "#contact",
    },
    {
      title: "Logistics Fleet Ops",
      tag: "Android + Web",
      img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1200&auto=format&fit=crop",
      desc: "Smart matching between trucks & containers plus trip tracking.",
      link: "#contact",
    },
  ],
  partners = [
    { name: "Acme", logo: "https://dummyimage.com/160x48/111/fff&text=ACME", href: "#" },
    { name: "Globex", logo: "https://dummyimage.com/160x48/111/fff&text=GLOBEX", href: "#" },
    { name: "Umbrella", logo: "https://dummyimage.com/160x48/111/fff&text=UMBRELLA", href: "#" },
    { name: "Initech", logo: "https://dummyimage.com/160x48/111/fff&text=INITECH", href: "#" },
    { name: "Soylent", logo: "https://dummyimage.com/160x48/111/fff&text=SOYLENT", href: "#" },
    { name: "Stark", logo: "https://dummyimage.com/160x48/111/fff&text=STARK", href: "#" },
  ],
}: PortfolioSectionProps) {
  const tags = useMemo(() => {
    const all = Array.from(new Set(projects.map((p) => p.tag)));
    return ["All", ...all];
  }, [projects]);

  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.tag === active)),
    [projects, active]
  );

  return (
    <section id="portfolio" className="relative w-full bg-white py-20 sm:py-24">
      {/* hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-200 to-transparent" />

      {/* Tech Background */}
      <TechBackground variant="portfolio" intensity="medium" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header + filters compact */}
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-pretty text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
              <p className="mt-2 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-700">
                {subtitle}
              </p>
            </div>

            {/* Filters — pills kecil */}
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                    active === t
                      ? "border-primary-300 bg-primary-50 text-primary-800"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid simpel (tanpa featured jumbo) */}
        <FadeIn delay={150}>
          <div
            className="mt-8 grid gap-5 sm:gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          >
            {filtered.map((p, idx) => (
              <FadeIn key={p.title} delay={200 + idx * 80} direction="up">
                <a
                  href={p.link ?? "#"}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/0" />
                  </div>

                  <div className="p-4">
                    <span className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-gray-800 ring-1 ring-inset ring-gray-200">
                      {p.tag}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold text-gray-900">{p.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-gray-600">{p.desc}</p>
                  </div>

                  {/* top accent on hover */}
                  <span className="absolute left-0 top-0 h-0.5 w-0 bg-primary-300 transition-all duration-300 group-hover:w-full" />
                </a>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Horizontal running partner (creative marquee) */}
        <FadeIn delay={300}>
          <div className="mt-14">
            <div className="mb-6 text-center">
              <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Trusted by partners
              </div>
            </div>

            {/* marquee wrapper with gradient mask edges */}
            <div
              className="relative overflow-hidden py-2"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <style>{`
                @keyframes marquee-scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .marquee-track {
                  animation: marquee-scroll 25s linear infinite;
                  width: fit-content;
                }
                .marquee-track:hover {
                  animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                  .marquee-track { 
                    animation: none !important; 
                    transform: none !important;
                  }
                }
              `}</style>

              {/* infinite loop container */}
              <div className="marquee-track flex items-center gap-16 py-4">
                {/* First set */}
                {partners.map((partner, idx) => (
                  <a
                    key={`${partner.name}-set1`}
                    href={partner.href ?? "#"}
                    className="group flex shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={partner.name}
                    title={partner.name}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      className="h-10 w-auto max-w-[140px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 sm:h-12"
                    />
                  </a>
                ))}
                
                {/* Second set (duplicate for seamless loop) */}
                {partners.map((partner, idx) => (
                  <a
                    key={`${partner.name}-set2`}
                    href={partner.href ?? "#"}
                    className="group flex shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={partner.name}
                    title={partner.name}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      className="h-10 w-auto max-w-[140px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 sm:h-12"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Optional CTA ringan */}
        <FadeIn delay={450}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <a
              href="#portfolio"
              className="ml-4 inline-flex items-center justify-center px-2 text-sm font-medium text-gray-800 underline underline-offset-4 hover:text-gray-900"
            >
              View more
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
