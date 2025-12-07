// components/Footer.tsx
import React from 'react';

// Icons converted to React components (using the original SVG paths)
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

export default function Footer() {
    return (
        // The animation classes 'view-trigger' will be handled by the wrapper component
        <footer className="bg-kushBlack border-[#222] border-t pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- Main Footer Content --- */}
                {/* The 'view-transition' class will be added via the wrapper for animation */}
                <div> 
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                        {/* Logo and Description */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#D80000] to-[#800000] rounded flex items-center justify-center">
                                    <span className="text-white font-playfair font-bold text-lg">K</span>
                                </div>
                                <span className="text-lg font-bold text-white font-playfair">Kingdom of <span className="text-[#C5A059]">Kush</span></span>
                            </div>
                            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                                Establishing a modern, sustainable, and sovereign nation for the African diaspora. A center for trade, culture, and innovation.
                            </p>
                            {/* Social Links */}
                            <div className="flex items-center space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#D80000] hover:bg-white/10 transition-all duration-200">
                                    <FacebookIcon />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#D80000] hover:bg-white/10 transition-all duration-200">
                                    <InstagramIcon />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#D80000] hover:bg-white/10 transition-all duration-200">
                                    <TwitterIcon />
                                </a>
                            </div>
                        </div>

                        {/* Governance */}
                        <div className="">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 text-[#C5A059]">Governance</h4>
                            <ul className="space-y-4 text-sm">
                                <li><a href="#" className="text-gray-400 hover:text-[#D80000] transition-colors duration-200">Constitution</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#D80000] transition-colors duration-200">Royal Council</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#D80000] transition-colors duration-200">Ministries</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#D80000] transition-colors duration-200">Legal Framework</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 text-[#C5A059]">Resources</h4>
                            <ul className="space-y-4 text-sm">
                                <li><a href="#" className="text-gray-400 hover:text-[#D80000] transition-colors duration-200">Investment Guide</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#D80000] transition-colors duration-200">Travel &amp; Visas</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#D80000] transition-colors duration-200">Press Kit</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#D80000] transition-colors duration-200">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/5 pt-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
                            <div className="text-center lg:text-left">
                                <p className="text-gray-600 text-sm">© 2025 Kingdom of Kush. All rights reserved.</p>
                            </div>
                            <div className="flex items-center space-x-6 text-sm">
                                <a href="#" className="text-gray-600 hover:text-white transition-colors duration-200">Privacy Policy</a>
                                <a href="#" className="text-gray-600 hover:text-white transition-colors duration-200">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}