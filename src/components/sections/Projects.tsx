import React from 'react';
import ProjectCard from '@/components/ui/ProjectCard';

const PROJECTS_DATA = [
  {
    title: 'Financial Fraud Detection System',
    tags: ['Machine Learning', 'Data Science', 'Python'],
    description: 'Real-time risk assessment pipeline analyzing a 6.3M transaction dataset. Achieved 94% recall and 95% accuracy using Logistic Regression with balanced class weights.',
    videoSrc: '/videos/fraud-detection.mp4',
    linkUrl: 'https://github.com/ctoreres', 
  },
  {
    title: 'Student Performance Predictor',
    tags: ['Machine Learning', 'Full-Stack Web', 'Next.js'],
    description: 'Automated data ingestion and hyperparameter tuning pipeline evaluating 7+ models (including XGBoost and CatBoost) to attain an 88.04% R² score, integrated into a Next.js frontend.',
    videoSrc: '/videos/performance-predictor.mp4',
    linkUrl: 'https://github.com/ctoreres',
  },
  {
    title: 'Hexnode | DSA Visualizer',
    tags: ['Web Development', 'Algorithms', 'React'],
    description: 'Interactive tool featuring a recursive state-generation engine. Visualizes complex Tree Traversals and Dynamic Programming with synchronized real-time pseudocode tracking.',
    videoSrc: '/videos/hexnode.mp4',
    linkUrl: 'https://github.com/ctoreres',
  },
  {
    title: 'LogistIQ | Full-Stack Platform',
    tags: ['Database Architecture'],
    description: 'Managed the complete lifecycle of a full-stack logistics application. Engineered synthetic datasets and established a robust relational database architecture.',
    videoSrc: '/videos/logistiq.mp4',
    linkUrl: 'https://github.com/ctoreres',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-text-secondary mb-16 text-center">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
