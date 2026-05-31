import React from 'react'
import Link from 'next/link'

interface TopicCardProps {
  title: string
  href: string
  description: string
  difficulty?: string
  tags?: string[]
  time?: string
}

const difficultyColors: Record<string, string> = {
  beginner:  'badge-beginner',
  easy:      'badge-easy',
  medium:    'badge-medium',
  hard:      'badge-hard',
  expert:    'badge-expert',
  legendary: 'badge-legendary'
}

export function TopicCard({ title, href, description, difficulty, tags, time }: TopicCardProps) {
  return (
    <Link
      href={href}
      className="not-prose group block rounded-xl border border-white/10 bg-white/3 p-4 transition-all hover:border-indigo-500/40 hover:bg-indigo-500/5"
    >
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="font-semibold text-neutral-100 group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>
        <div className="flex shrink-0 items-center gap-1">
          {time && <span className="text-xs text-neutral-500">{time}</span>}
          {difficulty && (
            <span className={`badge ${difficultyColors[difficulty] || 'badge-medium'}`}>
              {difficulty}
            </span>
          )}
        </div>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-neutral-500"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}

export function TopicGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}
