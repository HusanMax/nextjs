import Link from "next/link";
import { posts } from "../lib/posts";

export default function BlogPage() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Blog</h1>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block h-full rounded-xl border border-neutral-800 bg-neutral-950 p-5 transition-colors hover:border-emerald-400"
            >
              <h2 className="mb-2 text-lg font-semibold text-emerald-400">{post.title}</h2>
              <p className="text-sm text-neutral-400">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
