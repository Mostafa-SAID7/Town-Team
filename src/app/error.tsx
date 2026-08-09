'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle, Home, RotateCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error boundary caught:', error)
  }, [error])

  return (
    <main className="site-shell flex min-h-screen items-center justify-center bg-background px-5">
      <div className="flex max-w-md flex-col items-center gap-8 text-center">
        <div className="flex items-center justify-center rounded-xl bg-muted p-6">
          <AlertCircle className="size-16 text-destructive" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-mono text-4xl font-black uppercase tracking-[-0.05em] text-foreground">
            Something went wrong
          </h1>
          <p className="text-sm text-muted-foreground">
            We encountered an unexpected error. Please try again or return home.
          </p>
          {process.env.NODE_ENV === 'development' && error.message && (
            <code className="mt-4 rounded bg-card px-4 py-2 text-xs text-destructive">
              {error.message}
            </code>
          )}
        </div>
        <div className="flex w-full flex-col gap-3">
          <Button onClick={reset} className="w-full">
            <RotateCcw className="mr-2 size-4" />
            Try again
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/">
              <Home className="mr-2 size-4" />
              Back home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
