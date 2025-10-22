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
        dot: "bg-primary-600",
        link: "text-primary-700 hover:text-primary-800",
      },
      gold: {
        dot: "bg-secondary-500",
        link: "text-secondary-700 hover:text-secondary-800",
      },
      blue: {
        dot: "bg-blue-600",
        link: "text-blue-700 hover:text-blue-800",
      },
      green: {
        dot: "bg-green-600",
        link: "text-green-700 hover:text-green-800",
      },
      purple: {
        dot: "bg-purple-600",
        link: "text-purple-700 hover:text-purple-800",
      },
      orange: {
        dot: "bg-orange-600",
        link: "text-orange-700 hover:text-orange-800",
      },
      red: {
        dot: "bg-red-600",
        link: "text-red-700 hover:text-red-800",
      },
      indigo: {
        dot: "bg-indigo-600",
        link: "text-indigo-700 hover:text-indigo-800",
      },
    } as const;
    return map[(c as keyof typeof map) ?? "primary"];
  };

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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-200 to-transparent" />

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

        {/* Services Grid - Simplified */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const c = colorClasses(service.color);
              return (
                <FadeIn key={service.title} delay={index * 100} direction="up">
                  <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Accent border */}
                    <div className={`absolute top-0 left-0 h-1 w-full ${c.dot}`} />
                    
                    {/* Service content */}
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <a
                      href="#contact"
                      className={`inline-flex items-center text-sm font-medium ${c.link} hover:underline`}
                    >
                      Learn more →
                    </a>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Simple CTA section */}
        <FadeIn delay={600}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 text-sm text-gray-600 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new projects
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-primary-800 hover:-translate-y-0.5"
              >
                Start a project
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-2 text-base font-medium text-gray-800 underline underline-offset-4 hover:text-gray-900"
              >
                View our work
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
