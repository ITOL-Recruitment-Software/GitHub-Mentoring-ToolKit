import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface QuizOption {
  id: string
  text: string
  correct: boolean
  feedback: string
}

interface QuizProps {
  question: string
  options: QuizOption[]
  onComplete?: (correct: boolean) => void
}

export default function Quiz({ question, options, onComplete }: QuizProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)

  const handleSelect = (id: string) => {
    if (revealed) return
    setSelected(id)
    setRevealed(true)
    const opt = options.find(o => o.id === id)
    onComplete?.(!!opt?.correct)
  }

  return (
    <div className="p-5 rounded-xl border border-[var(--color-github-border)] bg-[#161b22]">
      <h3 className="font-semibold text-lg mb-4 text-[var(--color-github-text)]">{question}</h3>
      <div className="space-y-3">
        {options.map(opt => {
          const isSelected = selected === opt.id
          const showResult = revealed && isSelected
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`w-full text-left p-3 rounded-lg border transition
                ${isSelected
                  ? opt.correct
                    ? 'border-green-500/60 bg-green-500/10'
                    : 'border-red-500/60 bg-red-500/10'
                  : 'border-[var(--color-github-border)] hover:border-[var(--color-github-accent)]/50'
                }`}
            >
              <div className="flex items-center gap-3">
                {showResult && (opt.correct
                  ? <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  : <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                )}
                <span className="text-[var(--color-github-text)]">{opt.text}</span>
              </div>
              {showResult && (
                <p className="mt-2 text-sm text-[var(--color-github-muted)]">{opt.feedback}</p>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
