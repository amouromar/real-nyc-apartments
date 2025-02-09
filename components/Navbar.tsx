'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <Image src="/favicon.ico" alt="Logo" className="h-8 w-8" width={32} height={32} />
        <Link href="/" className="text-2xl font-semibold text-[--yinmn-blue]">Real NYC Apartments</Link>
      </div>
      
      <div className="flex items-center gap-8">
        <a href="/" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">Home</a>
        <a href="/about" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">About</a>
        <a href="/properties" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">Properties</a>
        <a href="/instagram" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">Instagram</a>
        <a href="/blog" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">Blog</a>
        <a href="/contact" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">Contact</a>
      </div>
    </nav>
  )
} 