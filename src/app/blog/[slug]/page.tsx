import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Metadata } from "next";

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

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
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

export default function BlogPost({ params }: BlogPostProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <Link 
        href="/blog" 
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#BFE241] transition-colors w-fit"
      >
        <ArrowLeft className="size-4" />
        Back to Blog
      </Link>

      <article className="space-y-6">
        <header className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="size-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="size-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="hover:border-[#BFE241] hover:text-[#BFE241] transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="border-t border-border pt-8">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>

      <footer className="border-t border-border pt-8 mt-12">
        <Link 
          href="/blog" 
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#BFE241] transition-colors w-fit"
        >
          <ArrowLeft className="size-4" />
          Back to all posts
        </Link>
      </footer>
    </main>
  );
}
