import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "100px",
  delay = 0
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          // Use requestAnimationFrame for smoother timing
          requestAnimationFrame(() => {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
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
  }, [threshold, rootMargin, delay, hasTriggered]);

  return (
    <div 
      ref={elementRef} 
      className={`scroll-reveal-container ${className}`}
    >
      <div 
        className={`scroll-reveal-content ${isVisible ? 'scroll-revealed' : 'scroll-hidden'}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible 
            ? 'translateY(0px) scale(1)' 
            : 'translateY(30px) scale(0.99)',
          transition: 'opacity 1s ease-out, transform 1s cubic-bezier(0.23, 1, 0.32, 1)',
          willChange: 'transform, opacity',
          transitionDelay: isVisible ? `${delay}ms` : '0ms'
        }}
      >
        {children}
      </div>
    </div>
  );
}
