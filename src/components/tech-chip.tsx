import { cn } from "@/lib/utils";
import { techMark } from "@/lib/tech";

/**
 * One technology, with its own mark in its own colour.
 *
 * The colour lives on the icon only, never on the border or the text: twenty
 * chips each tinting their whole box turns a technology list into a swatch
 * palette, and the point of the list is to be read.
 */
export function TechChip({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const mark = techMark(name);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 text-[11px] font-medium text-ink-soft",
        className,
      )}
    >
      {mark ? (
        <mark.Icon
          className="size-3.5 shrink-0"
          // null means the mark is black or white by brand, so it follows the
          // theme rather than disappearing into one of the two backgrounds.
          style={mark.color ? { color: mark.color } : undefined}
          aria-hidden
        />
      ) : null}
      {mark?.label ?? name}
    </span>
  );
}
