import React from 'react';

// Declare GSAP on window since we are loading via CDN
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    TextPlugin: any;
  }
}

// Kept empty interfaces for potential future use or type safety in component arrays
export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  avatar: string;
}