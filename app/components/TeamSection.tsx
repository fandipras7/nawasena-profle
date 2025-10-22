import React from "react";
import FadeIn from "./FadeIn";
import TechBackground from "./TechBackground";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  teamMembers?: TeamMember[];
}

export default function TeamSection({
  title = "People who ship the work",
  subtitle = "Small, senior, and nice to work with.",
  teamMembers = [
    {
      name: "Nadiem Abdul Rasheed",
      position: "Chief Executive Officer",
      description:
        "Product-led CEO focusing on clarity of vision and sustainable growth.",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop",
      skills: ["Business Strategy", "GTM", "Partnerships", "Leadership"],
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Nita Septiani",
      position: "Chief Marketing Officer",
      description:
        "Data-driven marketer crafting narrative and measurable campaigns.",
      image: "/nita_fp.png",
      skills: ["Branding", "Growth", "Content", "Analytics"],
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Fandi Prasetyo",
      position: "Chief Technology Officer",
      description:
        "Hands-on CTO scaling UX, reliable APIs, and pragmatic cloud infra.",
      image: "/fandi_fp.jpeg",
      skills: ["SvelteKit/React", "NestJS/Postgres", "AWS ECS/ECR", "DevEx"],
      social: { linkedin: "#", github: "https://github.com/fandipras7", twitter: "#" },
    },
  ],
}: TeamSectionProps) {
  const SocialIcon = ({ platform }: { platform: string }) => {
    const icons = {
      linkedin: (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      github: (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      twitter: (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    } as const;
    return icons[platform as keyof typeof icons] ?? null;
  };

  return (
    <section id="team" className="relative w-full bg-white py-20 sm:py-24">
      {/* hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-200 to-transparent" />

      {/* Tech Background */}
      <TechBackground variant="services" intensity="high" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header (ringkas) */}
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-pretty text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 text-base sm:text-lg leading-relaxed text-gray-700">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Grid kompak: auto-fit kartu kecil */}
        <FadeIn delay={150}>
          <div
            className="mt-8 grid gap-5 sm:gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
          >
            {teamMembers.map((m, i) => {
              const extraCount = Math.max(0, m.skills.length - 3);
              return (
                <FadeIn key={m.name} delay={200 + i * 80} direction="up">
                  <article className="group relative rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">
                    {/* left rail + top accent on hover */}
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-gray-100 transition-all duration-300 group-hover:bg-primary-200" />
                    <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary-300 transition-all duration-300 group-hover:w-full" />

                    {/* header: avatar kecil + texts */}
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-lg ring-1 ring-gray-200 transition-all duration-300 group-hover:ring-primary-300 group-hover:h-16 group-hover:w-16">
                        <img
                          src={m.image}
                          alt={m.name}
                          className="h-full w-full object-contain transition-all duration-300 group-hover:scale-125"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-gray-900">
                          {m.name}
                        </h3>
                        <p className="truncate text-[12px] font-medium text-primary-700">
                          {m.position}
                        </p>
                      </div>
                    </div>

                    {/* desc singkat */}
                    <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-gray-700">
                      {m.description}
                    </p>

                    {/* skills: badge mini (max 3) + “+N” */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {m.skills.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="rounded bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-800 ring-1 ring-inset ring-gray-200"
                        >
                          {s}
                        </span>
                      ))}
                      {extraCount > 0 && (
                        <span className="rounded bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">
                          +{extraCount}
                        </span>
                      )}
                    </div>

                    {/* socials kecil (kanan bawah) */}
                    <div className="mt-3 flex items-center gap-2">
                      {Object.entries(m.social).map(([platform, url]) =>
                        url ? (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-1.5 text-gray-700 transition-colors hover:text-secondary-700"
                            aria-label={platform}
                            title={platform}
                          >
                            <SocialIcon platform={platform} />
                          </a>
                        ) : null
                      )}
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>

        {/* CTA ringan (opsional) */}
        <FadeIn delay={450}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              Contact the team
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
