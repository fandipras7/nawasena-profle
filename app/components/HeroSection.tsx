interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroSection({
  title = "Digital Solutions",
  subtitle = "for Your Business",
  description = "We provide the best website-based systems and mobile applications for your company. With an experienced and creative developer team, we ensure continuous innovation and keep pace with technological developments.",
  ctaText = "Get Started",
  ctaLink = "#contact",
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-primary-50 via-white to-primary-100"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23132447' fill-opacity='0.10'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8 mt-5">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">{title}</span>
                <span className="block text-primary-600">{subtitle}</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {ctaText}
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white hover:bg-secondary-50 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-primary-200 hover:border-secondary-400"
              >
                Learn More
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">
                30+
              </div>
              <div className="text-sm lg:text-base text-gray-600 mt-1">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">
                10+
              </div>
              <div className="text-sm lg:text-base text-gray-600 mt-1">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">
                3+
              </div>
              <div className="text-sm lg:text-base text-gray-600 mt-1">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <a
          href="#about"
          className="text-primary-300 hover:text-secondary-400 transition-colors"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
