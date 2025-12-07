// components/NavBar.tsx
'use client';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <div className="w-full relative z-50">
      {/* Top Red Bar */}
      <div className="bg-kushRed text-white py-4 px-6 flex justify-between items-center shadow-lg">
        {/* Placeholder for Logo - In real app, use <Image /> */}
        <div className="flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2 top-2 md:top-0">
           <div className="bg-kushBlack p-2 rounded-b-lg shadow-xl border-b-2 border-kushGold">
             <span className="text-2xl font-serif font-bold text-kushGold tracking-widest">KUSH</span>
           </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-xs font-bold tracking-widest uppercase">
          <Link href="/" className="hover:text-kushGold transition">Home</Link>
          <Link href="/about" className="hover:text-kushGold transition">About Us</Link>
          <Link href="/team" className="hover:text-kushGold transition">Meet the Team</Link>
          <Link href="/citizenship" className="hover:text-kushGold transition">Citizenship</Link>
        </nav>

        <div className="flex gap-4">
          <Facebook size={18} className="cursor-pointer hover:text-kushGold" />
          <Twitter size={18} className="cursor-pointer hover:text-kushGold" />
          <Instagram size={18} className="cursor-pointer hover:text-kushGold" />
        </div>
      </div>
    </div>
  );
}