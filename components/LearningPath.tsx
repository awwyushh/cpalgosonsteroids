import React from 'react'
import Link from 'next/link'

interface Step {
  title: string
  href: string
  time?: string
  description?: string
  difficulty?: string
}

const difficultyColors: Record<string, string> = {
  beginner:  'text-green-400',
  easy:      'text-emerald-400',
  medium:    'text-yellow-400',
  hard:      'text-orange-400',
  expert:    'text-red-400',
  legendary: 'text-purple-400'
}

export function LearningPath({ steps, title }: { steps: Step[]; title?: string }) {
  return (
    <div className="not-prose my-6">
      {title && (
        <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-neutral-400">
          {title}
        </h3>
      )}
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-indigo-500/30" />
        {steps.map((step, i) => (
          <div key={i} className="lp-step relative mb-3">
            <div className="absolute -left-8 lp-step-num">{i + 1}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <Link
                  href={step.href}
                  className="font-semibold text-indigo-300 hover:text-indigo-200"
                >
                  {step.title}
                </Link>
                {step.difficulty && (
                  <span
                    className={`text-xs font-medium ${
                      difficultyColors[step.difficulty] || 'text-neutral-400'
                    }`}
                  >
                    {step.difficulty}
                  </span>
                )}
                {step.time && (
                  <span className="text-xs text-neutral-500">~{step.time}</span>
                )}
              </div>
              {step.description && (
                <p className="mt-0.5 text-sm text-neutral-400">{step.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
