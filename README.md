# Company Profile - PT. Nawasena Kreasi Teknologi

## 📋 Deskripsi

Company Profile modern dan responsive untuk perusahaan IT Solutions yang dibangun dengan React Router v7, TypeScript, dan Tailwind CSS. Website ini dirancang dengan fokus pada performance, SEO, dan user experience yang optimal.

## ✨ Fitur Utama

### 🎨 Design & UI/UX
- **Responsive Design** - Optimized untuk semua device (mobile, tablet, desktop)
- **Modern UI Components** - Clean dan professional design
- **Smooth Animations** - Micro-interactions yang smooth dengan reduced motion support
- **Dark/Light Mode Support** - Auto-detect berdasarkan system preference

### ⚡ Performance Optimizations
- **Lazy Loading** - Components dan images dimuat sesuai kebutuhan
- **Code Splitting** - Automatic bundling optimization dengan Vite
- **Image Optimization** - Lazy loading images dengan placeholder
- **Bundle Optimization** - Tree shaking dan minification
- **Caching Strategy** - Service Worker untuk offline support

### 🔍 SEO & Accessibility
- **Meta Tags** - Comprehensive SEO meta tags
- **Structured Data** - JSON-LD schema markup
- **Open Graph** - Social media optimization
- **Sitemap.xml** - Search engine indexing
- **Robots.txt** - Search engine directives
- **Accessibility** - WCAG compliance dengan proper ARIA labels

### 📱 PWA Support
- **Installable** - Dapat di-install sebagai native app
- **Offline Support** - Service Worker untuk caching
- **Manifest.json** - PWA configuration
- **Cross-platform** - Berjalan di semua platform

## 🏗️ Struktur Website

### 1. Hero Section
- Company branding dan value proposition
- Call-to-action buttons
- Key statistics dan achievements
- Background dengan subtle animations

### 2. About Section
- Company overview dan mission/vision
- Core values dengan iconography
- Company statistics dan milestones
- Feature highlights

### 3. Services Section
- Comprehensive service offerings:
  - Web Development (React, Vue, Angular)
  - Mobile Development (React Native, Flutter)
  - Cloud Solutions (AWS, Azure, GCP)
  - Data Analytics & BI
  - Cybersecurity
  - IT Consulting
- Interactive service cards dengan hover effects
- Feature lists untuk setiap service

### 4. Portfolio Section
- Project showcase dengan filtering
- Technology stack untuk setiap project
- Project categories (Web, Mobile, Cloud, etc.)
- Interactive galleries dengan lightbox

### 5. Team Section
- Team member profiles
- Skills dan expertise
- Social media links
- Team statistics dan achievements

### 6. Contact Section
- Contact form dengan validation
- Contact information
- Office location dan working hours
- Social media integration
- Map integration (ready to implement)

### 7. Footer
- Comprehensive sitemap
- Newsletter subscription
- Social media links
- Legal information
- Back to top functionality

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React dengan concurrent features
- **React Router v7** - File-based routing dan SSR
- **TypeScript** - Type safety dan better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Lightning fast build tool

### Performance & SEO
- **Intersection Observer API** - Lazy loading implementation
- **Web Vitals** - Core performance monitoring
- **Service Worker** - PWA dan caching
- **Critical CSS** - Above-the-fold optimization

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Tailwind IntelliSense** - CSS autocompletion

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation
```bash
# Clone repository
git clone <repository-url>
cd company-profile

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run typecheck    # Run TypeScript checks
npm run lint         # Run ESLint
npm run format       # Format code dengan Prettier
```

## 📁 Struktur Project

