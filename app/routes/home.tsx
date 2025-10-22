import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import SEO, { companyStructuredData } from "../components/SEO";
import PerformanceMonitor from "../components/PerformanceMonitor";
import HeroSection from "~/components/HeroSection";
import ConnectedBackground from "~/components/ConnectedBackground";

export function meta() {
  return [
    { title: "IPT. Nawasena Kreasi Teknologi - Innovative Technology Solutions" },
    { name: "description", content: "Leading provider of innovative IT solutions including web development, mobile apps, cloud services, and digital transformation." },
    { name: "keywords", content: "IT solutions, web development, mobile development, cloud services, digital transformation, software development" },
    { name: "author", content: "IPT. Nawasena Kreasi Teknologi" },
    { property: "og:title", content: "IPT. Nawasena Kreasi Teknologi - Innovative Technology Solutions" },
    { property: "og:description", content: "Leading provider of innovative IT solutions including web development, mobile apps, cloud services, and digital transformation." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "IPT. Nawasena Kreasi Teknologi - Innovative Technology Solutions" },
    { name: "twitter:description", content: "Leading provider of innovative IT solutions including web development, mobile apps, cloud services, and digital transformation." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <SEO structuredData={companyStructuredData} />
      <PerformanceMonitor />
      
      {/* Connected background animation */}
      <ConnectedBackground />
      
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
