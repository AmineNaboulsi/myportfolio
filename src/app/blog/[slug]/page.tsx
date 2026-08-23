import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

/**
 * A post.
 *
 * The header is a masthead rather than a row of badges: a tracked label for the
 * category, the title at full size, the summary in the same muted grey the
 * index uses, and the metadata on one hairline-separated line beneath. Reading
 * order is title, summary, body — the date and read time are there to be found,
 * not to be read first.
 */
export default function BlogPost({ params }: BlogPostProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-8">
      <BackLink label="Back to blog" />

      <article className="space-y-6">
        <header className="space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
            {post.category}
          </p>

          <h1 className="text-4xl font-bold tracking-tighter text-ink sm:text-5xl">
            {post.title}
          </h1>

          <p className="text-lg leading-relaxed text-ink-muted">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 border-t border-line pt-4 text-[11px] text-ink-faint">
            <time dateTime={date.toISOString()} className="tabular-nums">
              {formattedDate}
            </time>
            <span aria-hidden>·</span>
            <span className="tabular-nums">{post.readTime}</span>

            {post.tags.length > 0 ? (
              <span className="ml-auto flex flex-wrap gap-1.5">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded border border-line px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </span>
            ) : null}
          </div>
        </header>

        <div className="border-t border-line pt-8">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>

      <footer className="mt-12 border-t border-line pt-8">
        <BackLink label="Back to all posts" />
      </footer>
    </main>
  );
}

function BackLink({ label }: { label: string }) {
  return (
    <Link
      href="/blog"
      className="group flex w-fit items-center gap-2 text-[13px] text-ink-muted transition-colors hover:text-ink"
    >
      <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
      {label}
    </Link>
  );
}
