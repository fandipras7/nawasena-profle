import { useEffect, useState } from 'react';

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
}

export default function Footer({
  companyName = "PT. Nawasena Kreasi Teknologi",
  companyDescription = "Innovative, reliable, and human-centered tech solutions."
}: FooterProps) {
  // Use client-side state to avoid hydration mismatch
  const [year, setYear] = useState(2024);
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const links = {
    product: [
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "About", href: "#about" },
    ],
    company: [
      { name: "Team", href: "#team" },
      { name: "Contact", href: "#contact" },
      { name: "Privacy", href: "#" },
    ],
  };

  const socials = [
    { name: "LinkedIn", href: "#", svg: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59z" clipRule="evenodd"/></svg>
    )},
    { name: "GitHub", href: "https://github.com/fandipras7", svg: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/></svg>
    )},
    { name: "X", href: "#", svg: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M12.6 3H15l-3.3 3.7L16 17h-3l-2.7-6.1L6 17H3.6l3.6-4.1L4 3h3l2.4 5.4L12.6 3z"/></svg>
    )},
  ];

  return (
    <footer className="relative bg-primary-800 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(240,180,41,0.05),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(53,91,166,0.1),transparent)] pointer-events-none" />
      
      {/* Top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-600 to-transparent" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="relative">
            <h3 className="text-xl font-bold text-white">{companyName}</h3>
            <div className="mt-2 h-px w-16 bg-linear-to-r from-secondary-400 to-transparent" />
            <p className="mt-4 text-primary-100/90 leading-relaxed text-sm max-w-sm">
              {companyDescription}
            </p>

            <div className="mt-4 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="group relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-700/60 backdrop-blur-sm hover:bg-secondary-500 transition-all duration-300 border border-primary-600/40 hover:border-secondary-400/60 hover:shadow-lg hover:shadow-secondary-500/20"
                >
                  <span className="relative z-10 transition-transform group-hover:scale-110">
                    {s.svg}
                  </span>
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-xl bg-linear-to-br from-secondary-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Links: Product */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-secondary-400 mb-1">PRODUCT</h4>
            <div className="h-px w-8 bg-linear-to-r from-secondary-400 to-transparent mb-3" />
            <ul className="mt-4 space-y-3">
              {links.product.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-primary-100/90 hover:text-white transition-colors duration-200 text-sm relative group">
                    <span className="relative z-10">{l.name}</span>
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-secondary-400 transition-all duration-200 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-secondary-400 mb-1">COMPANY</h4>
            <div className="h-px w-8 bg-linear-to-r from-secondary-400 to-transparent mb-3" />
            <ul className="mt-4 space-y-3">
              {links.company.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-primary-100/90 hover:text-white transition-colors duration-200 text-sm relative group">
                    <span className="relative z-10">{l.name}</span>
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-secondary-400 transition-all duration-200 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="mt-10 relative">
          <div className="absolute inset-0 h-px bg-linear-to-r from-transparent via-primary-600 to-transparent" />
          <div className="absolute left-1/2 top-0 h-px w-32 bg-linear-to-r from-transparent via-secondary-400/40 to-transparent transform -translate-x-1/2" />
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-primary-200/80">© {year} {companyName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-primary-200/80 hover:text-white transition-colors duration-200 hover:underline underline-offset-4">Privacy</a>
            <span className="text-primary-600/60">•</span>
            <a href="#" className="text-primary-200/80 hover:text-white transition-colors duration-200 hover:underline underline-offset-4">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
