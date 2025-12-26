// app/layout.tsx
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata = {
  title: 'The Kingdom of Kush — The Future of Africa',
  description: 'A homecoming for all people of African descent. Live, learn, work, invest, and prosper in the Kingdom of Kush.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${inter.variable} antialiased text-[#1A1A1A] bg-[#F9F9F7] overflow-x-hidden`}>
        {children}
        {/* Lucide Icons via CDN (or install @lucide/react for better perf) */}
        <Script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}