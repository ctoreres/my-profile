import React from 'react';
import FadeIn from '@/components/ui/FadeIn';

const SKILLS = [
  'Scikit-learn',
  'Python',
  'SQL',
  'TypeScript',
  'JavaScript',
  'HTML/CSS',
  'React.js',
  'Flask'
];

export default function TechStack() {
  return (
    <section id="techstack" className="w-full py-20 bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-text-secondary mb-12 text-center">
            Technical Arsenal
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {SKILLS.map((skill, index) => (
            <FadeIn key={skill} delay={index * 100}>
              <div
                className="group h-full relative bg-bg-secondary rounded-xl p-4 flex items-center justify-center border border-border-subtle/20 hover:border-accent-blue/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/10 cursor-default"
              >
                {/* Subtle background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 via-accent-blue/0 to-accent-blue/0 group-hover:from-accent-blue/10 group-hover:to-transparent transition-colors duration-500 rounded-xl" />
                
                {/* Minimalist dot indicator */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-border-subtle group-hover:bg-accent-green transition-colors duration-300" />
                
                <span className="relative text-base md:text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors duration-300 text-center">
                  {skill}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
