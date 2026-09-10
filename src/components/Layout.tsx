import type { ReactNode } from 'react'
import Nav from './Nav'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <Nav />
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <p>omniarium — a personal collection of notes.</p>
      </footer>
    </div>
  )
}
