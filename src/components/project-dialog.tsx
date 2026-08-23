"use client";

import { useEffect, useState } from "react";
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
 * A project, opened: media on the left, everything readable on the right.
 *
 * Two columns rather than a stack, because the two halves answer different
 * questions — "what does it look like" and "what is it made of" — and a stack
 * makes you scroll past the first to reach the second. Below `md` they stack
 * anyway; there is no room for a second column on a phone.
 *
 * It rises from the bottom. A dialog that zooms out of the centre appears from
 * nowhere; one that slides up comes from the direction you were reading.
 *
 * Radix owns focus, escape and scroll lock. Its scroll lock is also why
 * `scrollbar-gutter: stable` is set globally: removing the page's scrollbar
 * re-centres every centred container underneath and shifts the fixed dock,
 * which looks exactly like the page breaking as the dialog opens.
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

  // Reopening a project should show its cover, not wherever the gallery was
  // left last time.
  useEffect(() => {
    if (open) setActive(0);
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-ink/25 backdrop-blur-[2px]",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          )}
        />

        <Dialog.Content
          className={cn(
            // Anchored to the bottom on a phone — a sheet — and centred from
            // `sm` up, where there is room for it to be a window.
            "fixed inset-x-0 bottom-0 z-50 w-full",
            "sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:w-[calc(100vw-3rem)] sm:max-w-4xl sm:-translate-x-1/2 sm:-translate-y-1/2",
            "flex max-h-[92vh] flex-col overflow-hidden border border-line bg-surface shadow-2xl",
            "rounded-t-card sm:rounded-card sm:max-h-[85vh]",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            "duration-300 ease-out",
          )}
        >
          <Dialog.Close className="absolute right-3 top-3 z-20 rounded-md border border-line bg-surface/90 p-1.5 text-ink-muted backdrop-blur transition-colors hover:text-ink">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <div
            className={cn(
              "grid min-h-0 flex-1 overflow-hidden",
              current ? "md:grid-cols-[1.15fr_1fr]" : "md:grid-cols-1",
            )}
          >
            {/* Left: the pictures. */}
            {current ? (
              <figure className="flex min-h-0 flex-col border-line bg-surface-sunk md:border-r">
                <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-3">
                  {isVideo(current.src) ? (
                    <video
                      key={current.src}
                      src={current.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="max-h-[34vh] w-auto max-w-full rounded object-contain md:max-h-full"
                    />
                  ) : (
                    // A plain <img>: an SVG diagram and an animated GIF both
                    // survive it, and neither survives next/image unchanged.
                    // max-h over h-full, or a tall diagram is cropped rather
                    // than fitted.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={current.src}
                      src={current.src}
                      alt={current.caption ?? title}
                      className="max-h-[34vh] w-auto max-w-full rounded object-contain md:max-h-full"
                    />
                  )}
                </div>

                {media.length > 1 ? (
                  <div className="flex flex-none gap-2 overflow-x-auto border-t border-line px-3 py-2">
                    {media.map((item, index) => (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() => setActive(index)}
                        aria-label={item.caption ?? `View ${index + 1}`}
                        aria-current={index === active}
                        className={cn(
                          "h-11 w-16 shrink-0 overflow-hidden rounded border bg-surface transition-colors",
                          index === active
                            ? "border-ink"
                            : "border-line hover:border-line-strong",
                        )}
                      >
                        {isVideo(item.src) ? (
                          <video src={item.src} muted className="size-full object-cover" />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={item.src} alt="" className="size-full object-cover" />
                        )}
                      </button>
                    ))}
                  </div>
                ) : null}

                {current.caption ? (
                  <figcaption className="flex-none border-t border-line px-4 py-2 text-[11px] text-ink-muted">
                    {current.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}

            {/* Right: what it is, what it is made of, where to go next. */}
            <div className="flex min-h-0 flex-col overflow-y-auto">
              <div className="space-y-5 p-5 sm:p-6">
                <header className="space-y-1.5 pr-10">
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
              </div>

              {/* Pinned to the bottom of the column, so the way out is always
                  in the same place however long the description runs. */}
              <div className="mt-auto flex flex-wrap gap-2 border-t border-line bg-surface p-5 sm:p-6 sm:py-4">
                {links && links.length > 0
                  ? links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-md border border-line px-2.5 py-1.5 text-[12px] font-medium text-ink transition-colors hover:bg-surface-sunk"
                      >
                        {link.icon}
                        {link.type}
                      </Link>
                    ))
                  : href && href !== "#" ? (
                      <Link
                        href={href}
                        target="_blank"
                        className="text-[12px] font-medium text-ink underline decoration-ink-ghost underline-offset-4 hover:decoration-ink"
                      >
                        Visit the site
                      </Link>
                    ) : null}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
