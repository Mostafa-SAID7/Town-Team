import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-5 text-center"><p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-primary">Town Team / 404</p><h1 className="max-w-2xl font-mono text-6xl font-black uppercase leading-none tracking-[-0.06em] text-balance sm:text-8xl">This street doesn&apos;t exist.</h1><p className="max-w-md leading-relaxed text-muted-foreground">The page you&apos;re looking for has moved, but the city is still waiting.</p><Button onClick={() => window.location.assign('/')}><ArrowLeft data-icon="inline-start" />Back home</Button></main>
}
