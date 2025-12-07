// components/ViewTrigger.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Utility to merge classes (optional but good practice for Next/Tailwind)
// If you don't have it, create lib/utils.ts:
// export function cn(...inputs) { return twMerge(clsx(inputs)); }
// and npm install clsx tailwind-merge

/**
 * Replicates the vanilla JS Intersection Observer logic from the original HTML.
 * It adds the 'view-active' class when the element enters the viewport.
 */
export default function ViewTrigger({ children, className }: { children: React.ReactNode, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            // Replicate the original margin/threshold
            rootMargin: '-10% 0px -10% 0px', 
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('view-active');
                    // Optionally, unobserve once active
                    // observer.unobserve(entry.target); 
                }
                // Optional: add logic to remove 'view-active' if leaving the view,
                // but the original HTML didn't do this.
            });
        }, observerOptions);

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup function for the observer
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    // We combine the original 'view-trigger' class with any custom classes
    return (
        <div ref={ref} className={cn('view-trigger', className)}>
            {children}
        </div>
    );
}