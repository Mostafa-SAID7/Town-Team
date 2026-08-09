'use client'

import Link from 'next/link'
import { Heart, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react'
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
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-foreground text-background">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 lg:px-8">
        <Link href="#top" className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.2em]" aria-label="Town Team home">
          <span className="mr-1 text-primary sm:mr-2">◆</span>Town Team
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.16em] md:flex" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.label} href={item.href} className="transition-colors hover:text-primary">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <Button variant="ghost" size="icon" className="text-background hover:bg-background/10 hover:text-primary" onClick={onOpenSearch} aria-label="Open search"><Search /></Button>
          <Button variant="ghost" size="icon" className="relative text-background hover:bg-background/10 hover:text-primary" onClick={onOpenWishlist} aria-label={`Open wishlist with ${wishlist} items`}><Heart />{wishlist > 0 && <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{wishlist}</span>}</Button>
          <Button variant="ghost" size="icon" className="text-background hover:bg-background/10 hover:text-primary" onClick={onToggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>{darkMode ? <Sun /> : <Moon />}</Button>
          <Button variant="secondary" size="sm" className="ml-1 gap-1.5 bg-primary px-2.5 text-primary-foreground hover:bg-primary/90 sm:gap-2 sm:px-3" onClick={onOpenCart} aria-label={`Open cart with ${cart} items`}><ShoppingBag />{cart}</Button>
        </div>
      </div>
    </header>
  )
}

export function OverlayClose({ onClick }: { onClick: () => void }) {
  return <Button variant="ghost" size="icon" onClick={onClick} aria-label="Close"><X /></Button>
}

