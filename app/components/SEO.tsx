import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  structuredData?: object;
}

export default function SEO({
  title = "PT. Nawasena Kreasi Teknologi - Innovative Technology Solutions",
  description = "Leading provider of innovative IT solutions including web development, mobile apps, cloud services, and digital transformation.",
  keywords = "IT solutions, web development, mobile development, cloud services, digital transformation, software development",
  author = "PT. Nawasena Kreasi Teknologi",
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg",
  ogUrl,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonical,
  structuredData
}: SEOProps) {

  useEffect(() => {
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);
    
    if (ogUrl) {
      updateMetaTag('og:url', ogUrl, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', twitterTitle || title);
    updateMetaTag('twitter:description', twitterDescription || description);
    updateMetaTag('twitter:image', twitterImage || ogImage);

    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.rel = 'canonical';
        document.head.appendChild(linkElement);
      }
      linkElement.href = canonical;
    }

    // Structured Data
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!scriptElement) {
        scriptElement = document.createElement('script') as HTMLScriptElement;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }

    // Update document title
    document.title = title;

  }, [title, description, keywords, author, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, twitterTitle, twitterDescription, twitterImage, canonical, structuredData]);

  return null;
}

// Predefined structured data for company
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PT. Nawasena Kreasi Teknologi",
  "description": "Leading provider of innovative IT solutions including web development, mobile apps, cloud services, and digital transformation.",
  "url": "https://www.itsolutions.com",
  "logo": "https://www.itsolutions.com/logo.png",
  "foundingDate": "2018",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Street",
    "addressLocality": "Digital City",
    "addressRegion": "DC",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "hello@itsolutions.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/itsolutions",
    "https://twitter.com/itsolutions",
    "https://github.com/itsolutions"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Web Development",
      "description": "Custom web applications built with modern technologies"
    },
    {
      "@type": "Service", 
      "name": "Mobile Development",
      "description": "Native and cross-platform mobile applications"
    },
    {
      "@type": "Service",
      "name": "Cloud Solutions", 
      "description": "Scalable cloud infrastructure and migration services"
    }
  ]
};
