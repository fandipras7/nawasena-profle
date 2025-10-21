import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
}

export default function LazyLoad({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "100px",
  placeholder
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setHasLoaded(true);
          // Small delay to ensure smooth animation
          requestAnimationFrame(() => {
            setTimeout(() => {
              setIsVisible(true);
            }, 150);
          });
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div 
      ref={elementRef} 
      className={`lazy-container ${hasLoaded ? 'loaded' : ''} ${className}`}
    >
      {hasLoaded ? (
        <div className={`lazy-content ${isVisible ? 'lazy-visible' : ''}`}>
          {children}
        </div>
      ) : (
        <div className="w-full h-96 bg-transparent">
          {/* Placeholder untuk mencegah layout shift */}
        </div>
      )}
    </div>
  );
}
