'use client'

import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-5 text-center">
      <p className="motion-reveal font-mono text-sm font-bold uppercase tracking-[0.2em] text-primary" style={{ '--motion-delay': '0ms' } as React.CSSProperties}>
        Town Team / 404
      </p>
      <h1 className="motion-reveal max-w-2xl font-mono text-6xl font-black uppercase leading-none tracking-[-0.06em] text-balance sm:text-8xl" style={{ '--motion-delay': '120ms' } as React.CSSProperties}>
        This street doesn&apos;t exist.
      </h1>
      <p className="motion-reveal max-w-md leading-relaxed text-muted-foreground" style={{ '--motion-delay': '240ms' } as React.CSSProperties}>
        The page you&apos;re looking for has moved, but the city is still waiting.
      </p>
      <Button className="motion-button mt-4" onClick={() => window.location.assign('/')} style={{ '--motion-delay': '360ms' } as React.CSSProperties}>
        <ArrowLeft data-icon="inline-start" />
        Back home
      </Button>
    </main>
  )
}
