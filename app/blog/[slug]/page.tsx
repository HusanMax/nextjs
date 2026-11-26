import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl">
      <Link href="/blog" className="text-sm text-neutral-400 transition-colors hover:text-emerald-400">
        ← Orqaga
      </Link>
      <h1 className="mt-4 mb-4 text-3xl font-bold">{post.title}</h1>
      <p className="leading-7 text-neutral-300">{post.content}</p>
    </article>
  );
}
