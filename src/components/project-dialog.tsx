"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

import { TechChip } from "@/components/tech-chip";
import { cn } from "@/lib/utils";

export interface ProjectMedia {
  /** Anything a browser renders inline: png, jpg, gif, svg, mp4, webm. */
  src: string;
  /** Shown under the frame. Say what the picture is, not that it is a picture. */
  caption?: string;
}

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  href?: string;
  dates: string;
  description: string;
  tags: readonly string[];
  media: ProjectMedia[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

/**
 * A project, opened.
 *
 * The card can hold a title and a row of tags; this is where the rest goes —
 * every screenshot, the animated ones, the architecture diagram, and the full
 * technology list with each mark in its own colour.
 *
 * Radix owns the behaviour (focus trap, escape, scroll lock, aria) and
 * tailwindcss-animate owns the entrance, matching the dialog the navbar
 * already used. Media is plain <img> rather than next/image: an SVG diagram
 * and an animated GIF both survive that, and neither survives the optimizer
 * unchanged.
 */
export function ProjectDialog({
  open,
  onOpenChange,
  title,
  href,
  dates,
  description,
  tags,
  media,
  links,
}: ProjectDialogProps) {
  const [active, setActive] = useState(0);
  const current = media[Math.min(active, media.length - 1)];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 w-[calc(100vw-2rem)] max-w-3xl translate-x-[-50%] translate-y-[-50%]",
            "max-h-[88vh] overflow-y-auto rounded-card border border-line bg-surface shadow-2xl",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-top-[46%] data-[state=open]:slide-in-from-top-[46%]",
            "duration-200",
          )}
        >
          <Dialog.Close className="absolute right-3 top-3 z-10 rounded-md border border-line bg-surface/80 p-1.5 text-ink-muted backdrop-blur transition-colors hover:text-ink">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          {current ? (
            <figure className="border-b border-line bg-surface-sunk">
              <div className="flex max-h-[46vh] items-center justify-center overflow-hidden">
                {isVideo(current.src) ? (
                  <video
                    key={current.src}
                    src={current.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-contain"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={current.src}
                    src={current.src}
                    alt={current.caption ?? title}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>

              {current.caption ? (
                <figcaption className="border-t border-line px-5 py-2 text-[11px] text-ink-muted">
                  {current.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          {/* Thumbnails only when there is a choice to make. */}
          {media.length > 1 ? (
            <div className="flex gap-2 overflow-x-auto border-b border-line px-5 py-3">
              {media.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={item.caption ?? `View ${index + 1}`}
                  aria-current={index === active}
                  className={cn(
                    "h-12 w-20 shrink-0 overflow-hidden rounded border bg-surface-sunk transition-colors",
                    index === active
                      ? "border-ink"
                      : "border-line hover:border-line-strong",
                  )}
                >
                  {isVideo(item.src) ? (
                    <video src={item.src} muted className="size-full object-cover" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.src}
                      alt=""
                      className="size-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          ) : null}

          <div className="space-y-5 p-5 sm:p-6">
            <header className="space-y-1.5">
              <Dialog.Title className="text-xl font-bold tracking-tight text-ink">
                {title}
              </Dialog.Title>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint">
                {dates}
              </p>
            </header>

            <Dialog.Description asChild>
              <Markdown className="prose prose-sm max-w-none text-[13px] leading-relaxed text-ink-muted prose-strong:text-ink dark:prose-invert">
                {description}
              </Markdown>
            </Dialog.Description>

            {tags.length > 0 ? (
              <section className="space-y-2">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint">
                  Built with
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <TechChip key={tag} name={tag} />
                  ))}
                </div>
              </section>
            ) : null}

            {links && links.length > 0 ? (
              <div className="flex flex-wrap gap-2 border-t border-line pt-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-md border border-line px-2.5 py-1.5 text-[12px] font-medium text-ink transition-colors hover:bg-surface-sunk"
                  >
                    {link.icon}
                    {link.type}
                  </Link>
                ))}
              </div>
            ) : href && href !== "#" ? (
              <div className="border-t border-line pt-4">
                <Link
                  href={href}
                  target="_blank"
                  className="text-[12px] font-medium text-ink underline decoration-ink-ghost underline-offset-4 hover:decoration-ink"
                >
                  Visit the site
                </Link>
              </div>
            ) : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
