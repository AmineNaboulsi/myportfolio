import { BlogCard } from "@/components/blog-card";
import BlurFade from "@/components/magicui/blur-fade";
import { getAllBlogPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles and tutorials on DevOps, Architecture, and Modern Development",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const allBlogs = getAllBlogPosts();
  const sortedBlogs = allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredBlogs = sortedBlogs.filter(blog => blog.featured);
  const otherBlogs = sortedBlogs.filter(blog => !blog.featured);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="blog-hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Blog
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <p className="text-muted-foreground md:text-xl">
                Technical articles, tutorials, and insights on DevOps, Software Architecture, 
                Cloud Computing, and Modern Development Practices.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {featuredBlogs.length > 0 && (
        <section id="featured-posts">
          <div className="space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-2xl font-bold text-[#BFE241]">Featured Posts</h2>
            </BlurFade>
            <div className="grid grid-cols-1 gap-6">
              {featuredBlogs.map((blog, index) => (
                <BlurFade key={blog.id} delay={BLUR_FADE_DELAY * 4 + index * 0.05}>
                  <BlogCard
                    id={blog.id}
                    title={blog.title}
                    slug={blog.slug}
                    description={blog.description}
                    date={blog.date}
                    readTime={blog.readTime}
                    category={blog.category}
                    tags={blog.tags}
                    image={blog.image}
                    featured={blog.featured}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      {otherBlogs.length > 0 && (
        <section id="all-posts">
          <div className="space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-2xl font-bold text-[#BFE241]">All Posts</h2>
            </BlurFade>
            <div className="grid grid-cols-1 gap-6">
              {otherBlogs.map((blog, index) => (
                <BlurFade key={blog.id} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
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
          </div>
        </section>
      )}

      {sortedBlogs.length === 0 && (
        <section id="no-posts">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          </BlurFade>
        </section>
      )}
    </main>
  );
}
