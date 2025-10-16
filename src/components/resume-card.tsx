"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Position {
  title: string;
  period: string;
  location?: string;
  description?: string;
  badges?: readonly string[];
  skills?: string[];
}

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  positions?: Position[];
  location?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  positions,
  location,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const hasExpandableContent = (positions && positions.length > 0) || description;

const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  console.log('Card clicked', {
    logoUrl,
    altText,
    title,
    subtitle,
    href,
    badges,
    period,
    description,
    positions,
    location,
  });
  if (hasExpandableContent) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }
};

  const hasMultiplePositions = positions && positions.length > 0;

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <div className="flex-1">
                <h3 className="font-semibold leading-none text-sm sm:text-base mb-1">
                  {title}
                </h3>
                
                {/* Single position display */}
                {!hasMultiplePositions && (
                  <>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-sans text-xs text-muted-foreground">
                        {subtitle}
                      </span>
                      {badges && badges.length > 0 && (
                        <>
                          <span className="text-muted-foreground">·</span>
                          {badges.map((badge, index) => (
                            <Badge
                              variant="secondary"
                              className="text-xs"
                              key={index}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </>
                      )}
                    </div>
                    {location && (
                      <div className="font-sans text-xs text-muted-foreground mt-1">
                        {location}
                      </div>
                    )}
                  </>
                )}
                
                {/* Multiple positions display */}
                {hasMultiplePositions && (
                  <div className="font-sans text-xs text-muted-foreground mt-1">
                    {subtitle} · {period}
                  </div>
                )}
              </div>
              
              <div className="flex items-start gap-2">
                {!hasMultiplePositions && (
                  <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                    {period}
                  </div>
                )}
                {hasExpandableContent && (
                  <ChevronRight
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 mt-0.5",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                )}
              </div>
            </div>
          </CardHeader>
              {hasMultiplePositions  && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
                marginTop: isExpanded ? "0rem" : "0.6rem",
                marginBottom: isExpanded ? "0rem" : "0.6rem",
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-4 space-y-6 mt-2">
                {positions.map((position, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-border" />
                    
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm">
                        {position.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
                        <span>{position.period}</span>
                        {position.badges && position.badges.length > 0 && (
                          <>
                            <span>·</span>
                            {position.badges.map((badge, badgeIndex) => (
                              <Badge
                                variant="secondary"
                                className="text-xs h-5"
                                key={badgeIndex}
                              >
                                {badge}
                              </Badge>
                            ))}
                          </>
                        )}
                      </div>
                      {position.location && (
                        <div className="text-xs text-muted-foreground">
                          {position.location}
                        </div>
                      )}
                      {position.description && (
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                          {position.description}
                        </p>
                      )}
                      {position.skills && position.skills.length > 0 && (
                        <div className="mt-3 pt-2">
                          <div className="text-xs font-semibold">
                            <span className="text-muted-foreground">Skills:</span> {position.skills.join(" · ")}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {!hasMultiplePositions && description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="px-6 pb-4"
            >
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};