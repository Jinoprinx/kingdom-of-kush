// components/HeroCta.tsx
import React from 'react';

// The Path element for the Arrow in the button
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
    </svg>
);

export default function HeroCta() {
    return (
        // The original HTML had a containing <section> and <div> wrappers, 
        // which we include here for exact class replication.
        <section className="relative overflow-hidden pt-32 pb-40 bg-gray-900" 
            style={{ backgroundImage: "url('/placeholder-hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-6 border border-white/20">
                        A New Beginning
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-playfair">
                        It's time to come home.
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        The Kingdom of Kush is not just a place; it is a promise. A promise of sovereignty, dignity, and prosperity for the global African family.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <a href="#invest" className="group inline-flex items-center space-x-3 bg-[#0a0a0a] text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl">
                            <span className="text-[#C5A059]">Apply for Citizenship</span>
                            <ArrowIcon />
                        </a>
                        <a href="mailto:welcome@kingdomofkush.org" className="group inline-flex items-center space-x-3 text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                            <span>Contact an Ambassador</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}