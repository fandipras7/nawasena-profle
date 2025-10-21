interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  teamMembers?: TeamMember[];
}

export default function TeamSection({
  title = "Meet Our Team",
  subtitle = "Experienced professionals dedicated to delivering exceptional results",
  teamMembers = [
    {
      name: "Nadiem Abdul Rasheed",
      position: "Chief Executive Officer",
      description:
        "Product-led CEO focusing on clarity of vision, operational excellence, and sustainable growth for clients and teams.",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328d13e8?q=80&w=1200&auto=format&fit=crop",
      skills: [
        "Business Strategy",
        "Go-To-Market",
        "Partnerships",
        "Leadership",
      ],
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Nita Septiani",
      position: "Chief Marketing Officer",
      description:
        "Data-driven marketer crafting brand narrative and measurable campaigns that convert across channels.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
      skills: ["Branding", "Growth Marketing", "Content Strategy", "Analytics"],
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Fandi Prasetyo",
      position: "Chief Technology Officer",
      description:
        "Hands-on CTO who scales front-to-back systems—clean UX, reliable APIs, and cloud infra that’s easy to operate.",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop",
      skills: ["SvelteKit/React", "NestJS/Postgres", "AWS ECS/ECR", "DevEx"],
      social: {
        linkedin: "#",
        github: "https://github.com/fandipras7",
        twitter: "#",
      },
    },
  ],
}: TeamSectionProps) {
  const SocialIcon = ({ platform }: { platform: string }) => {
    const icons = {
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      github: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    };
    return icons[platform as keyof typeof icons] || null;
  };

  return (
    <section id="team" className="py-20 bg-white">
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

        {/* Team Grid (3 orang) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Photo */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                {/* Social Overlay */}
                <div className="absolute bottom-4 left-0 right-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="p-2 bg-white/90 text-primary-700 hover:text-secondary-700 rounded-full hover:bg-white transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon platform={platform} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              We’re always looking for talented people who love solving real
              problems.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white hover:bg-secondary-50 hover:text-secondary-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
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
