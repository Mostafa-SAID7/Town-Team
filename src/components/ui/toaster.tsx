'use client'

import * as React from 'react'
import { X } from 'lucide-react'

export type Toast = {
  id: string
  title: string
  description?: string
  type: 'success' | 'error' | 'info' | 'warning'
  duration?: number
}

const ToastContext = React.createContext<{
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
} | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const addToast = React.useCallback((toast: Omit<Toast, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random()}`
    const duration = toast.duration ?? 3000

    setToasts((prev) => [...prev, { ...toast, id }])

    if (duration > 0) {
      const timer = window.setTimeout(() => {
        removeToast(id)
      }, duration)
      return () => window.clearTimeout(timer)
    }
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast toast={toast} onClose={() => removeToast(toast.id)} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

function Toast({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  const bgColors = {
    success: 'bg-background border border-primary/30 dark:bg-card dark:border-primary/40',
    error: 'bg-background border border-destructive/30 dark:bg-card dark:border-destructive/40',
    info: 'bg-background border border-primary/30 dark:bg-card dark:border-primary/40',
    warning: 'bg-background border border-primary/40 dark:bg-card dark:border-primary/50',
  }

  const textColors = {
    success: 'text-foreground',
    error: 'text-destructive dark:text-destructive/80',
    info: 'text-foreground',
    warning: 'text-primary dark:text-primary/90',
  }

  const accentColors = {
    success: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary',
    error: 'bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive',
    info: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary',
    warning: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary',
  }

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  }

  return (
    <div
      className={`motion-reveal flex items-start gap-3 rounded-md ${bgColors[toast.type]} ${textColors[toast.type]} px-4 py-3 transition-all shadow-sm`}
      style={{ '--motion-delay': '0ms' } as React.CSSProperties}
    >
      <span className={`${accentColors[toast.type]} size-6 rounded-sm flex items-center justify-center font-bold text-sm shrink-0`}>{icons[toast.type]}</span>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm leading-tight">{toast.title}</h3>
        {toast.description && <p className="text-xs mt-1.5 opacity-75">{toast.description}</p>}
      </div>
      <button
        onClick={onClose}
        className="shrink-0 opacity-60 hover:opacity-100 transition-opacity ml-2"
        aria-label="Close notification"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}
