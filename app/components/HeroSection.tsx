import React from "react";
import FadeIn from "./FadeIn";
import TechBackground from "./TechBackground";

interface HeroSectionProps {
  title?: string;
  highlight?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * HeroSection — Centered layout with video-like animated background
 * - Centered: headline, description, CTAs
 * - Background: multiple animated layers creating video-like loop effect
 * - Includes: rotating gradients, morphing shapes, sliding elements, pulsing overlays
 */
export default function HeroSection({
  title = "We design and build",
  highlight = "useful software",
  description = "We partner with founders and teams to ship purposeful web apps and back‑office tools.",
  primaryLabel = "Start a project",
  primaryHref = "#contact",
  secondaryLabel = "See our work",
  secondaryHref = "#portfolio",
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-b from-white to-gray-50"
    >
      {/* Tech Background */}
      <TechBackground variant="hero" intensity="medium" />
      
      {/* Floating Geometric Objects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute w-8 h-8 rounded-full bg-primary-300/40 animate-float-slow shadow-lg" 
             style={{ left: '8%', top: '18%', animationDelay: '0s', animationDuration: '10s' }} />
        <div className="absolute w-12 h-12 rounded-full bg-blue-300/35 animate-float-bounce shadow-md" 
             style={{ right: '12%', top: '12%', animationDelay: '2s', animationDuration: '8s' }} />
        <div className="absolute w-6 h-6 rounded-full bg-primary-400/45 animate-float-slow shadow-md" 
             style={{ left: '18%', bottom: '22%', animationDelay: '4s', animationDuration: '14s' }} />
        <div className="absolute w-5 h-5 rounded-full bg-blue-200/50 animate-float-bounce shadow-sm" 
             style={{ right: '35%', bottom: '15%', animationDelay: '6s', animationDuration: '10s' }} />
        
        {/* Floating Squares */}
        <div className="absolute w-10 h-10 bg-primary-300/30 rotate-45 animate-float-rotate shadow-lg" 
             style={{ right: '22%', top: '28%', animationDelay: '1s', animationDuration: '16s' }} />
        <div className="absolute w-7 h-7 bg-blue-400/25 rotate-12 animate-float-slow shadow-md" 
             style={{ left: '12%', top: '58%', animationDelay: '3s', animationDuration: '13s' }} />
        <div className="absolute w-6 h-6 bg-primary-200/35 rotate-45 animate-float-bounce shadow-sm" 
             style={{ right: '40%', top: '45%', animationDelay: '7s', animationDuration: '9s' }} />
        
        {/* Floating Triangles */}
        <div className="absolute w-0 h-0 animate-float-slow drop-shadow-md" 
             style={{ 
               right: '18%', 
               bottom: '18%', 
               borderLeft: '12px solid transparent',
               borderRight: '12px solid transparent', 
               borderBottom: '18px solid rgba(59, 130, 246, 0.25)',
               animationDelay: '5s',
               animationDuration: '9s'
             }} />
        <div className="absolute w-0 h-0 animate-float-slow drop-shadow-sm" 
             style={{ 
               left: '22%', 
               top: '38%', 
               borderLeft: '10px solid transparent',
               borderRight: '10px solid transparent', 
               borderBottom: '15px solid rgba(99, 102, 241, 0.3)',
               animationDelay: '1.5s',
               animationDuration: '11s'
             }} />
        <div className="absolute w-0 h-0 animate-float-slow drop-shadow-sm" 
             style={{ 
               right: '45%', 
               top: '25%', 
               borderLeft: '8px solid transparent',
               borderRight: '8px solid transparent', 
               borderBottom: '12px solid rgba(59, 130, 246, 0.35)',
               animationDelay: '8s',
               animationDuration: '13s'
             }} />
        
        {/* Floating Hexagons (CSS shapes) */}
        <div className="absolute w-8 h-8 animate-float-slow" 
             style={{ 
               left: '30%', 
               top: '65%',
               background: 'rgba(59, 130, 246, 0.2)',
               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
               animationDelay: '2.5s',
               animationDuration: '12s'
             }} />
        <div className="absolute w-6 h-6 animate-float-slow shadow-sm" 
             style={{ 
               right: '28%', 
               bottom: '35%',
               background: 'rgba(99, 102, 241, 0.25)',
               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
               animationDelay: '6.5s',
               animationDuration: '14s'
             }} />
      </div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <FadeIn>
          <h1 className="text-pretty text-4xl font-bold leading-[1.1] text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            {title} <span className="text-primary-800">{highlight}</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={120}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700 sm:text-xl">
            {description}
          </p>
        </FadeIn>

        <FadeIn delay={240}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-primary-700 px-8 py-4 text-base font-semibold text-white shadow-sm ring-1 ring-primary-800/10 transition-colors hover:bg-primary-800"
            >
              {primaryLabel}
            </a>
            {secondaryLabel && (
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center px-2 text-base font-medium text-gray-800 underline underline-offset-4 hover:text-gray-900"
              >
                {secondaryLabel}
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
