import Link from 'next/link'

export function PageFooter({ note }: { note: string }) {
  return (
    <footer className="page-footer">
      <Link href="/">← Back to studio</Link>
      <span>{note}</span>
    </footer>
  )
}
