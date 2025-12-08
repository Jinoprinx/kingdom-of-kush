// app/citizenship/page.tsx
'use client';

import Link from 'next/link';
import { ArrowRight, User, Landmark, Home, TrendingUp } from 'lucide-react';

export default function CitizenshipPage() {
  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#D80000] rounded-full opacity-[0.08] blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#C5A059] rounded-full opacity-[0.05] blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-medium text-[#C5A059] mb-3 tracking-wider uppercase">(Pathway to Belonging)</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-playfair mb-6">
              Claim Your <span className="text-[#D80000] italic">Heritage</span>.
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Citizenship in the Kingdom of Kush is your right of return—rooted in ancestry, activated by choice, and protected by sovereignty.
            </p>
          </div>
        </div>
      </section>

            {/* Eligibility */}
        <section className="py-16 lg:py-24 border-y border-white/5 relative overflow-hidden">
        {/* Background Image */}
        <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
            backgroundImage: '/images/kush1.jpg',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}
            aria-hidden="true"
        ></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-playfair">
                Who Qualifies?
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Our citizenship is open to all people of African descent seeking to rebuild on ancestral soil.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                title: 'Diaspora Heritage',
                desc: 'You identify as part of the global African diaspora—through lineage, culture, or lived identity.',
                icon: <User className="w-6 h-6" />,
                },
                {
                title: 'Commitment to Build',
                desc: 'You intend to live, invest, or actively contribute to the growth of the Kingdom.',
                icon: <Home className="w-6 h-6" />,
                },
                {
                title: 'Alignment with Values',
                desc: 'You uphold the principles of sovereignty, innovation, sustainability, and communal prosperity.',
                icon: <Landmark className="w-6 h-6" />,
                },
            ].map((item, i) => (
                <div
                key={i}
                className="p-6 rounded-2xl bg-[#121212]/80 backdrop-blur-sm border border-white/5 hover:border-[#C5A059]/30 transition-colors"
                >
                <div className="w-12 h-12 rounded-full bg-[#D80000]/10 flex items-center justify-center text-[#D80000] mb-4">
                    {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

      {/* Pathway Steps */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#110505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#C5A059] mb-3 tracking-wider uppercase">(Your Journey)</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-playfair">
              The Citizenship Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Apply',
                desc: 'Submit your digital application with proof of heritage and intent.',
                bg: 'bg-[#D80000]/10',
                color: 'text-[#D80000]',
              },
              {
                step: '2',
                title: 'Verify',
                desc: 'Our cultural council reviews your lineage and alignment.',
                bg: 'bg-[#C5A059]/10',
                color: 'text-[#C5A059]',
              },
              {
                step: '3',
                title: 'Invest',
                desc: 'Secure residency through real estate, business, or community contribution.',
                bg: 'bg-[#D80000]/10',
                color: 'text-[#D80000]',
              },
              {
                step: '4',
                title: 'Swear In',
                desc: 'Take the Oath of Belonging in a ceremonial gathering at Meroë.',
                bg: 'bg-[#C5A059]/10',
                color: 'text-[#C5A059]',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#D80000]/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-full ${step.bg} flex items-center justify-center ${step.color} mb-6 font-bold text-lg`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-playfair mb-6">
                Rights & <span className="text-[#C5A059]">Privileges</span>
              </h2>
              <ul className="space-y-4">
                {[
                  'Full land ownership rights in all districts',
                  'Voting rights in local governance councils',
                  'Access to Kush healthcare and education systems',
                  'Duty-free import of personal and business assets',
                  'Dual citizenship recognized globally',
                  'Protection under the Kush Constitution',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C5A059] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
                  alt="Citizenship ceremony"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[#D80000] mb-3 tracking-wider uppercase">(Common Questions)</p>
            <h2 className="text-3xl font-bold text-white font-playfair">You Asked</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'Do I need to give up my current citizenship?',
                a: 'No. The Kingdom of Kush recognizes and supports dual or multiple citizenship.',
              },
              {
                q: 'How long does the process take?',
                a: 'Most applicants receive provisional status within 30 days and full citizenship within 90 days.',
              },
              {
                q: 'Can I bring my family?',
                a: 'Yes. Spouses and children under 18 are included in your primary application.',
              },
              {
                q: 'Is there a language requirement?',
                a: 'No—but we offer free Swahili, Arabic, and Nubian language immersion for all new citizens.',
              },
            ].map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-2xl p-6 bg-[#121212]">
                <h3 className="font-bold text-white text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 bg-[#D80000] overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-playfair">
            Your ancestors are waiting.
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Begin your application today—your home, your rights, your future.
          </p>
          <Link
            href="https://portal.kingdomofkush.org/apply" // or your real portal
            className="inline-flex items-center gap-3 bg-[#0a0a0a] text-[#C5A059] px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-colors group"
          >
            Start Your Application
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}