import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BloomNotes — Minimalist Studio',
  description: 'A cute, professional, and unique note-taking application.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        {/* Soft Background Accent Spheres */}
        <div className="fixed -top-24 -left-24 w-96 h-96 bg-[#FFD6E3] rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="fixed -bottom-24 -right-24 w-96 h-96 bg-[#FFE3EC] rounded-full blur-3xl opacity-60 pointer-events-none" />
        
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}