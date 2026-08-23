import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * One post, as a row.
 *
 * Borrowed from YouLearn's curriculum list, and for the same reason: a page of
 * floating cards with shadows and lift-on-hover reads as decoration, while a
 * list of hairline-separated rows reads as a table of contents — which is what
 * a blog index is. The row draws no border of its own; the list draws them
 * between rows, so a run of posts is one object rather than several.
 *
 * There is no accent colour. Hierarchy comes from weight and size: the title
 * is the only semibold thing in the row, the summary is muted, and the meta
 * line is smaller and fainter still.
 */
interface BlogCardProps {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: Date;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  className?: string;
}

export const BlogCard = ({
  title,
  slug,
  description,
  date,
  readTime,
  category,
  tags,
  featured,
  className,
}: BlogCardProps) => {
  const value = date instanceof Date ? date : new Date(date);
  const formattedDate = value.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group block bg-surface px-5 py-4 transition-colors hover:bg-surface-sunk",
        className,
      )}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[15px] font-semibold leading-snug text-ink decoration-ink-ghost underline-offset-4 group-hover:underline">
          {title}
        </h3>
        {/* Tabular figures so a column of dates lines up down the list. */}
        <time
          dateTime={value.toISOString()}
          className="flex-none text-[11px] tabular-nums text-ink-faint"
        >
          {formattedDate}
        </time>
      </div>

      <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-ink-muted">
        {description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[11px] text-ink-faint">
        <span className="font-medium uppercase tracking-[0.14em] text-ink-soft">
          {category}
        </span>
        <span aria-hidden>·</span>
        <span className="tabular-nums">{readTime}</span>

        {featured ? (
          <span className="rounded border border-line-strong px-1.5 py-0.5 font-medium uppercase tracking-[0.12em] text-ink-soft">
            Featured
          </span>
        ) : null}

        {/* Three, then a count. A row that wraps to a second line of tags is a
            row that has stopped being scannable. */}
        {tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded border border-line px-1.5 py-0.5">
            {tag}
          </span>
        ))}
        {tags.length > 3 ? (
          <span className="text-ink-faint">+{tags.length - 3}</span>
        ) : null}
      </div>
    </Link>
  );
};
