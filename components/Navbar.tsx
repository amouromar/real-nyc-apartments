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
        <Link href="/" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">Home</Link>
        <Link href="/about" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">About</Link>
        <Link href="/properties" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">Properties</Link>
        <Link href="/instagram" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">Instagram</Link>
        <Link href="/blog" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">Blog</Link>
        <Link href="/contact" className="text-[--yinmn-blue] hover:text-[--yinmn-blue] transition-colors">Contact</Link>
      </div>
    </nav>
  )
} 