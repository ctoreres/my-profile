import React from 'react';

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
    <div className="w-full mt-16 lg:mt-24">
      <h3 className="text-3xl font-bold text-text-secondary mb-10 text-center">
        Technical Arsenal
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="group relative bg-bg-secondary rounded-2xl p-6 flex items-center justify-center border border-border-subtle/20 hover:border-accent-blue/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/10 cursor-default"
          >
            {/* Subtle background glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 via-accent-blue/0 to-accent-blue/0 group-hover:from-accent-blue/10 group-hover:to-transparent transition-colors duration-500 rounded-2xl" />
            
            {/* Minimalist dot indicator */}
            <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-border-subtle group-hover:bg-accent-green transition-colors duration-300" />
            
            <span className="relative text-lg md:text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors duration-300 text-center">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
