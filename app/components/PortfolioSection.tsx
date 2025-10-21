interface Project {
  title: string;
  tag: string;
  img: string;
  desc: string;
  link?: string;
}

interface PortfolioSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

export default function PortfolioSection({
  title = "Our Portfolio",
  subtitle = "A showcase of Nawasena's real projects and innovation in digital solutions",
  projects = [
    {
      title: "Cargo Reservation System",
      tag: "Web App",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      desc: "End-to-end cargo booking with schedule, pricing, and tracking.",
      link: "#contact",
    },
    {
      title: "Visitor Management",
      tag: "Web + Face Recognition",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      desc: "Secure check-in/out with face recognition and real-time logs.",
      link: "#contact",
    },
    {
      title: "Barcode Scanner",
      tag: "Android",
      img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
      desc: "Component tracking with robust offline scanning pipeline.",
      link: "#contact",
    },
    {
      title: "Logistics Fleet Ops",
      tag: "Android + Web",
      img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1200&auto=format&fit=crop",
      desc: "Smart matching between trucks & containers plus trip tracking.",
      link: "#contact",
    },
  ],
}: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="py-20 bg-white">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-primary-600 hover:text-white"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-full mb-3">
                  {project.tag}
                </span>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-primary-50 hover:bg-secondary-50 hover:text-secondary-700 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            View More Projects
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
    </section>
  );
}
