import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="p-10 font-mono">
      <h1 className="text-2xl font-bold uppercase tracking-tighter mb-6">/Initialize_Contact</h1>
      <p className="text-muted-foreground">Selective entry. Apply for a technical engagement or infrastructure audit.</p>
    </div>
  )
}
