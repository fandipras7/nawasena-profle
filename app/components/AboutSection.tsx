import React from "react";
import FadeIn from "./FadeIn";

/**
 * About section — revised layout (distinct from Hero)
 * - Centered header
 * - Value cards in a 3‑up row
 * - Split section: horizontal steps timeline (L) + founder note (R)
 * - Compact highlights ledger under it
 * - Removed "Trusted by" block per request
 */
interface AboutSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  values?: Array<{ label: string; detail: string }>; // core principles
  highlights?: Array<{ k: string; v: string }>; // quick stats
}

export default function AboutSection({
  eyebrow = "ABOUT",
  title = "We build calmly, ship reliably",
  description = "Nawasena is a small engineering studio focused on thoughtful web apps and back‑office tools. We obsess over the boring parts—accessibility, states, observability—so your team can move faster with fewer surprises.",
  values = [
    {
      label: "One Team",
      detail: "We embed with your squad and keep the bus factor high.",
    },
    {
      label: "One Passion",
      detail: "Care for craft, tests, docs, and developer experience.",
    },
    {
      label: "One Purpose",
      detail:
        "Ship outcomes that matter for the business—quietly and predictably.",
    },
  ],
  highlights = [
    { k: "Avg. lead time", v: "7–14 days" },
    { k: "Incidents Q3", v: "0 Sev‑1" },
    { k: "Core stack", v: "SvelteKit/Next • Nest • PG" },
  ],
}: AboutSectionProps) {
  return (
    <section id="about" className="relative w-full bg-white py-20 sm:py-24">
      {/* top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header: centered */}
        <FadeIn>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary-400" />{" "}
              {eyebrow}
            </div>
            <h2 className="mt-4 text-pretty text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-balance text-lg leading-8 text-gray-700 sm:text-xl">
              {description}
            </p>
          </div>
        </FadeIn>

        {/* Values: 3‑up cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {values.map((v, index) => (
            <FadeIn key={v.label} delay={index * 100} direction="up">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition-colors hover:border-secondary-300 hover:bg-white">
                <div className="text-sm font-semibold text-gray-900">
                  {v.label}
                </div>
                <p className="mt-1 text-sm text-gray-600">{v.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Split: horizontal steps + founder note */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Horizontal steps timeline */}
          <FadeIn direction="left" delay={100} className="md:col-span-7 lg:col-span-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-sm font-semibold text-gray-800">
                How we deliver
              </div>
              <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { t: "Discovery", d: "1–3d" },
                  { t: "Prototype", d: "3–5d" },
                  { t: "MVP", d: "1–2w" },
                  { t: "Handover", d: "docs & runbooks" },
                ].map((s, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                  >
                    <div className="text-sm font-medium text-gray-900">
                      {s.t}
                    </div>
                    <div className="text-xs text-gray-600">{s.d}</div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          {/* Founder note */}
          <FadeIn direction="right" delay={200} className="md:col-span-5 lg:col-span-4">
            <div className="rounded-2xl border border-primary-200 bg-primary-50 p-6">
              <div className="text-sm font-semibold text-primary-900">
                A note from the team
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                We prefer clear constraints, small PRs, and strong defaults.
                When we say "done", it means instrumented, documented, and
                deployed.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Highlights ledger (distinct visual) */}
        <FadeIn delay={300}>
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.k} className="">
                  <dt className="text-xs uppercase tracking-wide text-gray-500">
                    {h.k}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">
                    {h.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
