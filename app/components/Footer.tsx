"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm sm:flex-row">
        <p>© {year} MyApp. Barcha huquqlar himoyalangan.</p>

        <div className="flex items-center gap-5">
          <Link href="/about" className="hover:text-white transition-colors">
            Haqida
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Aloqa
          </Link>
        </div>
      </div>
    </footer>
  );
}