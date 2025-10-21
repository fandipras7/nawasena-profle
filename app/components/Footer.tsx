interface FooterProps {
  companyName?: string;
  companyDescription?: string;
}

export default function Footer({
  companyName = "PT. Nawasena Kreasi Teknologi",
  companyDescription = "Innovative, reliable, and human-centered tech solutions."
}: FooterProps) {
  const year = new Date().getFullYear();

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
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">{companyName}</h3>
            <p className="mt-3 text-primary-100 leading-relaxed">
              {companyDescription}
            </p>

            <div className="mt-4 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary-700 hover:bg-secondary-500 transition-colors"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links: Product */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-secondary-400">PRODUCT</h4>
            <ul className="mt-4 space-y-2">
              {links.product.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-primary-100 hover:text-white transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-secondary-400">COMPANY</h4>
            <ul className="mt-4 space-y-2">
              {links.company.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-primary-100 hover:text-white transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-primary-700" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-primary-200">© {year} {companyName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-primary-200 hover:text-white transition-colors">Privacy</a>
            <span className="text-primary-600">•</span>
            <a href="#" className="text-primary-200 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
