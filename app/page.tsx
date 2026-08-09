'use client'

import { useState } from 'react'

const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-egyptian-man-urban-XEPrDroFbzy8YqANGRQROvgnNPUO8F.png',
  shirt: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium-shirt-sketch-yU1jnZDKcNcBc0YGtllo0PBbjB8MQn.png',
  jacket: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leather-jacket-sketch-DrSrB4gOQU8wsx38jYKUbXtY9QTrMe.png',
  story: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-09%20192448-evH60w9A30iyF3wJ0kpmxi2PvyVxIm.png',
}

const products = [
  { name: 'URBAN WARRIOR', type: 'LEATHER JACKET', price: 'EGP 2,499', badge: 'BESTSELLER', image: images.jacket },
  { name: 'STREET KING', type: 'PREMIUM SHIRT', price: 'EGP 1,199', badge: 'NEW', image: images.hero },
  { name: 'CITY WALKER', type: 'DESIGNER JEANS', price: 'EGP 1,699', badge: 'LIMITED', image: images.shirt },
]

function Arrow() { return <span aria-hidden="true">→</span> }

export default function Page() {
  const [cart, setCart] = useState(0)
  const [liked, setLiked] = useState<number[]>([])
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <main className={darkMode ? 'site-shell dark-mode' : 'site-shell'}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Town Team home"><span className="brand-mark">◆</span> TOWN TEAM</a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#shop">SHOP</a><a href="#collections">COLLECTIONS</a><a href="#story">STYLE GUIDE</a><a href="#story">ABOUT</a></nav>
        <div className="header-actions"><button aria-label="Search" className="icon-button">⌕</button><button aria-label="Wishlist" className="icon-button">♡</button><button aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} className="icon-button mode-toggle" onClick={() => setDarkMode(!darkMode)}>{darkMode ? '☼' : '◐'}</button><button aria-label="Cart" className="cart-button">▣ <span>{cart}</span></button><a className="button dark small" href="#shop">SHOP NOW</a></div>
      </header>

      <section id="top" className="hero section-grid">
        <div className="hero-copy"><p className="meta-line">EST. 2018 <i /> CAIRO, EGYPT</p><h1>CAIRO<br />STREETS /<br />WHERE STYLE<br />BEGINS</h1><p className="hero-lede">Egyptian streetwear born from the energy of Cairo.<br />Made for dreamers, built for the streets.</p><a className="button rust" href="#collections">SHOP THE DROP <Arrow /></a></div>
        <div className="hero-art"><div className="sketch-frame"><img src={images.hero} alt="Illustrated Egyptian man walking through a Cairo street" /></div></div>
      </section>

      <section id="collections" className="collections section-pad"><div className="section-heading"><div><p className="eyebrow">COLLECTION</p><h2>THE CURRENT DROP</h2></div><span className="season">SS24</span></div><div id="shop" className="product-grid">{products.map((product, index) => <article className="product-card" key={product.name}><div className="product-image"><span className="badge">{product.badge}</span><button className={liked.includes(index) ? 'like active' : 'like'} aria-label={`Add ${product.name} to wishlist`} onClick={() => setLiked(liked.includes(index) ? liked.filter(i => i !== index) : [...liked, index])}>♡</button><img src={product.image} alt={`${product.name} illustrated product`} /></div><p className="product-type">{product.type}</p><h3>{product.name}</h3><p className="price">{product.price}</p><button className="add-button" onClick={() => setCart(cart + 1)}>SHOP NOW <Arrow /></button></article>)}</div></section>

      <section id="story" className="story section-grid"><div className="story-image"><img src={images.story} alt="Open sketchbook, coffee and glasses on a desk" /></div><div className="story-copy"><p className="eyebrow light">OUR STORY <i /></p><h2>BUILT IN CAIRO.<br />WORN<br />EVERYWHERE.</h2><p>TOWN TEAM started in 2018 in the heart of Cairo with a simple belief: style should tell your story. We design for the streets we grew up on, blending Egyptian heritage with modern edge. From Downtown to the world — we rep our city, every day.</p><span className="story-year">2018</span></div></section>

      <section className="community section-pad"><div className="section-heading"><div><p className="eyebrow">COMMUNITY</p><h2>SEEN IN THE STREETS</h2></div></div><div className="quotes"><blockquote><img src={images.hero} alt="Cairo street illustration" /><p>“Town Team pieces fit the vibe of Cairo perfectly.”<small>— AHMED M. / CAIRO</small></p></blockquote><blockquote><img src={images.shirt} alt="Town Team sketch illustration" /><p>“From Alexandria to anywhere, I rep Town Team every step.”<small>— OMAR K. / ALEXANDRIA</small></p></blockquote><blockquote><img src={images.jacket} alt="Town Team jacket illustration" /><p>“Streetwear with Egyptian soul. Proud to wear my city.”<small>— HASSAN A. / GIZA</small></p></blockquote></div></section>

      <div className="ticker">ALEXANDRIA / GIZA / EGYPT / CAIRO / ALEXANDRIA / GIZA / EGYPT / CAIRO /</div>
      <section className="newsletter section-pad"><div><h2>WEAR YOUR CITY</h2><p>EXCLUSIVE DROPS. EARLY ACCESS. STRAIGHT TO YOU.</p></div><form onSubmit={(e) => { e.preventDefault(); if (email) setJoined(true) }}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="ENTER YOUR EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} required /><button className="button rust" type="submit">{joined ? 'YOU ARE IN' : 'JOIN THE TEAM'} <Arrow /></button></form></section>
      <footer><div className="footer-brand"><strong>TOWN TEAM</strong><span>CAIRO, EGYPT<br />EST. 2018</span></div><div className="footer-links"><div><b>SHOP</b><a href="#shop">ALL PRODUCTS</a><a href="#collections">NEW ARRIVALS</a><a href="#collections">BEST SELLERS</a></div><div><b>STORY</b><a href="#story">OUR STORY</a><a href="#story">CRAFTSMANSHIP</a><a href="#story">LOOKBOOK</a></div><div><b>COMMUNITY</b><a href="#top">#TOWNTEAM</a><a href="#top">AMBASSADORS</a><a href="#top">CONTACT US</a></div></div><span className="footer-note">MADE IN CAIRO. WORN EVERYWHERE.</span></footer>
    </main>
  )
}
