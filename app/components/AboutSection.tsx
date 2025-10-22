import React from "react";
import FadeIn from "./FadeIn";
import TechBackground from "./TechBackground";

interface AboutSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  cards?: Array<{ title: string; content: string }>;
}

export default function AboutSection({
  eyebrow = "ABOUT",
  title = "We build calmly, ship reliably",
  description = "Nawasena is a small engineering studio focused on thoughtful web apps and back-office tools. We obsess over the boring parts accessibility, states, observability so your team can move faster with fewer surprises.",
  cards = [
    {
      title: "Our Vision",
      content:
        "Providing innovative solutions and making complex business processes efficient.",
    },
    {
      title: "Our Mission",
      content:
        "To be a reliable technology partner that consistently meets client expectations. With our commitment and responsibility, we aim to always provide solutions to the technology challenges our clients face.",
    },
  ],
}: AboutSectionProps) {
  return (
    <section id="about" className="relative w-full bg-white py-20 sm:py-24">
      {/* hairline top rule */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      {/* Tech Background */}
      <TechBackground variant="about" intensity="low" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Sidebar kiri (sticky) */}
          <FadeIn>
            <aside className="md:col-span-5 lg:col-span-4 md:sticky md:top-24 self-start">
              {/* vertical eyebrow */}
              <div className="relative mb-6">
                <div className="absolute -left-6 top-0 h-full w-px bg-gray-200" />
                <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-primary-700 md:[writing-mode:vertical-rl] md:rotate-180 md:h-28 md:px-2 md:py-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary-400" />
                  {eyebrow}
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                {title}
              </h2>

              {/* underline accent */}
              <div className="mt-6 h-1 w-24 bg-linear-to-r from-secondary-300 via-secondary-400 to-transparent rounded-full" />
            </aside>
          </FadeIn>

          {/* Content kanan - description dan cards */}
          <div className="md:col-span-7 lg:col-span-8 md:col-start-6 lg:col-start-5">
            {/* DESCRIPTION */}
            <FadeIn delay={80}>
              <div className="mb-12">
                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed md:leading-loose">
                  {description}
                </p>
              </div>
            </FadeIn>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {cards.map((card, index) => (
                <FadeIn key={card.title} delay={index * 120} direction="up">
                  <article
                    className={[
                      index % 2 === 1 ? "sm:mt-10" : "",
                      "group rounded-2xl border border-gray-200 bg-gray-50 p-7 sm:p-8 transition-all duration-300 hover:border-primary-300 hover:bg-white hover:shadow-md relative overflow-hidden",
                    ].join(" ")}
                  >
                    <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-secondary-200/40 blur-2xl group-hover:bg-secondary-300/40 transition" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-7">{card.content}</p>
                    <span className="mt-6 block h-px w-16 bg-linear-to-r from-primary-300 to-transparent opacity-60 group-hover:opacity-100" />
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
