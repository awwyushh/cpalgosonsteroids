import React from 'react'

export type ProblemTier = 'warmup' | 'standard' | 'advanced' | 'killer' | 'legendary'

export interface Problem {
  name: string
  platform: string
  link: string
  difficulty: string
  concepts: string[]
  trick?: string
  why?: string
  editorial?: string
  tier: ProblemTier
}

const tierColors: Record<ProblemTier, string> = {
  warmup:    'text-green-400',
  standard:  'text-blue-400',
  advanced:  'text-yellow-400',
  killer:    'text-orange-400',
  legendary: 'text-purple-400'
}

const tierLabels: Record<ProblemTier, string> = {
  warmup:    'Warm-Up',
  standard:  'Standard',
  advanced:  'Advanced',
  killer:    'Contest Killer',
  legendary: 'Legendary'
}

const platformColors: Record<string, string> = {
  Codeforces: 'bg-blue-500/20 text-blue-300',
  AtCoder:    'bg-gray-500/20 text-gray-300',
  USACO:      'bg-yellow-500/20 text-yellow-300',
  CSES:       'bg-green-500/20 text-green-300',
  SPOJ:       'bg-red-500/20 text-red-300',
  IOI:        'bg-purple-500/20 text-purple-300',
  ICPC:       'bg-indigo-500/20 text-indigo-300',
  POI:        'bg-pink-500/20 text-pink-300',
  BOI:        'bg-teal-500/20 text-teal-300',
  CodeChef:   'bg-amber-500/20 text-amber-300',
  Kattis:     'bg-cyan-500/20 text-cyan-300'
}

function PlatformBadge({ platform }: { platform: string }) {
  const cls = platformColors[platform] || 'bg-gray-500/20 text-gray-300'
  return (
    <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium ${cls}`}>
      {platform}
    </span>
  )
}

function ProblemSection({ tier, problems }: { tier: ProblemTier; problems: Problem[] }) {
  if (!problems.length) return null
  return (
    <div className="mb-6">
      <h4 className={`mb-3 text-sm font-bold uppercase tracking-widest ${tierColors[tier]}`}>
        {tierLabels[tier]} ({problems.length})
      </h4>
      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="problem-table w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-3 py-2 text-left">Problem</th>
              <th className="px-3 py-2 text-left">Platform</th>
              <th className="px-3 py-2 text-left">Difficulty</th>
              <th className="px-3 py-2 text-left">Key Concepts</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((p, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="px-3 py-2.5">
                  <div className="flex flex-col gap-0.5">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-indigo-400 hover:text-indigo-300"
                    >
                      {p.name}
                    </a>
                    {p.why && (
                      <span className="text-xs text-neutral-500">{p.why}</span>
                    )}
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <PlatformBadge platform={p.platform} />
                </td>
                <td className="px-3 py-2.5 text-neutral-300">{p.difficulty}</td>
                <td className="px-3 py-2.5">
                  <div className="flex flex-wrap gap-1">
                    {p.concepts.map((c, j) => (
                      <span
                        key={j}
                        className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-neutral-400"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  {p.trick && (
                    <p className="mt-1 text-xs text-amber-400/80">
                      💡 {p.trick}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function ProblemTable({ problems }: { problems: Problem[] }) {
  const tiers: ProblemTier[] = ['warmup', 'standard', 'advanced', 'killer', 'legendary']
  return (
    <div className="not-prose my-8">
      <h3 className="mb-4 text-lg font-bold">Problem Checklist</h3>
      {tiers.map((tier) => (
        <ProblemSection
          key={tier}
          tier={tier}
          problems={problems.filter((p) => p.tier === tier)}
        />
      ))}
    </div>
  )
}
