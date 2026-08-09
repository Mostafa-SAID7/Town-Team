'use client'

import Link from 'next/link'
import { Heart, Moon, Search, ShoppingBag, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navigation } from '@/data/site'

type SiteHeaderProps = { cart: number; darkMode: boolean; onToggleTheme: () => void }

export function SiteHeader({ cart, darkMode, onToggleTheme }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-foreground text-background">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link href="#top" className="font-mono text-sm font-bold uppercase tracking-[0.2em]" aria-label="Town Team home">
          <span className="mr-2 text-primary">◆</span>Town Team
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.16em] md:flex" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.label} href={item.href} className="transition-colors hover:text-primary">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-background hover:bg-background/10 hover:text-primary" aria-label="Search"><Search /></Button>
          <Button variant="ghost" size="icon" className="hidden text-background hover:bg-background/10 hover:text-primary sm:inline-flex" aria-label="Wishlist"><Heart /></Button>
          <Button variant="ghost" size="icon" className="text-background hover:bg-background/10 hover:text-primary" onClick={onToggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>{darkMode ? <Sun /> : <Moon />}</Button>
          <Button variant="secondary" size="sm" className="ml-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90" aria-label={`Cart with ${cart} items`}><ShoppingBag />{cart}</Button>
        </div>
      </div>
    </header>
  )
}
