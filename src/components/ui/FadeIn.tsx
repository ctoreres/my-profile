"use client";

import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  let translateClass = '';
  if (!isVisible) {
    switch (direction) {
      case 'up':
        translateClass = 'translate-y-12';
        break;
      case 'down':
        translateClass = '-translate-y-12';
        break;
      case 'left':
        translateClass = 'translate-x-12';
        break;
      case 'right':
        translateClass = '-translate-x-12';
        break;
      default:
        translateClass = '';
    }
  } else {
    translateClass = 'translate-y-0 translate-x-0';
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${translateClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
