import React, { useMemo, useState } from "react";
import FadeIn from "./FadeIn";

interface Project {
  title: string;
  tag: string; // e.g. "Web App", "Android", "Web + Face Recognition"
  img: string;
  desc: string;
  link?: string;
}

interface PortfolioSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

export default function PortfolioSection({
  title = "Selected work",
  subtitle = "A few calm, outcome‑first builds. No glossy vaporware.",
  projects = [
    {
      title: "Cargo Reservation System",
      tag: "Web App",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      desc: "End‑to‑end cargo booking with schedule, pricing, and tracking.",
      link: "#contact",
    },
    {
      title: "Visitor Management",
      tag: "Web + Face Recognition",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      desc: "Secure check‑in/out with face recognition and real‑time logs.",
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
}: PortfolioSectionProps) {
  const tags = useMemo(() => {
    const all = Array.from(new Set(projects.map((p) => p.tag)));
    return ["All", ...all];
  }, [projects]);

  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () =>
      active === "All" ? projects : projects.filter((p) => p.tag === active),
    [projects, active]
  );

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section id="portfolio" className="relative w-full bg-white py-20 sm:py-24">
      {/* hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-pretty text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-2 max-w-2xl text-lg leading-8 text-gray-700">
                {subtitle}
              </p>
            </div>
            {/* filters */}
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
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

        {/* Featured + Grid */}
        <FadeIn delay={200}>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Featured card spans 7 cols on md+ */}
            {featured && (
              <a
                href={featured.link ?? "#"}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 md:col-span-7"
              >
                <div className="relative h-72 w-full overflow-hidden sm:h-full">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/0" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-800 ring-1 ring-inset ring-white/60 backdrop-blur">
                    {featured.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
                    {featured.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-white/80">
                    {featured.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-semibold text-secondary-300">
                    View case study
                    <svg
                      className="ml-1 size-4 transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m0 0-6-6m6 6-6 6"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            )}

            {/* Right column: stacked cards */}
            <div className="md:col-span-5">
              <div className="grid grid-cols-1 gap-6">
                {rest.slice(0, 3).map((p, index) => (
                  <FadeIn key={p.title} delay={400 + index * 150}>
                    <a
                      href={p.link ?? "#"}
                      className="group relative overflow-hidden rounded-2xl border border-gray-200"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/0" />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-800 ring-1 ring-inset ring-white/60 backdrop-blur">
                          {p.tag}
                        </span>
                        <h3 className="mt-2 text-base font-semibold text-white">
                          {p.title}
                        </h3>
                        <p className="mt-0.5 line-clamp-2 text-xs text-white/80">
                          {p.desc}
                        </p>
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* List view (remaining) */}
        {rest.length > 3 && (
          <FadeIn delay={800}>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rest.slice(3).map((p, index) => (
                <FadeIn key={p.title} delay={900 + index * 100}>
                  <a
                    href={p.link ?? "#"}
                    className="group rounded-xl border border-gray-200 bg-white p-4 transition-all hover:shadow-sm"
                  >
                    <div className="relative h-40 w-full overflow-hidden rounded-lg">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-black/0" />
                    </div>
                    <div className="mt-3">
                      <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-semibold text-primary-800 ring-1 ring-inset ring-primary-200">
                        {p.tag}
                      </span>
                      <h4 className="mt-1 text-sm font-semibold text-gray-900">
                        {p.title}
                      </h4>
                      <p className="line-clamp-2 text-sm text-gray-600">{p.desc}</p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        )}

        {/* CTA band */}
        <FadeIn delay={1000}>
          <div className="mt-10 rounded-2xl bg-linear-to-br from-primary-600 to-primary-700 p-6 text-white">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="text-lg font-semibold">Want a deeper dive?</div>
                <p className="text-primary-100">
                  We can share private walk‑throughs under NDA: architecture,
                  trade‑offs, and runbooks.
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-900 hover:bg-primary-50"
              >
                Request a case study
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
