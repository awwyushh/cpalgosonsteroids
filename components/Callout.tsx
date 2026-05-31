import React from 'react'

type CalloutType = 'theorem' | 'proof' | 'complexity' | 'warning' | 'tip' | 'info'

const configs: Record<CalloutType, { label: string; icon: string; cls: string }> = {
  theorem:    { label: 'Theorem',    icon: '📐', cls: 'callout-theorem' },
  proof:      { label: 'Proof',      icon: '✓',  cls: 'callout-proof' },
  complexity: { label: 'Complexity', icon: '⏱',  cls: 'callout-complexity' },
  warning:    { label: 'Warning',    icon: '⚠',  cls: 'callout-warning' },
  tip:        { label: 'Tip',        icon: '💡', cls: 'callout-tip' },
  info:       { label: 'Info',       icon: 'ℹ',  cls: 'callout-tip' }
}

export function Callout({
  type = 'tip',
  title,
  children
}: {
  type?: CalloutType
  title?: string
  children: React.ReactNode
}) {
  const cfg = configs[type]
  return (
    <div className={`not-prose ${cfg.cls}`}>
      <p className="mb-1 text-xs font-bold uppercase tracking-widest opacity-70">
        {cfg.icon} {title || cfg.label}
      </p>
      <div className="text-sm leading-relaxed [&_p]:my-1 [&_ul]:my-1 [&_li]:my-0.5">
        {children}
      </div>
    </div>
  )
}
