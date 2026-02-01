"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export const CodeBlock = ({ code, language, filename }: CodeBlockProps) => {
  const [html, setHtml] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const highlightCode = async () => {
      try {
        const highlighted = await codeToHtml(code, {
          lang: language || "text",
          theme: "github-dark",
        });
        setHtml(highlighted);
      } catch (error) {
        // Fallback for unsupported languages
        const fallback = await codeToHtml(code, {
          lang: "text",
          theme: "github-dark",
        });
        setHtml(fallback);
      }
    };

    highlightCode();
  }, [code, language]);

  const handleCopy = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Show skeleton with code until syntax highlighting is ready
  if (!html) {
    return (
      <div className="relative group my-6 rounded-lg overflow-hidden border border-border bg-[#0d1117]">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-[#161b22]">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-xs text-muted-foreground font-mono">
                {filename}
              </span>
            )}
            {!filename && language && (
              <span className="text-xs text-muted-foreground font-mono">
                {language}
              </span>
            )}
          </div>
        </div>
        <div className="overflow-x-auto">
          <pre className="!bg-transparent !p-4 !m-0">
            <code className="!bg-transparent text-sm font-mono text-muted-foreground">
              {code}
            </code>
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group my-6 rounded-lg overflow-hidden border border-border bg-[#0d1117]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-[#161b22]">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-xs text-muted-foreground font-mono">
              {filename}
            </span>
          )}
          {!filename && language && (
            <span className="text-xs text-muted-foreground font-mono">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-all",
            "hover:bg-[#238636]/20 hover:text-[#3fb950]",
            copied ? "text-[#3fb950]" : "text-muted-foreground"
          )}
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="size-3" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="size-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <div
          className="code-block [&_pre]:!bg-transparent [&_pre]:!p-4 [&_pre]:!m-0 [&_code]:!bg-transparent [&_code]:text-sm [&_code]:font-mono"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};
