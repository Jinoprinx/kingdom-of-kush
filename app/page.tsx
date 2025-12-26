// app/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import HeroBackgroundVideo from '@/components/HeroBackgroundVideo';

export default function HomePage() {
  const viewTriggers = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('view-active');
          }
        });
      },
      {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.1,
      }
    );

    viewTriggers.current = document.querySelectorAll('.view-trigger');
    viewTriggers.current.forEach((el) => observer.observe(el));

    return () => {
      viewTriggers.current?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="bg-[#F9F9F7] text-[#1A1A1A]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 animate-[fadeIn_0.8s_ease-out_0.2s_forwards] bg-white/80 border-b border-[#C5A059]/20 backdrop-blur-md shadow-sm">
        <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
          <div className="flex lg:h-24 h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3">
                <img
                  src="/images/kush-logo.jpg"
                  alt="Kingdom of Kush logo"
                  className="w-10 h-auto"
                />
              </a>
              <img
                src="/images/kush.jpg"
                alt="Kingdom of Kush"
                className="w-50 h-auto"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-1">
              <Link href="/about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C5A059] transition-all duration-200">
                About
              </Link>
              <a href="#districts" onClick={handleAnchorClick} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C5A059] transition-all duration-200">
                Districts
              </a>
              <a href="#invest" onClick={handleAnchorClick} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C5A059] transition-all duration-200">
                Invest
              </a>
              <Link href="/citizenship" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C5A059] transition-all duration-200">
                Citizenship
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <a
                href="#join"
                onClick={handleAnchorClick}
                className="hidden sm:inline-flex items-center space-x-2 bg-[#D80000] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#b30000] hover:shadow-[0_0_20px_rgba(216,0,0,0.4)] transition-all duration-300 border border-transparent shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-passport w-4 h-4">
                  <path d="M2 20h20"></path>
                  <path d="M7 2v20"></path>
                  <path d="M5 2h4a2 2 0 0 1 2 2v16H5V2Z"></path>
                  <rect x="15" y="4" width="6" height="8" rx="1"></rect>
                  <circle cx="18" cy="16" r="2"></circle>
                </svg>
                <span>Join the Kingdom</span>
              </a>
              <button className="lg:hidden p-2 rounded-full text-gray-900 hover:bg-black/5 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6">
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="vision" className="relative lg:pt-32 lg:pb-32 overflow-hidden view-trigger view-active pt-28 pb-20" data-view-class="view-active">
        {/* Updated Overlay for Bright Theme */}
        <div className="absolute inset-0 bg-white/40 z-[1] backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-[#F9F9F7] z-[1]"></div>

        <HeroBackgroundVideo />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-white/80 text-[#C5A059] text-xs font-medium mb-8 animate-[fadeIn_1s_ease-out] shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
              </span>
              The Future of African Civilization
            </div>
            {/* Added drop shadow to text for readability against light video overlay if needed */}
            <h1 className="sm:text-6xl lg:text-8xl xl:text-9xl leading-tight animate-[slideUp_1s_ease-out_0.2s_forwards] transform text-5xl font-bold tracking-tight opacity-0 translate-y-8 text-[#1A1A1A] font-playfair drop-shadow-sm">
              Welcome
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C5A059] via-[#b89145] to-[#C5A059] italic pr-2">Home.</span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed opacity-0 animate-[slideUp_1s_ease-out_0.4s_forwards] transform translate-y-8 font-light drop-shadow-sm">
              The Kingdom of Kush invites the African diaspora to live, learn, work, invest, and prosper. A sovereign smart nation defining tomorrow&apos;s lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-6 animate-[slideUp_1s_ease-out_0.6s_forwards] transform opacity-0 mt-12 translate-y-8 space-y-4 items-center justify-center">
              <a
                href="#invest"
                onClick={handleAnchorClick}
                className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group ring-1 ring-[#D80000] text-base font-semibold text-white tracking-tight bg-[#D80000] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_10px_30px_rgba(216,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(216,0,0,0.4)] hover:scale-105"
              >
                <span className="relative z-[1]">Start Your Journey</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-[1] w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a
                href="#vision"
                onClick={handleAnchorClick}
                className="group inline-flex items-center space-x-3 hover:text-[#C5A059] hover:bg-white transition-all duration-300 text-gray-800 border-gray-400/50 hover:border-[#C5A059] border rounded-full pt-4 pr-8 pb-4 pl-8 bg-white/40 backdrop-blur-md shadow-sm"
              >
                <span>Explore the Vision</span>
              </a>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 relative animate-[fadeIn_1.5s_ease-out_0.8s_forwards] opacity-0">
            <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-[#C5A059]/20 shadow-2xl shadow-[#C5A059]/10 group bg-white">
              <img
                src="/images/kush7.jpg"
                alt="Futuristic African City Concept"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                <div className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-2">The Capital</div>
                <h3 className="text-3xl sm:text-4xl font-playfair text-white">Meroë Innovation Hub</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <div className="border-y border-[#C5A059]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-1">100%</div>
              <div className="text-xs md:text-sm text-[#C5A059] uppercase tracking-widest">Renewable Energy</div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-1">Zero</div>
              <div className="text-xs md:text-sm text-[#C5A059] uppercase tracking-widest">Carbon Footprint</div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-1">54+</div>
              <div className="text-xs md:text-sm text-[#C5A059] uppercase tracking-widest">Nations Represented</div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-1">∞</div>
              <div className="text-xs md:text-sm text-[#C5A059] uppercase tracking-widest">Potential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Districts */}
      <section id="districts" className="lg:py-32 view-trigger view-active bg-[#F9F9F7] pt-20 pb-20 relative" data-view-class="view-active">
        <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gradient-to-b from-[#C5A059]/5 to-transparent pointer-events-none"></div>
        <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
          <div className="view-transition opacity-0 translate-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-8 mb-16">
              <div>
                <p className="text-sm font-medium text-[#D80000] mb-3 tracking-wider uppercase">(Our Districts)</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] font-playfair">
                  Built for <span className="text-[#C5A059] italic">prosperity.</span>
                </h2>
              </div>
              <div className="lg:pl-8">
                <p className="text-lg text-gray-600">
                  Discover the diverse zones of the Kingdom, from high-tech innovation hubs to serene residential river estates, all connected by smart infrastructure.
                </p>
              </div>
            </div>

            {/* Residential Card */}
            <div className="sticky top-28 mt-0 z-10 mx-auto max-w-6xl">
              <div className="relative group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 hover:border-[#C5A059]/50 hover:shadow-[0_20px_60px_rgba(197,160,89,0.15)] shadow-xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="h-[400px] lg:h-[600px] overflow-hidden relative">
                    <img
                      src="/images/kush6.jpg"
                      alt="Nile River Estates"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 lg:p-14 flex flex-col justify-center bg-white">
                    <div className="mb-6">
                      <div className="inline-flex items-center space-x-2 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-full px-4 py-1.5 text-[#C5A059] text-sm font-medium">
                        <span>Residential Zone</span>
                      </div>
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4 font-playfair">Nile River Estates</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Luxury eco-villas nestled along the historic riverbanks. Experience serenity with state-of-the-art smart home integration and community organic gardens.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8 text-sm text-gray-600">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D80000]/10 flex items-center justify-center text-[#D80000]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          </svg>
                        </div>
                        <span>2,500 Units</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D80000]/10 flex items-center justify-center text-[#D80000]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6.2 13.5A7.8 7.8 0 0 1 12 2.1a7.8 7.8 0 0 1 5.8 11.4"></path>
                          </svg>
                        </div>
                        <span>Waterfront</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <button className="text-[#1A1A1A] border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors flex items-center gap-2 group-hover:gap-4 duration-300 font-medium">
                        View Properties{' '}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Card */}
            <div className="sticky top-32 mt-12 z-20 mx-auto max-w-6xl">
              <div className="relative group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 hover:border-[#C5A059]/50 hover:shadow-[0_20px_60px_rgba(197,160,89,0.15)] shadow-xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="h-[400px] lg:h-[600px] overflow-hidden relative order-1 lg:order-2">
                    <img
                      src="/images/kush11.jpg"
                      alt="Trade District"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 lg:p-14 flex flex-col justify-center bg-white order-2 lg:order-1">
                    <div className="mb-6">
                      <div className="inline-flex items-center space-x-2 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-full px-4 py-1.5 text-[#C5A059] text-sm font-medium">
                        <span>Commercial Hub</span>
                      </div>
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4 font-playfair">Pan-African Trade Center</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      The economic engine of the Kingdom. A duty-free zone designed for international business, banking, and sustainable tech startups.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8 text-sm text-gray-600">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D80000]/10 flex items-center justify-center text-[#D80000]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                            <path d="M9 22v-4h6v4"></path>
                            <path d="M8 6h.01"></path>
                            <path d="M16 6h.01"></path>
                            <path d="M12 6h.01"></path>
                            <path d="M12 10h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M16 10h.01"></path>
                            <path d="M16 14h.01"></path>
                            <path d="M8 10h.01"></path>
                            <path d="M8 14h.01"></path>
                          </svg>
                        </div>
                        <span>5M sq ft Office</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D80000]/10 flex items-center justify-center text-[#D80000]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                            <path d="M12 18V6"></path>
                          </svg>
                        </div>
                        <span>Tax Incentives</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <button className="text-[#1A1A1A] border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors flex items-center gap-2 group-hover:gap-4 duration-300 font-medium">
                        Investment Guide{' '}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citizenship Process */}
      <section id="citizenship" className="lg:py-32 view-trigger view-active pt-20 pb-20 bg-gradient-to-b from-[#F9F9F7] to-white" data-view-class="view-active">
        <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
          <div className="view-transition opacity-0 mb-16 translate-y-8 text-center">
            <p className="text-sm font-medium text-[#C5A059] mb-3 tracking-wider uppercase">(Your Journey)</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1A1A1A] font-playfair mb-6">
              Return to <span className="text-[#D80000]">The Kingdom</span>.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have streamlined the process for the diaspora to reclaim their heritage and build a future on the continent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '1. Apply',
                desc: 'Submit your application for citizenship or residency. Our digital portal makes verification seamless for the diaspora.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" x2="20" y1="8" y2="14"></line>
                    <line x1="23" x2="17" y1="11" y2="11"></line>
                  </svg>
                ),
                bg: 'bg-[#D80000]/10',
                color: 'text-[#D80000]',
                hoverBg: 'group-hover:bg-[#D80000]',
                hoverColor: 'group-hover:text-white',
              },
              {
                title: '2. Invest',
                desc: 'Choose from real estate, agricultural projects, or tech startups. Secure your stake in the future economy.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                ),
                bg: 'bg-[#C5A059]/10',
                color: 'text-[#C5A059]',
                hoverBg: 'group-hover:bg-[#C5A059]',
                hoverColor: 'group-hover:text-black',
              },
              {
                title: '3. Build',
                desc: 'Collaborate with architects and planners to construct your home or business in our sustainable smart cities.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                ),
                bg: 'bg-[#D80000]/10',
                color: 'text-[#D80000]',
                hoverBg: 'group-hover:bg-[#D80000]',
                hoverColor: 'group-hover:text-white',
              },
              {
                title: '4. Prosper',
                desc: 'Live in a community that values heritage, innovation, and shared wealth. Experience true freedom.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.246-5.362-6.75-5.362 1.333 2.333 1.333 5.333 1.333 5.333a2.5 2.5 0 0 0 2.5 4.922"></path>
                    <path d="M15.5 14.5A2.5 2.5 0 0 1 13 12c0-1.38.5-2 1-3 1.072-2.143 2.246-5.362 6.75-5.362-1.333 2.333-1.333 5.333-1.333 5.333a2.5 2.5 0 0 1-2.5 4.922"></path>
                    <path d="M12 14v10"></path>
                  </svg>
                ),
                bg: 'bg-[#C5A059]/10',
                color: 'text-[#C5A059]',
                hoverBg: 'group-hover:bg-[#C5A059]',
                hoverColor: 'group-hover:text-black',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#D80000]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
              >
                <div className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center ${step.color} mb-6 ${step.hoverBg} ${step.hoverColor} transition-colors duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="lg:py-24 view-trigger view-active pt-16 pb-16 border-t border-gray-200 bg-white" data-view-class="view-active">
        <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1A1A1A] font-playfair">Kingdom News</h2>
            </div>
            <a href="#" className="text-[#C5A059] hover:text-[#b08842] transition-colors mt-4 md:mt-0 flex items-center gap-2 font-medium">
              View all updates{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: '/images/kush5.jpg',
                tag: 'Infrastructure',
                date: 'Oct 12, 2025',
                title: 'Solar Grid Completion',
                desc: 'The first phase of our independent energy grid is now fully operational, powering over 10,000 homes.',
              },
              {
                img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop',
                tag: 'Education',
                date: 'Sep 28, 2025',
                title: 'Kush University Opens',
                desc: 'Welcoming the first cohort of students from across the diaspora to our center of African excellence.',
              },
              {
                img: '/images/kush6.jpg',
                tag: 'Economy',
                date: 'Sep 15, 2025',
                title: 'Agro-Tech Investments',
                desc: 'New partnerships secured to develop vertical farming towers in the Innovation District.',
              },
            ].map((item, i) => (
              <a key={i} href="#" className="group block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative shadow-md">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <div className="flex gap-3 mb-2">
                  <span className="text-xs font-semibold text-[#D80000] uppercase tracking-wider">{item.tag}</span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm line-clamp-2">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="lg:py-32 relative overflow-hidden view-trigger view-active bg-[#D80000] pt-24 pb-24" data-view-class="view-active">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="2" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)"></rect>
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#800000] to-transparent mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="view-transition opacity-0 translate-y-8">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-6 border border-white/20">
              A New Beginning
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-playfair">
              It&apos;s time to come home.
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              The Kingdom of Kush is not just a place; it is a promise. A promise of sovereignty, dignity, and prosperity for the global African family.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#invest"
                onClick={handleAnchorClick}
                className="group inline-flex items-center space-x-3 bg-white text-[#D80000] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span>Apply for Citizenship</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D80000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a
                href="mailto:welcome@kingdomofkush.org"
                className="group inline-flex items-center space-x-3 text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                <span>Contact an Ambassador</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Keeping it dark for elegance/contrast or switching to light?
          Plan said try light or keep dark. Dark footer on light theme is very common and luxurious.
          I will keep it black but ensure gold accents pop.
       */}
      <footer className="view-trigger view-active bg-[#050505] border-t border-[#C5A059]/20 pt-20 pb-10" data-view-class="view-active">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="view-transition opacity-0 translate-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#D80000] to-[#800000] rounded flex items-center justify-center">
                    <span className="text-white font-playfair font-bold text-lg">K</span>
                  </div>
                  <span className="text-lg font-bold text-white font-playfair">
                    Kingdom of <span className="text-[#C5A059]">Kush</span>
                  </span>
                </div>
                <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                  Establishing a modern, sustainable, and sovereign nation for the African diaspora. A center for trade, culture, and innovation.
                </p>
                <div className="flex items-center space-x-4">
                  {['facebook', 'instagram', 'linkedin'].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#C5A059] hover:bg-white/10 transition-all duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 ? (
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        ) : i === 1 ? (
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        ) : (
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 text-[#C5A059]">Governance</h4>
                <ul className="space-y-4 text-sm">
                  {['Constitution', 'Royal Council', 'Ministries', 'Legal Framework'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-[#D80000] transition-colors duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 text-[#C5A059]">Resources</h4>
                <ul className="space-y-4 text-sm">
                  {['Investment Guide', 'Travel & Visas', 'Press Kit', 'Contact Us'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-[#D80000] transition-colors duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-8">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
                <p className="text-gray-500 text-sm">© 2025 Kingdom of Kush. All rights reserved.</p>
                <div className="flex items-center space-x-6 text-sm">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Animation CSS */}
      <style jsx>{`
        .view-trigger .view-transition {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .view-trigger.view-active .view-transition {
          opacity: 1;
          transform: translateY(0);
        }
        .view-trigger.view-active .view-transition:nth-child(1) { transition-delay: 0.1s; }
        .view-trigger.view-active .view-transition:nth-child(2) { transition-delay: 0.2s; }
        .view-trigger.view-active .view-transition:nth-child(3) { transition-delay: 0.3s; }
        .view-trigger.view-active .view-transition:nth-child(4) { transition-delay: 0.4s; }
      `}</style>
    </div>
  );
}