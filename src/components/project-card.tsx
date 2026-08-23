"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

import { ProjectDialog, type ProjectMedia } from "@/components/project-dialog";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  /** Extra screenshots, GIFs, diagrams. Shown in the dialog, not on the card. */
  images?: readonly (string | ProjectMedia)[];
  /** A square mark for the header. Falls back to a monogram of the title. */
  logo?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

/**
 * The card opens the project rather than leaving for it.
 *
 * It used to be a link to the live site, which meant the only way to see what
 * a project was made of was to leave the page. Clicking now opens a dialog
 * with every screenshot, the diagrams, and the full technology list; the links
 * out are still there, in the footer and in the dialog, one deliberate click
 * away rather than one accidental one.
 */
export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  images,
  logo,
  links,
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  // Cover first, then everything else — the dialog opens on whatever the card
  // was already showing, so the click does not feel like a jump.
  const media: ProjectMedia[] = [
    ...(video ? [{ src: video }] : []),
    ...(image ? [{ src: image, caption: `${title} — interface` }] : []),
    ...(images ?? []).map((item) =>
      typeof item === "string" ? { src: item } : item,
    ),
  ];

  return (
    <>
      <Card
        className={cn(
          "flex h-full flex-col overflow-hidden border-line transition-colors duration-300 ease-out hover:border-line-strong",
          className,
        )}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          className="group block w-full cursor-pointer text-left"
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
            />
          )}
          {image && !video && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full overflow-hidden object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          )}
        </button>

        <CardHeader className="px-2">
          <div className="space-y-1">
            <div className="mt-1 flex items-center gap-2">
              <ProjectMark title={title} logo={logo} />
              <CardTitle className="text-base leading-none">{title}</CardTitle>
            </div>
            <time className="font-sans text-xs text-ink-muted">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.slice(0, 6).map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 6 && (
                <Badge className="px-1 py-0 text-[10px]" variant="outline">
                  +{tags.length - 6}
                </Badge>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="flex-wrap gap-1 px-2 pb-2">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded border border-line px-2 py-1 text-[10px] font-medium text-ink transition-colors hover:bg-surface-sunk"
          >
            Details
          </button>
          {links && links.length > 0
            ? links.map((item, idx) => (
                <Link href={item.href} key={idx} target="_blank">
                  <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                    {item.icon}
                    {item.type}
                  </Badge>
                </Link>
              ))
            : null}
        </CardFooter>
      </Card>

      <ProjectDialog
        open={open}
        onOpenChange={setOpen}
        title={title}
        href={href}
        dates={dates}
        description={description}
        tags={tags}
        media={media}
        links={links}
      />
    </>
  );
}

/**
 * A logo when the project has one, otherwise its initials in a bordered
 * square. A monogram is a poor logo and a good placeholder: it keeps every
 * card's header on the same baseline, which a missing image does not.
 */
function ProjectMark({ title, logo }: { title: string; logo?: string }) {
  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt=""
        className="size-6 shrink-0 rounded border border-line bg-surface object-contain p-0.5"
      />
    );
  }

  const initials = title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

  return (
    <span
      aria-hidden
      className="grid size-6 shrink-0 place-items-center rounded border border-line bg-surface-sunk text-[10px] font-semibold tracking-tight text-ink-soft"
    >
      {initials || "•"}
    </span>
  );
}
