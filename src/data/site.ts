export type Product = { name: string; type: string; price: string; badge: string; image: string }

export const navigation = [
  { label: 'Collections', href: '#collections' },
  { label: 'Shop', href: '#shop' },
  { label: 'Story', href: '#story' },
  { label: 'Community', href: '#community' },
]

export const images = {
  hero: '/images/hero.png',
  shirt: '/images/shirt.png',
  jacket: '/images/jacket.png',
  story: '/images/story.png',
}

export const products: Product[] = [
  { name: 'Urban Warrior', type: 'Leather jacket', price: 'EGP 2,499', badge: 'Bestseller', image: images.jacket },
  { name: 'Street King', type: 'Premium shirt', price: 'EGP 1,199', badge: 'New', image: images.hero },
  { name: 'City Walker', type: 'Designer jeans', price: 'EGP 1,699', badge: 'Limited', image: images.shirt },
]

export const testimonials = [
  { quote: 'Town Team pieces fit the vibe of Cairo perfectly.', author: 'Ahmed M. / Cairo', image: images.hero },
  { quote: 'From Alexandria to anywhere, I rep Town Team every step.', author: 'Omar K. / Alexandria', image: images.shirt },
  { quote: 'Streetwear with Egyptian soul. Proud to wear my city.', author: 'Hassan A. / Giza', image: images.jacket },
]

export const footerGroups = [
  { title: 'Shop', links: ['All products', 'New arrivals', 'Best sellers'] },
  { title: 'Story', links: ['Our story', 'Craftsmanship', 'Lookbook'] },
  { title: 'Community', links: ['#TownTeam', 'Ambassadors', 'Contact us'] },
]

export const tickerItems = ['Alexandria', 'Giza', 'Egypt', 'Cairo']
