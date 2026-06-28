"use client";

import React, { useRef } from 'react';

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  videoSrc: string;
  linkUrl: string;
}

export default function ProjectCard({ title, tags, description, videoSrc, linkUrl }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay policies or missing videos gracefully
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      // Optional: reset video to start
      // videoRef.current.currentTime = 0; 
    }
  };

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group bg-bg-secondary rounded-2xl p-6 shadow-md border border-border-subtle/20 hover:shadow-xl hover:-translate-y-1 hover:border-accent-blue/50 transition-all duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-video bg-border-subtle/20 rounded-xl mb-6 overflow-hidden relative border border-border-subtle/10 flex items-center justify-center">
        {/* Placeholder text shown if video doesn't load/exist */}
        <span className="absolute text-border-subtle/50 font-medium z-0">
          Video Preview
        </span>
        
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative z-10"
        />
        <div className="absolute inset-0 bg-bg-primary/20 group-hover:bg-bg-primary/0 transition-colors duration-300 pointer-events-none z-20" />
      </div>
      
      <h3 className="text-2xl font-bold text-text-secondary mb-3 group-hover:text-accent-blue transition-colors duration-300">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold px-2 py-1 bg-accent-blue/10 text-accent-blue rounded-md border border-accent-blue/20"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-text-primary leading-relaxed">
        {description}
      </p>
    </a>
  );
}
