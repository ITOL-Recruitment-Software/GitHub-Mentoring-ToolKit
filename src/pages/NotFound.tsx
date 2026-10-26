import { ArrowLeft, House, SearchX } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

/** Helpful fallback for unknown URLs so navigation never ends on a blank screen. */
export default function NotFound() {
  const location = useLocation()

  return (
    <section className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-10">
      <div className="w-full max-w-xl rounded-2xl border border-[var(--color-github-border)] bg-[#0d1117] p-6 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
          <SearchX size={26} aria-hidden="true" />
        </div>
        <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Error 404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--color-github-text)]">This page is not in the toolkit</h1>
        <p className="mt-3 text-sm leading-6 text-[var(--color-github-muted)]">
          The address may be out of date or the page may have moved. You can return to the start or go back to the page you were viewing.
        </p>
        <p className="mt-4 break-all rounded-lg border border-[var(--color-github-border)] bg-[#161b22] px-3 py-2 font-mono text-xs text-[var(--color-github-muted)]">
          {location.pathname}
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2ea043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">
            <House size={16} aria-hidden="true" /> Go to home
          </Link>
          <button type="button" onClick={() => window.history.back()} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-3 text-sm font-semibold text-[var(--color-github-text)] transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">
            <ArrowLeft size={16} aria-hidden="true" /> Go back
          </button>
        </div>
      </div>
    </section>
  )
}
