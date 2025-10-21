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
  title = "Our Services",
  subtitle = "Comprehensive IT solutions tailored to your business needs",
  services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Content Management Systems",
      ],
      icon: "🌐",
      color: "primary",
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter Apps",
      ],
      icon: "📱",
      color: "green",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services to modernize your IT operations.",
      features: [
        "Cloud Migration",
        "AWS/Azure/GCP",
        "DevOps Implementation",
        "Monitoring & Security",
      ],
      icon: "☁️",
      color: "purple",
    },
    {
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with advanced analytics and visualization tools.",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Predictive Analytics",
        "Big Data Processing",
      ],
      icon: "📊",
      color: "orange",
    },
    // {
    //   title: "Cybersecurity",
    //   description:
    //     "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    //   features: [
    //     "Security Audits",
    //     "Penetration Testing",
    //     "Compliance Management",
    //     "Incident Response",
    //   ],
    //   icon: "🔐",
    //   color: "red",
    // },
    {
      title: "IT Consulting",
      description:
        "Strategic technology consulting to align IT initiatives with your business objectives.",
      features: [
        "Digital Transformation",
        "Technology Strategy",
        "System Integration",
        "Process Optimization",
      ],
      icon: "💼",
      color: "indigo",
    },
    // NEW: Kids Coding Classes
    {
      title: "Kids Coding Classes",
      description:
        "Fun, project-based programming classes for children to build logic, creativity, and confidence.",
      features: [
        "Scratch & Block Coding",
        "Intro to JavaScript",
        "STEM Mini Projects",
        "Safe & Engaging Curriculum",
      ],
      icon: "🎒",
      color: "gold",
    },
  ],
}: ServicesSectionProps) {
  // Tailwind-native color map (pakai token primary & secondary)
  const getColorClasses = (color: string) => {
    const colorMap = {
      primary:
        "bg-primary-50 text-primary-600 border-primary-200 hover:bg-primary-100",
      gold: "bg-secondary-50 text-secondary-600 border-secondary-200 hover:bg-secondary-100",
      blue: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100",
      green: "bg-green-50 text-green-600 border-green-200 hover:bg-green-100",
      purple:
        "bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100",
      orange:
        "bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100",
      red: "bg-red-50 text-red-600 border-red-200 hover:bg-red-100",
      indigo:
        "bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100",
    } as const;
    return colorMap[(color as keyof typeof colorMap) ?? "primary"];
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Service Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 border-2 transition-all duration-300 ${getColorClasses(service.color)}`}
              >
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <svg
                      className="w-4 h-4 text-primary-600 mr-3 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary-600 hover:text-secondary-600 font-medium transition-colors duration-200"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
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
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your
              technology goals and drive business growth.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Free Consultation
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
          </div>
        </div>
      </div>
    </section>
  );
}
