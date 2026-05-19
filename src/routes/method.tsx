import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/method')({
  component: Method,
})

function Method() {
  return (
    <div className="p-10 font-mono">
      <h1 className="text-2xl font-bold uppercase tracking-tighter mb-6">/The_Method</h1>
      <p className="text-muted-foreground">A deliberate cadence built around the time-on-task realities of senior operators.</p>
    </div>
  )
}
