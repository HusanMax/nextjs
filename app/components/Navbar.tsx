import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-emerald-400">
          MyApp
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Bosh sahifa
          </Link>
          <Link href="/blog" className="hover:text-emerald-400 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">
            Haqida
          </Link>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors">
            Aloqa
          </Link>
        </div>
      </nav>
    </header>
  );
}