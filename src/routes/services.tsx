import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: Services,
})

function Services() {
  return (
    <div className="p-10 font-mono">
      <h1 className="text-2xl font-bold uppercase tracking-tighter mb-6">/Core_Services</h1>
      <p className="text-muted-foreground">Strategic technical advisory for high-growth engineering organizations.</p>
    </div>
  )
}
