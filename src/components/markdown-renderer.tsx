"use client";

import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const CodeBlock = dynamic(() => import("./code-block").then(mod => ({ default: mod.CodeBlock })), {
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
        "prose-h1:text-4xl prose-h1:mb-4",
        "prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-[#BFE241]",
        "prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3",
        "prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4",
        "prose-a:text-[#BFE241] prose-a:no-underline hover:prose-a:underline",
        "prose-strong:text-foreground prose-strong:font-semibold",
        "prose-blockquote:border-l-4 prose-blockquote:border-[#BFE241] prose-blockquote:pl-4 prose-blockquote:italic",
        "prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4",
        "prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4",
        "prose-li:text-muted-foreground prose-li:mb-2",
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
              className="text-[#BFE241] bg-muted px-1.5 py-0.5 rounded text-sm font-mono before:content-[''] after:content-['']"
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
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {children}
            </h1>
          );
        },
        h2({ children }) {
          return (
            <h2 className="text-3xl font-bold tracking-tight mt-8 mb-4 text-[#BFE241]">
              {children}
            </h2>
          );
        },
        h3({ children }) {
          return (
            <h3 className="text-2xl font-bold tracking-tight mt-6 mb-3">
              {children}
            </h3>
          );
        },
        a({ href, children }) {
          return (
            <a
              href={href}
              className="text-[#BFE241] no-underline hover:underline"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          );
        },
        blockquote({ children }) {
          return (
            <blockquote className="border-l-4 border-[#BFE241] pl-4 italic my-4 text-muted-foreground">
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
