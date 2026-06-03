export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b">
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
          <span className="font-bold">Little Athlete</span>
          <span className="text-muted-foreground text-sm">v2 — header placeholder</span>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t p-4 text-center text-muted-foreground text-sm">
        footer placeholder
      </footer>
    </>
  )
}