```
company-profile/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── LazyLoad.tsx     # Lazy loading wrapper
│   │   ├── LazyImage.tsx    # Optimized image component
│   │   └── SEO.tsx          # SEO meta management
│   ├── routes/
│   │   └── home.tsx         # Main page route
│   ├── app.css              # Global styles
│   ├── root.tsx             # Root layout
│   └── routes.ts            # Route configuration
├── public/
│   ├── favicon.ico
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # SEO directives
│   ├── sitemap.xml          # Search engine sitemap
│   ├── sw.js                # Service worker
│   └── .htaccess            # Apache server config
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### 1. Content Updates
Semua content dapat di-update melalui props di setiap component:

```tsx
// Update company information
<Header companyName="Your Company Name" />
<HeroSection 
  title="Your Title" 
  subtitle="Your Subtitle"
  description="Your Description"
/>
```

### 2. Styling Customization
Tailwind CSS memungkinkan customization yang mudah:

```css
/* app/app.css */
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### 3. Component Extension
Setiap component dirancang modular dan extensible:

```tsx
// Extend existing components
import { ServicesSection } from './components/ServicesSection';

const CustomServices = () => {
  const customServices = [
    // Your custom services
  ];
  
  return <ServicesSection services={customServices} />;
};
```

## 📊 Performance Optimizations

### Lighthouse Score Targets
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

### Implemented Optimizations
1. **Image Optimization**
   - Lazy loading dengan Intersection Observer
   - Responsive images dengan srcset
   - WebP format support
   - Proper alt texts untuk accessibility

2. **Code Splitting**
   - Route-based code splitting
   - Component lazy loading
   - Dynamic imports untuk heavy components

3. **Caching Strategy**
   - Service Worker dengan cache-first strategy
   - Static asset caching
   - API response caching

4. **Bundle Optimization**
   - Tree shaking untuk unused code
   - Minification dan compression
   - Critical CSS inlining

## 🔧 Configuration

### Environment Variables
```env
VITE_API_URL=your-api-url
VITE_CONTACT_EMAIL=your-email
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
```

### Tailwind Configuration
```js
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        secondary: '#your-secondary-color',
      }
    }
  }
}
```

## 📱 PWA Setup

### Icon Requirements
Buat icon dalam ukuran berikut dan tempatkan di `public/icons/`:
- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)
- `apple-touch-icon.png` (180x180px)

### Service Worker
Service worker sudah dikonfigurasi untuk:
- Caching static assets
- Offline functionality
- Background sync untuk forms

## 🔍 SEO Configuration

### Meta Tags
- Title tags yang descriptive
- Meta descriptions yang engaging
- Open Graph tags untuk social sharing
- Twitter Card metadata
- Canonical URLs

### Structured Data
JSON-LD schema markup untuk:
- Organization information
- Services offered
- Contact information
- Business address

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload build folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload build folder to your hosting provider
```

## 📈 Analytics & Monitoring

### Google Analytics
```tsx
// Add to app/root.tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      // Google Analytics code
    `,
  }}
/>
```

### Performance Monitoring
```tsx
// Built-in performance monitoring
window.addEventListener('load', () => {
  const perfData = performance.getEntriesByType('navigation')[0];
  console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart);
});
```

## 🔧 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear cache dan reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **TypeScript Errors**
   ```bash
   # Run type checking
   npm run typecheck
   ```

3. **Styling Issues**
   ```bash
   # Rebuild Tailwind
   npm run dev
   ```

## 📞 Support

Untuk pertanyaan atau issue:
1. Check dokumentasi ini
2. Buka GitHub Issues
3. Contact: hello@itsolutions.com

## 📄 License

MIT License - silakan digunakan untuk project komersial maupun personal.

---

## 🎯 Next Steps untuk Customization

1. **Update Content**: Ganti semua placeholder content dengan data perusahaan Anda
2. **Add Icons**: Buat dan upload icon PWA sesuai brand Anda
3. **Customize Colors**: Update color scheme di Tailwind config
4. **Add Images**: Replace stock images dengan foto asli perusahaan
5. **Configure Analytics**: Setup Google Analytics dan monitoring
6. **Domain Setup**: Deploy ke domain perusahaan Anda
7. **SEO Updates**: Update semua SEO metadata dengan informasi yang akurat

Selamat menggunakan! 🚀!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
