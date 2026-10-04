'use client'

import Link from 'next/link'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { productCatalog } from '@/components/product-data'

const logoBlack = '/images/logo-black.png'
const logoWhite = '/images/logo-white.png'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <picture className={`block size-7 shrink-0 ${className}`}>
      <source media="(prefers-color-scheme: dark)" srcSet={logoWhite} />
      <img src={logoBlack} alt="" width={28} height={28} fetchPriority="high" decoding="async" className="size-full object-contain" />
    </picture>
  )
}

const serviceLinks = productCatalog.map(({ slug, name, label }) => ({ slug, name, label }))
const toolLinks = [
  { slug: 'system-tools', name: 'System Tools', label: 'Connect and manage Hashed products and services' },
  { slug: 'developer-tools', name: 'Developer Tools', label: 'Build on networks and integrate existing systems' },
  { slug: 'ai-tools', name: 'AI Tools', label: 'Create smart contracts and dApps on existing networks' },
]

function HeaderMenu({ label, links }: { label: string; links: { slug: string; name: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1.5 py-5 transition-colors group-hover:text-white" aria-haspopup="true">
        {label}<ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="pointer-events-none invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 rounded-xl border border-white/10 bg-[#111412] p-2 opacity-0 shadow-2xl transition-all group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {links.map((item) => <span key={item.slug} className="block rounded-lg px-3 py-3"><span className="block text-sm text-white/90">{item.name}</span><span className="mt-1 block text-[11px] leading-4 text-white/40">{item.label}</span></span>)}
      </div>
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#0b0d0c]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-6 lg:px-8">
        <Link href="/" aria-label="Hashed Solutions home" className="flex min-w-0 items-center gap-1.5">
          <Logo />
          <span className="whitespace-nowrap text-[15px] tracking-[-0.02em] text-white logofont">Hashed Solutions</span>
        </Link>
        <nav className="hidden items-center gap-9 text-[13px] text-white/60 md:flex">
          <HeaderMenu label="Services" links={serviceLinks} />
          <HeaderMenu label="Tools" links={toolLinks} />
          <a href="#docs" className="py-5 transition-colors hover:text-white">Docs</a>
          <a href="#contact" className="py-5 transition-colors hover:text-white">Contact</a>
        </nav>
        <button className="text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-white/[0.08] bg-[#0b0d0c] px-6 py-6 text-sm text-white/70 md:hidden"><div className="flex flex-col gap-5"><span className="text-[11px] uppercase tracking-[0.2em] text-[#58e791]">Services</span>{serviceLinks.map((item) => <span key={item.slug}>{item.name}</span>)}</div><div className="mt-7 flex flex-col gap-5 border-t border-white/[0.08] pt-6"><span className="text-[11px] uppercase tracking-[0.2em] text-[#58e791]">Tools</span>{toolLinks.map((item) => <span key={item.slug}>{item.name}</span>)}</div><div className="mt-7 flex flex-col gap-5 border-t border-white/[0.08] pt-6"><a href="#docs" onClick={() => setOpen(false)}>Docs</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a></div></nav>} 
    </header>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[#58e791]"><span className="h-px w-7 bg-[#58e791]" />{children}</p>
}

export function ProductCard({ product }: { product: typeof products[number] }) {
  return <article className="flex min-h-[360px] flex-col justify-between border-t border-white/15 py-6">
    <div><h3 className="mb-3 text-2xl font-medium tracking-tight text-white">{product.name}</h3><p className="mb-4 text-sm font-medium text-white/60">{product.label}</p><p className="max-w-sm text-sm leading-6 text-white/45">{product.description}</p></div>
    <a href="#contact" className="group mt-8 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-[#58e791]">Explore Service <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
  </article>
}

export function Footer() {
  return <footer className="border-t border-white/10"><div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-3"><div className="flex items-center gap-2.5"><Logo /><span className="text-sm tracking-[-0.02em] text-white/70 logofont">Hashed Solutions</span></div><p><span className="text-xs text-white/30">© 2026 Hashed Solutions</span></p></div><div className="flex gap-6 text-xs text-white/40"><a href="#docs" className="hover:text-white">Docs</a><a href="#contact" className="hover:text-white">Contact</a></div></div></footer>
}

export { SectionLabel }
