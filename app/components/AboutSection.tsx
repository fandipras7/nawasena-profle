interface AboutSectionProps {
  title?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export default function AboutSection({
  title = "About Our Company",
  description = "In our company, there are three values that we hold in high regard. One Team which means strong team unity, One Passion which means we promise to always be passionate in innovating, and One Purpose which is the combination of both values, where the unity and passion we have will help us reach our goal—delivering the best results.",
  features = [
    {
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.",
      icon: "💡",
    },
    {
      title: "Expert Team",
      description:
        "Our certified professionals bring years of experience across various technologies and industries.",
      icon: "👥",
    },
    {
      title: "Quality Assurance",
      description:
        "We follow rigorous testing and quality control processes to ensure reliable and robust solutions.",
      icon: "✅",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock technical support to keep your systems running smoothly at all times.",
      icon: "🛠️",
    },
  ],
}: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="mb-6">
            <div className="text-xl sm:text-2xl font-semibold text-primary-600 mb-2 tracking-wide">
              ONE TEAM • ONE PASSION • ONE PURPOSE
            </div>
            <div className="w-24 h-1 bg-secondary-400 mx-auto rounded-full" />
          </div>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 border border-transparent hover:bg-primary-50 hover:border-primary-100 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">99%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Technology Partners</div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h3>
            <div className="w-24 h-1 bg-secondary-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold">Our Vision</h4>
                </div>
                <p className="text-primary-100 leading-relaxed text-lg">
                  To provide innovative solutions and make complex business
                  processes efficient.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative bg-white border-2 border-primary-200 rounded-2xl p-8 overflow-hidden hover:border-secondary-400 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-50 rounded-full -ml-12 -mb-12" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become a reliable technology platform that always meets
                  client expectations. Moreover, with the commitment and
                  responsibility we have, we want to always be able to provide
                  solutions to the technology problems our clients face.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
