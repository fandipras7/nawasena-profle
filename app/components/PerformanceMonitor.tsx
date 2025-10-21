import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as any;
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any;
          console.log('CLS:', clsEntry.value);
        }
      });
    });

    // Observe different metrics
    if ('PerformanceObserver' in window) {
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.warn('Some performance metrics not supported');
      }
    }

    // Page load performance
    window.addEventListener('load', () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const metrics = {
          'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
          'TCP Connection': navigation.connectEnd - navigation.connectStart,
          'Server Response': navigation.responseStart - navigation.requestStart,
          'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.fetchStart,
          'Page Load Complete': navigation.loadEventEnd - navigation.fetchStart,
        };

        console.table(metrics);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
