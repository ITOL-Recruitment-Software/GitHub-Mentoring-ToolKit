import { ReactNode } from 'react'
import { Info, Lightbulb, AlertTriangle, AlertCircle } from 'lucide-react'

type CalloutVariant = 'note' | 'tip' | 'warning' | 'danger'

interface CalloutProps {
  variant?: CalloutVariant
  title?: string
  children: ReactNode
}

const config = {
  note: {
    icon: Info,
    className: 'callout-note',
    defaultTitle: 'Note',
  },
  tip: {
    icon: Lightbulb,
    className: 'callout-tip',
    defaultTitle: 'Tip',
  },
  warning: {
    icon: AlertTriangle,
    className: 'callout-warning',
    defaultTitle: 'Warning',
  },
  danger: {
    icon: AlertCircle,
    className: 'callout-danger',
    defaultTitle: 'Important',
  },
}

export default function Callout({ variant = 'note', title, children }: CalloutProps) {
  const { icon: Icon, className, defaultTitle } = config[variant]
  return (
    <div className={`callout ${className}`}>
      <Icon size={18} className="mt-0.5 shrink-0 opacity-90" />
      <div className="min-w-0 flex-1">
        <p className="callout-title">{title ?? defaultTitle}</p>
        <div className="callout-body">{children}</div>
      </div>
    </div>
  )
}
