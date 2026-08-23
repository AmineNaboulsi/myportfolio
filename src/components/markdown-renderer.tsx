"use client";

import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const CodeBlock = dynamic(() => import("./code-block").then(mod => mod.CodeBlock), {
  ssr: false,
  loading: () => (
    <div className="relative group my-6 rounded-lg overflow-hidden border border-border bg-[#0d1117]">
      <div className="overflow-x-auto">
        <pre className="!bg-transparent !p-4 !m-0">
          <code className="!bg-transparent text-sm font-mono text-muted-foreground">
            Loading...
          </code>
        </pre>
      </div>
    </div>
  ),
});

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer = ({ content, className }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      className={cn(
        "prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none",
        "prose-headings:font-bold prose-headings:tracking-tight",
        "prose-h1:text-4xl prose-h1:mb-4 prose-h1:text-ink",
        "prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-ink",
        "prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-ink",
        "prose-p:text-ink-muted prose-p:leading-relaxed prose-p:mb-4",
        "prose-a:text-ink prose-a:underline prose-a:decoration-ink-ghost prose-a:underline-offset-4 hover:prose-a:decoration-ink",
        "prose-strong:text-ink prose-strong:font-semibold",
        "prose-blockquote:border-l-2 prose-blockquote:border-line-strong prose-blockquote:pl-4 prose-blockquote:not-italic prose-blockquote:text-ink-soft",
        "prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4",
        "prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4",
        "prose-li:text-ink-muted prose-li:mb-2 prose-li:marker:text-ink-ghost",
        className
      )}
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const code = String(children).replace(/\n$/, "");
          const language = match ? match[1] : "";

          if (language) {
            return <CodeBlock code={code} language={language} />;
          }

          return (
            <code
              className="rounded border border-line bg-surface-sunk px-1.5 py-0.5 font-mono text-[0.85em] text-ink before:content-[''] after:content-['']"
              {...props}
            >
              {children}
            </code>
          );
        },
        pre({ children }) {
          return <>{children}</>;
        },
        h1({ children }) {
          return (
            <h1 className="mb-4 text-4xl font-bold tracking-tighter text-ink">
              {children}
            </h1>
          );
        },
        h2({ children }) {
          return (
            <h2 className="mb-4 mt-10 border-b border-line pb-2 text-2xl font-bold tracking-tight text-ink">
              {children}
            </h2>
          );
        },
        h3({ children }) {
          return (
            <h3 className="mb-3 mt-6 text-xl font-semibold tracking-tight text-ink">
              {children}
            </h3>
          );
        },
        a({ href, children }) {
          return (
            <a
              href={href}
              className="text-ink underline decoration-ink-ghost underline-offset-4 transition-colors hover:decoration-ink"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          );
        },
        blockquote({ children }) {
          return (
            <blockquote className="my-5 border-l-2 border-line-strong pl-4 text-ink-soft">
              {children}
            </blockquote>
          );
        },
        img({ src, alt }) {
          return (
            <span className="block my-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={src} 
                alt={alt || ""} 
                className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                loading="lazy"
              />
              {alt && (
                <span className="block text-sm text-muted-foreground text-center mt-2 italic">
                  {alt}
                </span>
              )}
            </span>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
