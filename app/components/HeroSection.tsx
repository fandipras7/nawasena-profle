import React from "react";
import FadeIn from "./FadeIn";

/**
 * Bespoke, non-generic hero
 * - Left-aligned, editorial layout
 * - Subtle navy spotlight + grain (no cheesy blobs)
 * - Gold underline accent (secondary)
 * - Trust strip + tiny, real-feeling details
 * - Minimal props so text stays human-written
 */

interface HeroSectionProps {
  eyebrow?: string;
  title?: string;
  highlight?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function HeroSection({
  eyebrow = "NAWASENA STUDIO",
  title = "We design and build",
  highlight = "useful software",
  description = "We partner with founders and teams to ship purposeful web apps and back‑office tools. Small, sharp, and allergic to buzzwords.",
  ctaText = "Start a project",
  ctaLink = "#contact",
  secondaryCtaText = "See our work",
  secondaryCtaLink = "#portfolio",
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[86vh] w-full overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* --- Background: spotlight + grain + hairline --- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* navy spotlight */}
        <div className="absolute -top-40 right-[-20%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(closest-side,theme(colors.primary.100),transparent_70%)] opacity-70 blur-2xl" />
        {/* soft grid using masks (very subtle) */}
        <div
          className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #0b1b2b0d 0px, #0b1b2b0d 1px, transparent 1px, transparent 24px), repeating-linear-gradient(0deg, #0b1b2b0d 0px, #0b1b2b0d 1px, transparent 1px, transparent 24px)",
          }}
        />
        {/* top hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
        {/* grain */}
        <div
          className="absolute inset-0 mix-blend-multiply opacity-[0.05]"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.35"/></svg>\')',
          }}
        />
      </div>

      <div className="container relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-20 pt-28 md:grid-cols-12 md:pb-28 md:pt-36">
        {/* Left: words (keep it human) */}
        <div className="md:col-span-7 lg:col-span-7 xl:col-span-7">
          <FadeIn direction="up" delay={100}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary-400" />{" "}
              {eyebrow}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <h1 className="mt-5 text-pretty text-4xl font-semibold leading-[1.1] text-gray-900 sm:text-5xl lg:text-6xl">
              {title}{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-[1] bg-gradient-to-b from-secondary-500/0 via-secondary-500/0 to-secondary-500/15 px-1">
                  {highlight}
                </span>
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-10 rounded-full bg-secondary-400 md:w-16"
                  aria-hidden
                />
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-gray-700 sm:text-xl">
              {description}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={400}>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href={ctaLink}
                className="group inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-primary-800/20 transition-all hover:translate-y-[-2px] hover:bg-primary-800 hover:shadow-md active:translate-y-0"
              >
                {ctaText}
                <svg
                  className="ml-2 size-5 transition-transform group-hover:translate-x-0.5"
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
              </a>
              <a
                href={secondaryCtaLink}
                className="inline-flex items-center justify-center rounded-full border border-primary-300 bg-white px-6 py-3 text-base font-semibold text-primary-800 transition-all hover:border-secondary-300 hover:text-secondary-700"
              >
                {secondaryCtaText}
              </a>
            </div>
          </FadeIn>

          {/* trust strip */}
          <FadeIn direction="up" delay={500}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-2.5 py-1 font-medium text-primary-800 ring-1 ring-inset ring-primary-200">
                <span className="size-2 rounded-full bg-green-500" /> 99.9% uptime
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <span>Shipped for fintech, logistics, and SMEs</span>
              <div className="h-4 w-px bg-gray-300" />
              <ul className="flex items-center gap-4 opacity-80">
                {["/logo1.svg", "/logo2.svg", "/logo3.svg"].map((src, i) => (
                  <li
                    key={i}
                    className="h-6 w-20 rounded bg-gray-100 [background:linear-gradient(90deg,#e5e7eb,#f3f4f6)]"
                    aria-hidden
                  />
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Right: product vignette (stacked cards) */}
        <div className="md:col-span-5 lg:col-span-5 xl:col-span-5">
          <FadeIn direction="right" delay={600}>
            <div className="relative mx-auto max-w-md">
              {/* floating badge */}
              <div className="absolute -top-6 right-2 z-10 select-none rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-primary-800 shadow-sm backdrop-blur">
                Built in Indonesia 🇮🇩
              </div>

              {/* card stack */}
              <div className="group relative">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary-200/50 via-transparent to-secondary-300/40 blur-xl"
                aria-hidden
              />

              <div className="relative space-y-4">
                {/* top card */}
                <div className="transform rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-800">
                      Daily Metrics
                    </div>
                    <div className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                      Live
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { k: "Deploys", v: "3" },
                      { k: "Errors", v: "0" },
                      { k: "Latency", v: "112ms" },
                    ].map((m) => (
                      <div key={m.k} className="rounded-lg bg-gray-50 p-3">
                        <div className="text-xs text-gray-500">{m.k}</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {m.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* middle card */}
                <div className="transform rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-800">
                      Back‑office UI
                    </div>
                    <div
                      className="size-2 rounded-full bg-secondary-400"
                      aria-hidden
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Approvals", "Payouts", "Rate Plans", "Audit Log"].map(
                      (f) => (
                        <div
                          key={f}
                          className="rounded-md border border-gray-200 bg-white p-2.5 text-sm text-gray-700"
                        >
                          {f}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* base card */}
                <div className="transform rounded-2xl border border-primary-200 bg-primary-50 p-5 shadow-inner transition-transform duration-300 group-hover:-translate-y-1.5">
                  <div className="mb-2 text-sm font-semibold text-primary-900">
                    API request
                  </div>
                  <pre className="overflow-x-auto rounded-lg bg-white/70 p-3 text-xs text-gray-800">
                    {`POST /v1/payouts HTTP/1.1\nHost: api.nawasena.dev\nX-Signature: hmac-sha256...\n\n{\n  \"amount\": 250000,\n  \"currency\": \"IDR\"\n}`}
                  </pre>
                </div>
              </div>
            </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* scroll hint */}
      <FadeIn direction="fade" delay={800}>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary-700/80 hover:text-primary-900"
          >
            Scroll
            <svg
              className="size-4 transition-transform group-hover:translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m0 0-5-5m5 5 5-5"
              />
            </svg>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
