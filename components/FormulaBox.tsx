import React from 'react'

interface Formula {
  name: string
  latex: string
  note?: string
}

export function FormulaBox({ title, formulas }: { title?: string; formulas: Formula[] }) {
  return (
    <div className="not-prose my-4 rounded-lg border border-indigo-500/20 bg-gradient-to-br from-indigo-950/40 to-transparent p-4">
      {title && (
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-400">
          {title}
        </p>
      )}
      <div className="space-y-2">
        {formulas.map((f, i) => (
          <div key={i} className="flex flex-col gap-0.5">
            <span className="text-xs font-medium text-neutral-400">{f.name}</span>
            <div
              className="rounded bg-black/30 px-3 py-2 font-mono text-sm text-indigo-200"
              dangerouslySetInnerHTML={{ __html: f.latex }}
            />
            {f.note && <span className="text-xs text-neutral-500">{f.note}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
