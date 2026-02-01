"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
  id,
  title,
  slug,
  description,
  date,
  readTime,
  category,
  tags,
  image,
  featured,
  className,
}: BlogCardProps) => {
  const formattedDate = date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <Link href={`/blog/${slug}`}>
      <Card className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        featured && "border-[#BFE241]/50 bg-gradient-to-br from-[#BFE241]/5 to-transparent",
        className
      )}>
        {image && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-muted">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            {/* Placeholder for image - you can add actual image here */}
            <div className="w-full h-full bg-gradient-to-br from-[#BFE241]/20 to-primary/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-muted-foreground/20">{category}</span>
            </div>
            {featured && (
              <Badge className="absolute top-3 right-3 z-20 bg-[#BFE241] text-background border-0">
                Featured
              </Badge>
            )}
          </div>
        )}
        
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="size-3" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold leading-tight group-hover:text-[#BFE241] transition-colors">
            {title}
          </h3>
        </CardHeader>
        
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 4).map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs hover:border-[#BFE241] hover:text-[#BFE241] transition-colors"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 4}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-sm font-medium text-[#BFE241] group-hover:gap-3 transition-all">
            Read more
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
