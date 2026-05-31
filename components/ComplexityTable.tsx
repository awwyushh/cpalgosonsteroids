import React from 'react'

interface Row {
  operation: string
  time: string
  space?: string
  note?: string
}

export function ComplexityTable({ rows }: { rows: Row[] }) {
  return (
    <div className="not-prose my-4 callout-complexity">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
        Complexity Summary
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-amber-500/20">
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Operation
              </th>
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Time
              </th>
              {rows.some((r) => r.space) && (
                <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Space
                </th>
              )}
              {rows.some((r) => r.note) && (
                <th className="pb-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Note
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-1.5 pr-4 font-mono text-neutral-300">{r.operation}</td>
                <td className="py-1.5 pr-4 font-mono text-amber-300">{r.time}</td>
                {rows.some((x) => x.space) && (
                  <td className="py-1.5 pr-4 font-mono text-blue-300">{r.space || '—'}</td>
                )}
                {rows.some((x) => x.note) && (
                  <td className="py-1.5 text-xs text-neutral-500">{r.note || ''}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
