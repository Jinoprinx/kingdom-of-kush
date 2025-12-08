// app/about/page.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] text-gray-100">
      {/* Hero Banner */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#D80000] rounded-full opacity-[0.08] blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#C5A059] rounded-full opacity-[0.05] blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-medium text-[#C5A059] mb-3 tracking-wider uppercase">(Our Story)</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-playfair mb-6">
              We are <span className="text-[#C5A059] italic">Kush</span>.
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              One of our greatest sources of pride and joy in building our nation has been our unwavering commitment to investing in orphanages across Africa. Over the past three decades, this initiative has transformed countless lives, proving that investing in people is the most powerful investment we can make. Our efforts began with humble beginnings in orphanage homes, where we dedicated resources and support to the children who needed it most.

From these orphanages, children have grown into remarkable individuals who now hold prestigious positions in society. They have risen to become ministers, governors, and mayors. They serve as lawyers, doctors, nurses, bankers, and business owners, each contributing uniquely and profoundly to their communities and our nation. Witnessing this transformation has been incredibly moving. It’s a testament to the power of unity and determination, demonstrating that when we come together with a shared purpose, we can achieve extraordinary things.

These success stories are not just examples of personal triumphs but are also symbols of hope and inspiration for us all. This journey underscores the incredible potential within each person, regardless of their starting point. It encourages us to continue investing in human potential and to believe in the possibility of profound change. Through our collective efforts, we have created a legacy of empowerment and progress that will inspire and uplift future generations.

The Kingdom of Kush’s commitment to investing in people reflects our broader vision for the nation. We believe in the transformative power of education, support, and community. By fostering an environment where every individual can thrive, we are building a nation that stands as a model of progress and compassion.
 
Thank you for joining us on this journey. Together We Prosper!
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-playfair mb-6">
                Our <span className="text-[#D80000]">Mission</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                To establish a sovereign, self-sustaining nation in the ancestral lands of Africa—powered by innovation, rooted in heritage, and designed for the global African family.
              </p>
              <p className="text-gray-400 mb-8">
                Under international law it is known as Terra Nullius, a “no man’s land.” It is a historically significant region which formerly has been part of the legendary Kingdom of Kush. It is now home to an inspiring resurrectional plan to create the next Dubai-like city in Kingdom of Kush. As a global social development project, Kingdom of Kush plans for innovative infrastructure, sustainable housing, renewable energy, clean water, and localized food security.
              </p>
              <Link
                href="/citizenship"
                className="inline-flex items-center gap-2 text-[#C5A059] hover:text-white font-medium group"
              >
                Join the Founding Community
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/kush8.jpg"
                  alt="Kush leadership council"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#110505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#D80000] mb-3 tracking-wider uppercase">(Foundational Pillars)</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-playfair">
              Built on <span className="text-[#C5A059]">Timeless Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Sovereignty',
                desc: 'Full political and economic autonomy to shape our destiny without external interference.',
              },
              {
                title: 'Innovation',
                desc: 'A tech-forward nation powered by AI, renewable energy, and smart infrastructure.',
              },
              {
                title: 'Heritage',
                desc: 'Reconnecting with African spiritual, linguistic, and cultural traditions as living practice.',
              },
              {
                title: 'Prosperity',
                desc: 'Wealth creation through ethical commerce, land ownership, and intergenerational equity.',
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#C5A059]/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#C5A059] mb-3 tracking-wider uppercase">(Guided By Wisdom)</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-playfair">
              The Royal Council
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
            <p className="mb-6">
              The Kingdom of Kush is stewarded by a council of visionaries, technologists, historians, economists, and spiritual leaders from across the African diaspora.
            </p>
            <p>
              United by a shared vision of African renaissance, they convene to ensure every decision honors our past while boldly engineering our future.
            </p>
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
            Your legacy begins here.
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether you're ready to invest, relocate, or simply learn more—you belong in this story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/citizenship"
              className="bg-[#0a0a0a] text-[#C5A059] px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-colors"
            >
              Apply for Citizenship
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Contact an Ambassador
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}