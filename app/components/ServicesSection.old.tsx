import React from "react";
import FadeIn from "./FadeIn";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string; // "primary" | "gold" | "blue" | "green" | ...
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

export default function ServicesSection({
  title = "Services, shaped for outcomes",
  subtitle = "We prefer surgical scopes, short cycles, and measurable impact.",
  services = [
    {
      title: "Web Development",
      description:
        "Custom web apps with accessible UI, strong states, and clean data flows.",
      features: [
        "Responsive by default",
        "SSR/ISR where it matters",
        "Auth + roles",
        "CMS or headless",
      ],
      icon: "🌐",
      color: "primary",
    },
    {
      title: "Mobile Development",
      description:
        "Pragmatic native or cross‑platform builds focused on core journeys.",
      features: ["iOS/Android", "React Native", "Offline first", "Store ops"],
      icon: "📱",
      color: "green",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable infra with sensible observability, security, and costs.",
      features: ["ECS/Fargate", "CI/CD", "Monitoring", "IaC"],
      icon: "☁️",
      color: "purple",
    },
    {
      title: "Data Analytics",
      description:
        "From raw to readable: pipelines, metrics, and decision‑ready dashboards.",
      features: ["BI setup", "dbt/ELT", "Dashboards", "Forecasts"],
      icon: "📊",
      color: "orange",
    },
    {
      title: "IT Consulting",
      description:
        "Strategy, audits, and roadmaps that balance delivery and risk.",
      features: [
        "Tech due‑diligence",
        "Architecture",
        "Team enablement",
        "Playbooks",
      ],
      icon: "💼",
      color: "indigo",
    },
    {
      title: "Kids Coding Classes",
      description:
        "Project‑based classes to build logic, creativity, and confidence.",
      features: [
        "Scratch basics",
        "Intro JS",
        "STEM mini‑projects",
        "Safe, fun lessons",
      ],
      icon: "🎒",
      color: "gold",
    },
  ],
}: ServicesSectionProps) {

  const colorClasses = (c: string) => {
    const map = {
      primary: {
        badge: "bg-primary-50 text-primary-700 ring-primary-200",
        border: "border-primary-200",
        hover: "hover:bg-primary-50",
        dot: "bg-primary-600",
        link: "text-primary-700 hover:text-secondary-600",
      },
      gold: {
        badge: "bg-secondary-50 text-secondary-700 ring-secondary-200",
        border: "border-secondary-200",
        hover: "hover:bg-secondary-50",
        dot: "bg-secondary-500",
        link: "text-secondary-700 hover:text-secondary-600",
      },
      blue: {
        badge: "bg-blue-50 text-blue-700 ring-blue-200",
        border: "border-blue-200",
        hover: "hover:bg-blue-50",
        dot: "bg-blue-600",
        link: "text-blue-700 hover:text-blue-600",
      },
      green: {
        badge: "bg-green-50 text-green-700 ring-green-200",
        border: "border-green-200",
        hover: "hover:bg-green-50",
        dot: "bg-green-600",
        link: "text-green-700 hover:text-green-600",
      },
      purple: {
        badge: "bg-purple-50 text-purple-700 ring-purple-200",
        border: "border-purple-200",
        hover: "hover:bg-purple-50",
        dot: "bg-purple-600",
        link: "text-purple-700 hover:text-purple-600",
      },
      orange: {
        badge: "bg-orange-50 text-orange-700 ring-orange-200",
        border: "border-orange-200",
        hover: "hover:bg-orange-50",
        dot: "bg-orange-600",
        link: "text-orange-700 hover:text-orange-600",
      },
      red: {
        badge: "bg-red-50 text-red-700 ring-red-200",
        border: "border-red-200",
        hover: "hover:bg-red-50",
        dot: "bg-red-600",
        link: "text-red-700 hover:text-red-600",
      },
      indigo: {
        badge: "bg-indigo-50 text-indigo-700 ring-indigo-200",
        border: "border-indigo-200",
        hover: "hover:bg-indigo-50",
        dot: "bg-indigo-600",
        link: "text-indigo-700 hover:text-indigo-600",
      },
    } as const;
    return map[(c as keyof typeof map) ?? "primary"];
  };

  const activeService = useMemo(
    () => services.find((s) => s.title === active) ?? services[0],
    [services, active]
  );

  return (
    <section id="services" className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white py-20 sm:py-24">
      {/* Simplified background animation */}
      <style>{`
        @keyframes spin-slow { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        @keyframes float { 
          0%, 100% { transform: translateY(0px) scale(1); } 
          50% { transform: translateY(-10px) scale(1.05); } 
        }
      `}</style>
      
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Rotating gradient */}
        <div
          className="absolute left-1/3 top-1/4 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5"
          style={{
            background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, transparent)",
            animation: "spin-slow 40s linear infinite",
          }}
        />
        
        {/* Floating elements */}
        <div 
          className="absolute right-1/4 top-1/3 h-16 w-16 opacity-10 rounded-full"
          style={{ 
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            animation: "float 12s ease-in-out infinite",
          }} 
        />
        <div 
          className="absolute left-1/5 bottom-1/4 h-12 w-12 opacity-8 rounded-full"
          style={{ 
            background: "linear-gradient(135deg, #06b6d4, #10b981)",
            animation: "float 15s ease-in-out infinite reverse",
          }} 
        />
      </div>

      {/* hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header: centered, simplified */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-pretty text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">{subtitle}</p>
          </div>
        </FadeIn>

        {/* Layout: Sidebar list (sticky) + Detail panel */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Sidebar */}
          <FadeIn direction="left" delay={100} className="md:col-span-5 lg:col-span-4">
            <aside>
              <div className="sticky top-24 space-y-3">
                {services.map((s, index) => {
                  const c = colorClasses(s.color);
                  const isActive = active === s.title;
                  return (
                    <FadeIn key={s.title} delay={index * 50} direction="up">
                      <button
                        onClick={() => setActive(s.title)}
                        className={`group w-full rounded-xl border p-4 text-left transition-colors ${
                          isActive
                            ? `${c.border} bg-white shadow-sm`
                            : `border-gray-200 ${c.hover}`
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-1 size-2.5 shrink-0 rounded-full ${c.dot}`}
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{s.icon}</span>
                              <h3 className="text-base font-semibold text-gray-900">
                                {s.title}
                              </h3>
                            </div>
                            <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                              {s.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    </FadeIn>
                  );
                })}
              </div>
            </aside>
          </FadeIn>

          {/* Detail panel */}
          <FadeIn direction="right" delay={200} className="md:col-span-7 lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              {/* accent ribbon */}
              <div className="absolute -top-1 left-0 h-1 w-40 bg-secondary-400" />

              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="grow">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
                    <span>Selected service</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-2xl">{activeService.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {activeService.title}
                    </h3>
                  </div>
                  <p className="mt-2 max-w-2xl text-gray-700">
                    {activeService.description}
                  </p>

                  {/* features */}
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {activeService.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-gray-800"
                      >
                        <svg
                          className="mt-0.5 size-4 text-primary-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="#contact"
                      className="rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:translate-y-[-2px] hover:bg-primary-800"
                    >
                      Discuss this scope
                    </a>
                    <a
                      href="#portfolio"
                      className="text-sm font-semibold text-gray-800 underline-offset-4 hover:underline"
                    >
                      See similar work
                    </a>
                  </div>
                </div>

                {/* vignette card */}
                <div className="min-w-[260px] max-w-sm shrink-0 rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="text-sm font-semibold text-gray-800">
                    Typical deliverables
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>• Scope doc & acceptance</li>
                    <li>• UI flows & empty states</li>
                    <li>• CI/CD + envs</li>
                    <li>• Observability hooks</li>
                  </ul>
                  <div className="mt-4 rounded-lg bg-white p-3 text-xs text-gray-700 ring-1 ring-gray-200">
                    <div className="font-semibold text-gray-900">
                      Example API
                    </div>
                    <pre className="mt-1 overflow-x-auto">
                      {`POST /v1/${activeService.title.toLowerCase().replace(/\s/g, "-")}/estimate\nHost: api.nawasena.dev\nX-Signature: hmac-sha256...`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Process strip */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
              <div className="mb-2 text-sm font-semibold text-gray-800">
                Our process
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {["Scope", "Design", "Build", "Deploy"].map((s, i) => (
                  <div
                    key={s}
                    className="rounded-lg bg-gray-50 p-3 text-center text-sm font-medium text-gray-700"
                  >
                    {i + 1}. {s}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA band */}
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-6 text-white">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="text-lg font-semibold">
                    Have a specific brief?
                  </div>
                  <p className="text-primary-100">
                    Send context, constraints, and a timeline — we’ll reply with
                    a path and estimate.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-900 hover:bg-primary-50"
                >
                  Get a quick estimate
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
