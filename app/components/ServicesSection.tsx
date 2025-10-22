import React from "react";
import FadeIn from "./FadeIn";
import TechBackground from "./TechBackground";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
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
      features: ["Responsive", "SSR/ISR", "Auth + roles", "Headless CMS"],
      icon: "🌐",
      color: "primary",
    },
    {
      title: "Mobile Development",
      description:
        "Pragmatic native or cross-platform builds focused on core journeys.",
      features: ["iOS/Android", "React Native", "Offline first"],
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
        "From raw to readable: pipelines, metrics, and decision-ready dashboards.",
      features: ["BI setup", "dbt/ELT", "Dashboards"],
      icon: "📊",
      color: "orange",
    },
    {
      title: "IT Consulting",
      description:
        "Strategy, audits, and roadmaps that balance delivery and risk.",
      features: ["Due diligence", "Architecture", "Enablement"],
      icon: "💼",
      color: "indigo",
    },
    {
      title: "Kids Coding Classes",
      description:
        "Project-based classes to build logic, creativity, and confidence.",
      features: ["Scratch", "Intro JS", "Mini STEM"],
      icon: "🎒",
      color: "gold",
    },
  ],
}: ServicesSectionProps) {
  const colorClasses = (c: string) => {
    const map = {
      primary: { dot: "bg-primary-600", text: "text-primary-700" },
      gold: { dot: "bg-secondary-500", text: "text-secondary-700" },
      blue: { dot: "bg-blue-600", text: "text-blue-700" },
      green: { dot: "bg-green-600", text: "text-green-700" },
      purple: { dot: "bg-purple-600", text: "text-purple-700" },
      orange: { dot: "bg-orange-600", text: "text-orange-700" },
      red: { dot: "bg-red-600", text: "text-red-700" },
      indigo: { dot: "bg-indigo-600", text: "text-indigo-700" },
    } as const;
    return map[(c as keyof typeof map) ?? "primary"];
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white py-20 sm:py-24"
    >
      {/* Tech Background */}
      <TechBackground variant="services" intensity="medium" />

      {/* thin top border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-pretty text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">{subtitle}</p>
          </div>
        </FadeIn>

        {/* Simplified & compact grid */}
        <div className="mt-14">
          <div
            className="grid gap-5 sm:gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {services.map((service, index) => {
              const c = colorClasses(service.color);
              return (
                <FadeIn key={service.title} delay={index * 100} direction="up">
                  <article className="group relative rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary-200 hover:bg-white hover:shadow-sm hover:-translate-y-0.5">
                    {/* subtle left bar */}
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-gray-100 transition-all duration-300 group-hover:bg-primary-200" />

                    {/* content */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50">
                        <span className="text-lg">{service.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className={`inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] text-gray-700`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${c.dot}`}
                              />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* top accent */}
                    <span
                      className={`absolute top-0 left-0 h-[2px] w-0 ${c.dot} transition-all duration-300 group-hover:w-full`}
                    />
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Simple CTA */}
        <FadeIn delay={500}>
          <div className="mt-14 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800 hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <a
              href="#portfolio"
              className="ml-4 inline-flex items-center justify-center px-2 text-sm font-medium text-gray-800 underline underline-offset-4 hover:text-gray-900"
            >
              View our work
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
