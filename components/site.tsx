'use client'

import Link from 'next/link'
import { ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { productCatalog } from '@/components/product-data'

const logoBlack = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_black_transparent_1536x1044-i7OKf4UH6fNRuzrsRuY8Q3ySDh2BBb.png'
const logoWhite = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000a6d081fda519172b992bc373-I0aCZboR2vl7fGprChTTC1HtYIKRsZ.png'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <picture className={`block size-7 shrink-0 ${className}`}>
      <source media="(prefers-color-scheme: dark)" srcSet={logoWhite} />
      <img
        src={logoBlack}
        alt=""
        width={28}
        height={28}
        fetchPriority="high"
        decoding="async"
        className="size-full object-contain"
      />
    </picture>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#0b0d0c]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-6 lg:px-8">
        <Link href="/" aria-label="Hashed Solutions home" className="flex min-w-0 items-center gap-2.5">
          <Logo />
          <span className="whitespace-nowrap text-[15px] font-medium tracking-[-0.02em] text-white">Hashed Solutions</span>
        </Link>
        <nav className="hidden items-center gap-9 text-[13px] text-white/60 md:flex">
          <a href="#about" className="transition-colors hover:text-white">Company</a>
          <a href="#products" className="transition-colors hover:text-white">Products</a>
          <a href="#technology" className="transition-colors hover:text-white">Technology</a>
        </nav>
        <a href="#contact" className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] text-white transition-colors hover:border-[#58e791]/60 hover:text-[#58e791] md:flex">Start a conversation <ArrowUpRight className="size-3.5" /></a>
        <button className="text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="flex flex-col gap-5 border-t border-white/[0.08] bg-[#0b0d0c] px-6 py-6 text-sm text-white/70 md:hidden"><a href="#about" onClick={() => setOpen(false)}>Company</a><a href="#products" onClick={() => setOpen(false)}>Products</a><a href="#technology" onClick={() => setOpen(false)}>Technology</a><a href="#contact" onClick={() => setOpen(false)} className="text-[#58e791]">Start a conversation</a></nav>}
    </header>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[#58e791]"><span className="h-px w-7 bg-[#58e791]" />{children}</p>
}

export function ProductCard({ product }: { product: typeof products[number] }) {
  return <Link href={`/products/${product.slug}`} className="group flex min-h-[360px] flex-col justify-between border-t border-white/15 py-6 transition-colors hover:border-[#58e791]">
    <div><div className="mb-12"><span className="font-mono text-xs text-white/35">{product.code}</span></div><h3 className="mb-3 text-2xl font-medium tracking-tight text-white">{product.name}</h3><p className="mb-4 text-sm font-medium text-white/60">{product.label}</p><p className="max-w-sm text-sm leading-6 text-white/45">{product.description}</p></div><span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/50 transition-colors group-hover:text-[#58e791]">Explore product <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
  </Link>
}

export function Footer() {
  return <footer className="border-t border-white/10"><div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-3"><div className="flex items-center gap-2.5"><Logo /><span className="text-sm font-medium tracking-[-0.02em] text-white/70">Hashed Solutions</span></div><span className="text-xs text-white/30">© 2026 Hashed Solutions</span></div><div className="flex gap-6 text-xs text-white/40"><a href="#about" className="hover:text-white">About</a><a href="#products" className="hover:text-white">Products</a><a href="#contact" className="hover:text-white">Contact</a></div></div></footer>
}

export { SectionLabel }
