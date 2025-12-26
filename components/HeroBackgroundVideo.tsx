// app/components/HeroBackgroundVideo.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const video = videoRef.current;
      if (!video || video.hasAttribute('data-loaded')) return;

      const rect = video.getBoundingClientRect();
      // Load when video is within ~1 screen height above viewport
      const isVisible = rect.top < window.innerHeight * 1.5 && rect.bottom >= -window.innerHeight * 0.5;

      if (isVisible) {
        const source = video.querySelector('source');
        if (source && !source.src) {
          source.src = '/videos/herovid.mp4';
          video.load(); // Triggers actual fetch
          video.setAttribute('data-loaded', 'true');
        }
      }
    };

    // Initial check (in case hero is already in view on load)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Solid fallback background while video loads or fails */}
      <div className="absolute inset-0 bg-[#F9F9F7]" aria-hidden="true"></div>

      {/* Optimized, lazy-loaded video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        style={{ pointerEvents: 'none' }}
      >
        {/* Empty src initially — set dynamically via JS */}
        <source type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}