import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="text-emerald-400">MyApp</span> ga xush kelibsiz
      </h1>
      <p className="max-w-xl text-neutral-400">
        Next.js va Tailwind CSS bilan qurilgan oddiy ilova.
      </p>
      <Link
        href="/blog"
        className="rounded-full bg-emerald-500 px-6 py-2.5 font-medium text-neutral-950 transition-colors hover:bg-emerald-400"
      >
        Blogni ko'rish
      </Link>
    </section>
  );
}
