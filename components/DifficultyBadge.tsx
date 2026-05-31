import React from 'react'

type Difficulty = 'beginner' | 'easy' | 'medium' | 'hard' | 'expert' | 'legendary'

const labels: Record<Difficulty, string> = {
  beginner:  'Beginner',
  easy:      'Easy',
  medium:    'Medium',
  hard:      'Hard',
  expert:    'Expert',
  legendary: 'Legendary'
}

export function DifficultyBadge({ level }: { level: Difficulty }) {
  return (
    <span className={`badge badge-${level}`}>
      {labels[level]}
    </span>
  )
}
