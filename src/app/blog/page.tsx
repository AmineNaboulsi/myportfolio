import { Metadata } from "next";

import { BlogCard } from "@/components/blog-card";
import BlurFade from "@/components/magicui/blur-fade";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles and tutorials on DevOps, Architecture, and Modern Development",
};

const BLUR_FADE_DELAY = 0.04;

/**
 * The blog index, in YouLearn's idiom: monochrome, and structured as a list
 * rather than a wall of cards. Section headings are small tracked labels
 * instead of coloured titles — they name a group without competing with the
 * post titles underneath, which are the only thing here worth reading first.
 */
export default function BlogPage() {
  const allBlogs = getAllBlogPosts();
  const sortedBlogs = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const featuredBlogs = sortedBlogs.filter((blog) => blog.featured);
  const otherBlogs = sortedBlogs.filter((blog) => !blog.featured);

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-12">
      <section id="blog-hero">
        <div className="mx-auto w-full max-w-2xl space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
              Writing
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-4xl font-bold tracking-tighter text-ink sm:text-5xl">
              Blog
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-[15px] leading-relaxed text-ink-muted">
              Notes on DevOps, software architecture, cloud infrastructure and
              the parts of modern development that only show up in production.
            </p>
          </BlurFade>
        </div>
      </section>

      {featuredBlogs.length > 0 && (
        <PostList
          label="Featured"
          posts={featuredBlogs}
          delay={BLUR_FADE_DELAY * 4}
        />
      )}

      {otherBlogs.length > 0 && (
        <PostList
          label={featuredBlogs.length > 0 ? "Everything else" : "All posts"}
          posts={otherBlogs}
          delay={BLUR_FADE_DELAY * 6}
        />
      )}

      {sortedBlogs.length === 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="rounded-card border border-line bg-surface-sunk px-5 py-12 text-center">
            <p className="text-[15px] font-medium text-ink">Nothing here yet</p>
            <p className="mt-1 text-[13px] text-ink-muted">
              The first post is being written. Check back soon.
            </p>
          </div>
        </BlurFade>
      )}
    </main>
  );
}

/**
 * Hairlines by `divide-y`, not by YouLearn's `gap-px` over a coloured
 * container. Same result, and it survives the entrance animation: rows here
 * start at opacity 0 and fade in as they scroll into view, and a container
 * painted `bg-line` behind them shows as a solid grey slab until they arrive.
 * Dividers between children have nothing to show through.
 */
function PostList({
  label,
  posts,
  delay,
}: {
  label: string;
  posts: ReturnType<typeof getAllBlogPosts>;
  delay: number;
}) {
  return (
    <section className="space-y-3">
      <BlurFade delay={delay}>
        <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
          {label}
        </h2>
      </BlurFade>

      <div className="grid divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
        {posts.map((blog, index) => (
          <BlurFade key={blog.id} delay={delay + index * 0.05}>
            <BlogCard
              id={blog.id}
              title={blog.title}
              slug={blog.slug}
              description={blog.description}
              date={new Date(blog.date)}
              readTime={blog.readTime}
              category={blog.category}
              tags={blog.tags}
              image={blog.image}
              featured={blog.featured}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
