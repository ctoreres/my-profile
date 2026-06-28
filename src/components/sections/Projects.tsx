"use client";

import React, { useState } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import FadeIn from '@/components/ui/FadeIn';

const PROJECTS_DATA = [
  {
    title: 'Dragonfly',
    tags: ['AI', 'Web Development', 'TypeScript'],
    description: 'List out the materials and errors from your uploaded circuit schematic diagram.',
    videoSrc: '/videos/fraud-detection.mp4',
    linkUrl: 'https://dragonfly-rose.vercel.app/', 
  },
  {
    title: 'Financial Fraud Detection System',
    tags: ['Machine Learning', 'Data Science', 'Python'],
    description: 'Risk assessment pipeline analyzing transaction dataset and predict whether its a fraud or not.',
    videoSrc: '/videos/fraud-detection.mp4',
    linkUrl: 'https://ctoreres-fraud-detection.hf.space/', 
  },
  {
    title: 'LogistIQ',
    tags: ['Database Architecture', 'SQL'],
    description: 'Engineered synthetic datasets and established a robust relational database architecture for a full-stack logistic project.',
    videoSrc: '/videos/logistiq.mp4',
    linkUrl: 'https://github.com/ctoreres',
  }, 
  {
    title: 'Hexnode',
    tags: ['Web Development', 'Algorithms', 'React'],
    description: 'Interactive tool that allows users to visualize different Data Structure and Algorithms.',
    videoSrc: '/videos/hexnode.mp4',
    linkUrl: 'https://hexnode-gamma.vercel.app/',
  },
  {
    title: 'Student Performance Predictor',
    tags: ['Machine Learning', 'Full-Stack Web', 'Next.js'],
    description: 'A ML project that predicts the mathematical exam score of a student.',
    videoSrc: '/videos/performance-predictor.mp4',
    linkUrl: 'https://performance-predictor-tau.vercel.app/',
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 3;
  
  const displayedProjects = showAll ? PROJECTS_DATA : PROJECTS_DATA.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-bg-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-text-secondary mb-16 text-center">
            Featured Projects
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {displayedProjects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
        
        {PROJECTS_DATA.length > INITIAL_COUNT && (
          <FadeIn delay={300}>
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-4 bg-transparent border-2 border-accent-blue text-accent-blue rounded-full font-bold text-lg hover:bg-accent-blue hover:text-bg-primary transition-all duration-300 shadow-md"
              >
                {showAll ? 'Show Less' : 'See Other Projects'}
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
