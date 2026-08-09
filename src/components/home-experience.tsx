'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Minus, Plus, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/components/ui/toaster'
import { footerGroups, images, products, testimonials, tickerItems } from '@/data/site'
import { OverlayClose, SiteHeader } from '@/components/site-header'

export function HomeExperience() {
  const { addToast } = useToast()
  const [cart, setCart] = useState<number[]>([])
  const [liked, setLiked] = useState<number[]>([])
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [themeSwitching, setThemeSwitching] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [overlay, setOverlay] = useState<'search' | 'wishlist' | 'cart' | null>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('town-team-theme')
    setDarkMode(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches)
    const timer = window.setTimeout(() => setIsLoading(false), 650)
    return () => window.clearTimeout(timer)
  }, [])
  useEffect(() => { window.localStorage.setItem('town-team-theme', darkMode ? 'dark' : 'light') }, [darkMode])
  useEffect(() => { document.body.style.overflow = overlay ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [overlay])

  const results = useMemo(() => products.filter((product) => `${product.name} ${product.type}`.toLowerCase().includes(query.toLowerCase())), [query])
  const addToCart = (index: number) => {
    setCart((current) => [...current, index])
    addToast({
      type: 'success',
      title: 'Added to cart',
      description: `${products[index].name} added to your cart`,
      duration: 2000,
    })
  }
  const toggleLiked = (index: number) => {
    const isLiking = !liked.includes(index)
    setLiked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])
    addToast({
      type: 'info',
      title: isLiking ? 'Added to wishlist' : 'Removed from wishlist',
      description: `${products[index].name} ${isLiking ? 'added to' : 'removed from'} your wishlist`,
      duration: 1500,
    })
  }
  const removeCartItem = (index: number) => setCart((current) => { const position = current.indexOf(index); return position < 0 ? current : current.filter((_, itemPosition) => itemPosition !== position) })
  const closeOverlay = () => setOverlay(null)
  const toggleTheme = () => {
    setThemeSwitching(true)
    setDarkMode((current) => !current)
    window.setTimeout(() => setThemeSwitching(false), 460)
  }

  if (isLoading) {
    return <div className="site-loading" role="status" aria-label="Loading Town Team"><div className="site-loading__mark"><span className="site-loading__diamond" aria-hidden="true">◆</span><span className="site-loading__label">Town Team / Cairo</span></div></div>
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': 'https://town-team.vercel.app/#organization', name: 'Town Team', url: 'https://town-team.vercel.app', logo: 'https://town-team.vercel.app/images/hero.png', description: 'Egyptian streetwear born in Cairo and built for the streets.', areaServed: 'Egypt' },
      { '@type': 'WebSite', '@id': 'https://town-team.vercel.app/#website', name: 'Town Team', url: 'https://town-team.vercel.app', publisher: { '@id': 'https://town-team.vercel.app/#organization' }, inLanguage: 'en-US' },
    ],
  }

  return (
    <main className={`motion-page ${darkMode ? 'site-shell dark-mode' : 'site-shell'}${themeSwitching ? ' theme-switching' : ''}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="sr-only" aria-live="polite">{darkMode ? 'Dark mode enabled' : 'Light mode enabled'}</div>
      <SiteHeader cart={cart.length} wishlist={liked.length} darkMode={darkMode} onToggleTheme={toggleTheme} onOpenSearch={() => setOverlay('search')} onOpenWishlist={() => setOverlay('wishlist')} onOpenCart={() => setOverlay('cart')} />
      <section id="top" className="motion-reveal border-b border-border" style={{ '--motion-delay': '80ms' } as React.CSSProperties}><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-24"><div className="flex flex-col items-start gap-7"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Est. 2018 <span className="mx-2 text-muted-foreground">/</span> Cairo, Egypt</p><h1 className="max-w-3xl font-mono text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-balance sm:text-7xl lg:text-8xl">Cairo<br />streets /<br />where style<br />begins</h1><p className="max-w-md text-base leading-relaxed text-muted-foreground">Egyptian streetwear born from the energy of Cairo. Made for dreamers, built for the streets.</p><Button size="lg" className="motion-button" onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}>Shop the drop <ArrowRight data-icon="inline-end" /></Button></div><div className="relative overflow-hidden rounded-xl border border-border bg-card p-0 shadow-sm"><Image src={images.hero} alt="Illustrated Egyptian man walking through a Cairo street" width={900} height={1100} priority className="aspect-[4/5] w-full object-cover" /></div></div></section>
      <section id="collections" aria-labelledby="collections-title" className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-16 lg:px-8 lg:py-24"><div className="flex items-end justify-between gap-6"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Collection</p><h2 id="collections-title" className="mt-3 font-mono text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">The current drop</h2></div><span className="font-mono text-sm font-bold text-muted-foreground">SS24</span></div><div id="shop" className="grid gap-6 md:grid-cols-3">{products.map((product, index) => <Card key={product.name} className="motion-card group motion-reveal overflow-hidden rounded-xl border-border bg-card py-0 shadow-none" style={{ '--motion-delay': `${index * 90 + 120}ms` } as CSSProperties}><div className="relative bg-muted p-0"><Badge className="absolute left-4 top-4 z-10" variant="secondary">{product.badge}</Badge><Button variant="secondary" size="icon" className="absolute right-4 top-4 z-10 rounded-full" aria-label={`${liked.includes(index) ? 'Remove' : 'Add'} ${product.name} ${liked.includes(index) ? 'from' : 'to'} wishlist`} onClick={() => toggleLiked(index)}><Heart className={liked.includes(index) ? 'fill-primary text-primary' : ''} /></Button><Image src={product.image} alt={`${product.name}, ${product.type}, from the Town Team Egyptian streetwear collection`} width={700} height={850} sizes="(max-width: 768px) 100vw, 33vw" className="motion-image block aspect-[4/5] w-full object-cover" /></div><CardContent className="flex flex-col gap-2 p-5"><p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">{product.type}</p><h3 className="font-mono text-2xl font-bold uppercase tracking-[-0.03em]">{product.name}</h3><p className="text-sm text-muted-foreground">{product.price}</p><Button variant="link" className="motion-button mt-2 w-fit px-0 uppercase" onClick={() => addToCart(index)}>Shop now <ArrowRight data-icon="inline-end" /></Button></CardContent></Card>)}</div></section>
      <section id="story" className="motion-reveal bg-foreground text-background" style={{ '--motion-delay': '120ms' } as CSSProperties}><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24"><div className="overflow-hidden rounded-xl bg-muted p-0"><Image src={images.story} alt="Town Team design workspace with an open sketchbook, coffee, and glasses" width={1000} height={800} sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[5/4] w-full object-cover" /></div><div className="flex flex-col gap-6"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Our story <span className="ml-2">/</span></p><h2 className="font-mono text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-6xl">Built in Cairo.<br />Worn everywhere.</h2><p className="max-w-lg leading-relaxed text-background/70">TOWN TEAM started in 2018 in the heart of Cairo with a simple belief: style should tell your story. We design for the streets we grew up on, blending Egyptian heritage with modern edge. From Downtown to the world — we rep our city, every day.</p><span className="font-mono text-7xl font-black text-primary">2018</span></div></div></section>
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-16 lg:px-8 lg:py-24"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Community</p><h2 className="mt-3 font-mono text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">Seen in the streets</h2></div><div className="grid gap-5 md:grid-cols-3">{testimonials.map((item) => <Card key={item.author} className="motion-card motion-reveal rounded-xl border-border bg-card shadow-none" style={{ '--motion-delay': '160ms' } as CSSProperties}><CardContent className="flex flex-col gap-5 p-6"><Image src={item.image} alt={`Town Team streetwear community portrait for ${item.author}`} width={160} height={160} sizes="80px" className="size-20 rounded-full object-cover" /><p className="text-lg leading-relaxed">“{item.quote}”</p><p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">— {item.author}</p></CardContent></Card>)}</div></section>
      <div className="overflow-hidden border-y border-border bg-muted py-4"><div className="motion-ticker mx-auto flex max-w-7xl justify-around gap-8 px-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">{[...tickerItems, ...tickerItems].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><h2 className="font-mono text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl">Wear your city</h2><p className="mt-3 text-sm uppercase tracking-[0.12em] text-muted-foreground">Exclusive drops. Early access. Straight to you.</p></div><form className="flex w-full max-w-md gap-3" onSubmit={(event) => { event.preventDefault(); if (email) { setJoined(true); addToast({ type: 'success', title: 'Welcome to Town Team!', description: 'Check your email for exclusive drops', duration: 3000 }) } }}><label className="sr-only" htmlFor="email">Email address</label><Input id="email" type="email" placeholder="ENTER YOUR EMAIL" value={email} onChange={(event) => setEmail(event.target.value)} required /><Button type="submit">{joined ? 'You are in' : 'Join the team'} <ArrowRight data-icon="inline-end" /></Button></form></section>
      <footer className="bg-foreground text-background"><div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 lg:px-8"><div className="flex flex-col justify-between gap-8 md:flex-row"><div><strong className="font-mono text-2xl font-black uppercase tracking-[0.12em] text-primary">Town Team</strong><p className="mt-3 text-sm text-background/60">Cairo, Egypt<br />Est. 2018</p></div><div className="grid grid-cols-3 gap-8">{footerGroups.map((group) => <div key={group.title} className="flex flex-col gap-3"><b className="font-mono text-xs uppercase tracking-[0.16em]">{group.title}</b>{group.links.map((link) => <Link href="#top" key={link} className="text-xs uppercase text-background/60 transition-colors hover:text-primary">{link}</Link>)}</div>)}</div></div><Separator className="bg-background/15" /><p className="font-mono text-xs uppercase tracking-[0.16em] text-background/50">Made in Cairo. Worn everywhere.</p></div></footer>
      {overlay && <div className="motion-overlay fixed inset-0 z-50 bg-foreground/60" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeOverlay() }}><aside className={`motion-drawer absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background text-foreground shadow-2xl ${overlay === 'search' ? 'max-w-2xl' : ''}`} role={overlay === 'search' ? 'dialog' : 'dialog'} aria-modal="true" aria-labelledby="overlay-title"><div className="flex items-center justify-between border-b border-border px-5 py-4"><h2 id="overlay-title" className="font-mono text-xl font-black uppercase">{overlay === 'search' ? 'Search the drop' : overlay === 'wishlist' ? 'Wishlist' : 'Your cart'}</h2><OverlayClose onClick={closeOverlay} /></div>{overlay === 'search' ? <div className="flex flex-col gap-6 p-5"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" /><Input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="SEARCH PRODUCTS" className="pl-10" aria-label="Search products" /></div><div className="grid gap-3">{results.length ? results.map((product) => <button key={product.name} className="flex items-center gap-4 border-b border-border pb-3 text-left" onClick={() => { addToCart(products.indexOf(product)); closeOverlay() }}><Image src={product.image} alt="" width={56} height={56} className="size-14 object-cover" /><span><b className="block uppercase">{product.name}</b><small className="text-muted-foreground">{product.price}</small></span></button>) : <p className="text-muted-foreground">No products found. Try another search.</p>}</div></div> : <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">{(overlay === 'wishlist' ? liked : cart).length ? (overlay === 'wishlist' ? liked : Array.from(new Set(cart))).map((index) => <div key={index} className="flex items-center gap-3 border-b border-border pb-4"><Image src={products[index].image} alt="" width={72} height={72} className="size-18 object-cover" /><div className="min-w-0 flex-1"><b className="block truncate uppercase">{products[index].name}</b><span className="text-sm text-muted-foreground">{products[index].price}</span></div>{overlay === 'wishlist' ? <Button variant="ghost" size="icon" onClick={() => toggleLiked(index)} aria-label={`Remove ${products[index].name} from wishlist`}><X /></Button> : <div className="flex items-center gap-1"><Button variant="outline" size="icon" onClick={() => removeCartItem(index)} aria-label={`Remove one ${products[index].name}`}><Minus /></Button><span className="min-w-5 text-center">{cart.filter((item) => item === index).length}</span><Button variant="outline" size="icon" onClick={() => addToCart(index)} aria-label={`Add one ${products[index].name}`}><Plus /></Button></div>}</div>) : <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center"><ShoppingBag className="text-muted-foreground" /><p className="text-muted-foreground">{overlay === 'wishlist' ? 'Your wishlist is empty.' : 'Your cart is empty.'}</p></div>}{overlay === 'cart' && cart.length > 0 && <div className="mt-auto border-t border-border pt-4"><div className="flex justify-between font-mono font-bold uppercase"><span>Total items</span><span>{cart.length}</span></div><Button className="mt-4 w-full" onClick={closeOverlay}>Continue shopping</Button></div>}</div>}</aside></div>}
    </main>
  )
}
