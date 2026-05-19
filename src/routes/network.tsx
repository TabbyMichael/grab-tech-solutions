import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/network')({
  component: Network,
})

function Network() {
  return (
    <div className="p-10 font-mono">
      <h1 className="text-2xl font-bold uppercase tracking-tighter mb-6">/Advisory_Network</h1>
      <p className="text-muted-foreground">Access a global network of principal engineering talent and technical leaders.</p>
    </div>
  )
}
