'use client'

import Link from 'next/link'
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { navigation } from '@/data/site'

type SiteHeaderProps = {
  cart: number
  wishlist: number
  darkMode: boolean
  onToggleTheme: () => void
  onOpenSearch: () => void
  onOpenWishlist: () => void
  onOpenCart: () => void
}

export function SiteHeader({ cart, wishlist, darkMode, onToggleTheme, onOpenSearch, onOpenWishlist, onOpenCart }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-foreground text-background">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-5 lg:px-8">
        <Link href="#top" onClick={closeMenu} className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.2em]" aria-label="Town Team home">
          <span className="mr-1 text-primary sm:mr-2">◆</span>Town Team
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.16em] md:flex" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.label} href={item.href} className="transition-colors hover:text-primary">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <div className="hidden items-center gap-0.5 sm:flex">
            <Button variant="ghost" size="icon" className="text-background hover:bg-background/10 hover:text-primary" onClick={onOpenSearch} aria-label="Open search"><Search /></Button>
            <Button variant="ghost" size="icon" className="relative text-background hover:bg-background/10 hover:text-primary" onClick={onOpenWishlist} aria-label={`Open wishlist with ${wishlist} items`}><Heart />{wishlist > 0 && <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{wishlist}</span>}</Button>
          </div>
          <Button variant="ghost" size="icon" className="text-background hover:bg-background/10 hover:text-primary" onClick={onToggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>{darkMode ? <Sun /> : <Moon />}</Button>
          <Button variant="secondary" size="sm" className="ml-1 gap-1.5 bg-primary px-2.5 text-primary-foreground hover:bg-primary/90 sm:gap-2 sm:px-3" onClick={onOpenCart} aria-label={`Open cart with ${cart} items`}><ShoppingBag />{cart}</Button>
          <Button variant="ghost" size="icon" className="md:hidden text-background hover:bg-background/10 hover:text-primary" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {menuOpen && <div id="mobile-navigation" className="border-t border-background/20 bg-foreground px-4 pb-5 pt-3 text-background sm:px-5 md:hidden"><nav className="flex flex-col" aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.label} href={item.href} onClick={closeMenu} className="border-b border-background/15 py-4 font-mono text-sm font-bold uppercase tracking-[0.14em] hover:text-primary">{item.label}</Link>)}</nav><div className="grid grid-cols-2 gap-2 pt-4"><Button variant="secondary" className="justify-start gap-2 bg-background/10 text-background hover:bg-background/20" onClick={() => { closeMenu(); onOpenSearch() }}><Search />Search</Button><Button variant="secondary" className="justify-start gap-2 bg-background/10 text-background hover:bg-background/20" onClick={() => { closeMenu(); onOpenWishlist() }}><Heart />Wishlist {wishlist > 0 && `(${wishlist})`}</Button></div></div>}
    </header>
  )
}

export function OverlayClose({ onClick }: { onClick: () => void }) {
  return <Button variant="ghost" size="icon" onClick={onClick} aria-label="Close"><X /></Button>
}

