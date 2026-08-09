'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { footerGroups, images, products, testimonials, tickerItems } from '@/data/site'
import { SiteHeader } from '@/components/site-header'

export function HomeExperience() {
  const [cart, setCart] = useState(0)
  const [liked, setLiked] = useState<number[]>([])
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const addToCart = () => setCart((current) => current + 1)
  const toggleLiked = (index: number) => setLiked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])

  return (
    <main className={darkMode ? 'site-shell dark-mode' : 'site-shell'}>
      <SiteHeader cart={cart} darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />
      <section id="top" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-24">
          <div className="flex flex-col items-start gap-7">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Est. 2018 <span className="mx-2 text-muted-foreground">/</span> Cairo, Egypt</p>
            <h1 className="max-w-3xl font-mono text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-balance sm:text-7xl lg:text-8xl">Cairo<br />streets /<br />where style<br />begins</h1>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">Egyptian streetwear born from the energy of Cairo. Made for dreamers, built for the streets.</p>
            <Button size="lg" onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}>Shop the drop <ArrowRight data-icon="inline-end" /></Button>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-border bg-card p-3 shadow-sm">
            <Image src={images.hero} alt="Illustrated Egyptian man walking through a Cairo street" width={900} height={1100} priority className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
      </section>
      <section id="collections" className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Collection</p><h2 className="mt-3 font-mono text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">The current drop</h2></div><span className="font-mono text-sm font-bold text-muted-foreground">SS24</span></div>
        <div id="shop" className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => <Card key={product.name} className="group overflow-hidden rounded-xl border-border bg-card py-0 shadow-none">
            <div className="relative bg-muted p-3"><Badge className="absolute left-6 top-6 z-10" variant="secondary">{product.badge}</Badge><Button variant="secondary" size="icon" className="absolute right-6 top-6 z-10 rounded-full" aria-label={`Add ${product.name} to wishlist`} onClick={() => toggleLiked(index)}><Heart className={liked.includes(index) ? 'fill-primary text-primary' : ''} /></Button><Image src={product.image} alt={`${product.name} illustrated product`} width={700} height={850} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div>
            <CardContent className="flex flex-col gap-2 p-5"><p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">{product.type}</p><h3 className="font-mono text-2xl font-bold uppercase tracking-[-0.03em]">{product.name}</h3><p className="text-sm text-muted-foreground">{product.price}</p><Button variant="link" className="mt-2 w-fit px-0 uppercase" onClick={addToCart}>Shop now <ArrowRight data-icon="inline-end" /></Button></CardContent>
          </Card>)}
        </div>
      </section>
      <section id="story" className="bg-foreground text-background"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24"><div className="overflow-hidden rounded-xl bg-muted p-3"><Image src={images.story} alt="Open sketchbook, coffee and glasses on a desk" width={1000} height={800} className="aspect-[5/4] w-full object-cover" /></div><div className="flex flex-col gap-6"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Our story <span className="ml-2">/</span></p><h2 className="font-mono text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-6xl">Built in Cairo.<br />Worn everywhere.</h2><p className="max-w-lg leading-relaxed text-background/70">TOWN TEAM started in 2018 in the heart of Cairo with a simple belief: style should tell your story. We design for the streets we grew up on, blending Egyptian heritage with modern edge. From Downtown to the world — we rep our city, every day.</p><span className="font-mono text-7xl font-black text-primary">2018</span></div></div></section>
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-16 lg:px-8 lg:py-24"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Community</p><h2 className="mt-3 font-mono text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">Seen in the streets</h2></div><div className="grid gap-5 md:grid-cols-3">{testimonials.map((item) => <Card key={item.author} className="rounded-xl border-border bg-card shadow-none"><CardContent className="flex flex-col gap-5 p-6"><Image src={item.image} alt="Town Team illustration" width={160} height={160} className="size-20 rounded-full object-cover" /><p className="text-lg leading-relaxed">“{item.quote}”</p><p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">— {item.author}</p></CardContent></Card>)}</div></section>
      <div className="overflow-hidden border-y border-border bg-muted py-4"><div className="mx-auto flex max-w-7xl justify-around gap-8 px-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">{[...tickerItems, ...tickerItems].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><h2 className="font-mono text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl">Wear your city</h2><p className="mt-3 text-sm uppercase tracking-[0.12em] text-muted-foreground">Exclusive drops. Early access. Straight to you.</p></div><form className="flex w-full max-w-md gap-3" onSubmit={(event) => { event.preventDefault(); if (email) setJoined(true) }}><label className="sr-only" htmlFor="email">Email address</label><Input id="email" type="email" placeholder="ENTER YOUR EMAIL" value={email} onChange={(event) => setEmail(event.target.value)} required /><Button type="submit">{joined ? 'You are in' : 'Join the team'} <ArrowRight data-icon="inline-end" /></Button></form></section>
      <footer className="bg-foreground text-background"><div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 lg:px-8"><div className="flex flex-col justify-between gap-8 md:flex-row"><div><strong className="font-mono text-2xl font-black uppercase tracking-[0.12em] text-primary">Town Team</strong><p className="mt-3 text-sm text-background/60">Cairo, Egypt<br />Est. 2018</p></div><div className="grid grid-cols-3 gap-8">{footerGroups.map((group) => <div key={group.title} className="flex flex-col gap-3"><b className="font-mono text-xs uppercase tracking-[0.16em]">{group.title}</b>{group.links.map((link) => <Link href="#top" key={link} className="text-xs uppercase text-background/60 transition-colors hover:text-primary">{link}</Link>)}</div>)}</div></div><Separator className="bg-background/15" /><p className="font-mono text-xs uppercase tracking-[0.16em] text-background/50">Made in Cairo. Worn everywhere.</p></div></footer>
    </main>
  )
}
