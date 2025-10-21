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
  rootMargin = "50px",
  placeholder
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
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
    <div ref={elementRef} className={className}>
      {isVisible ? (
        <div className="fade-in visible">
          {children}
        </div>
      ) : (
        placeholder || (
          <div className="min-h-96 bg-gray-100 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        )
      )}
    </div>
  );
}
