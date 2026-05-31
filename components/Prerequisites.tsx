import React from 'react'
import Link from 'next/link'

interface Prereq {
  title: string
  href: string
}

export function Prerequisites({ items }: { items: Prereq[] }) {
  if (!items.length) return null
  return (
    <div className="not-prose my-4 rounded-lg border border-indigo-500/20 bg-indigo-500/5 px-4 py-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-400">
        Prerequisites
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="inline-flex items-center gap-1 rounded-md bg-indigo-600/20 px-2.5 py-1 text-sm text-indigo-300 hover:bg-indigo-600/40 transition-colors"
          >
            {p.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
