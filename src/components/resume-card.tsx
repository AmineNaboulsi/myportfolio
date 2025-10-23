"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, ExternalLink, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";
import ShinyText from "./rb/Shiny/ShinyText";

interface Position {
  title: string;
  period: string;
  location?: string;
  description?: string;
  badges?: readonly string[];
  skills?: string[];
  images?: string[];
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
  images?: string[];
  detailsUrl?: string;
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
  images,
  detailsUrl,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  
  const hasExpandableContent = (positions && positions.length > 0) || description;
  const hasMultiplePositions = positions && positions.length > 0;
  const hasImages = images && images.length > 0;
  const hasPositionImages = positions?.some(p => p.images && p.images.length > 0);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (hasExpandableContent) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const allImages = React.useMemo(() => {
    if (images) return images;
    if (positions) {
      return positions.flatMap(p => p.images || []);
    }
    return [];
  }, [images, positions]);

  return (
    <>
      <Link
        href={href || "#"}
        className="block cursor-pointer"
        onClick={handleClick}
      >
        <Card className="flex transition-shadow">
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
                  {/* <ShinyText 
                    text={title}
                    disabled={false} 
                    speed={3} 
                    className='custom-class' 
                  /> */}
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

              {((hasImages || hasPositionImages || description) && !hasMultiplePositions) && (
                <button
                  onClick={handleViewDetails}
                  className="mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 w-fit"
                >
                  View details <ExternalLink className="size-3" />
                </button>
              )}
            </CardHeader>
            
            {hasMultiplePositions && (
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
                className="overflow-hidden mb-5"
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
                {/* <TextType 
                  className="text-black"
                  text={description}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                /> */}
              </motion.div>
            )}
          </div>
        </Card>
      </Link>

      {/* Radix UI Dialog with proper Portal */}
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" ></div>
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-full max-w-4xl max-h-[90vh] bg-background rounded-lg shadow-xl border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
            
            {/* Close Button */}
            {/* <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Dialog.Close> */}

            {/* Scrollable Content */}
            <>
            </>
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className="sticky top-0 bg-background border-b p-6 z-10">
                <div className="flex items-center gap-4 pr-8">
                  <Avatar className="border size-16 bg-muted-background dark:bg-foreground">
                    <AvatarImage
                      src={logoUrl}
                      alt={altText}
                      className="object-fill"
                    />
                    <AvatarFallback>{altText[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <Dialog.Title className="text-2xl font-semibold">
                      {title}
                    </Dialog.Title>
                    <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="space-y-6">
                  {/* Location and Period */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    {location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4 text-muted-foreground" />
                        <span>{location}</span>
                      </div>
                    )}
                    {period && (
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4 text-muted-foreground" />
                        <span>{period}</span>
                      </div>
                    )}
                  </div>

                  {/* Badges */}
                  {badges && badges.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {badges.map((badge, index) => (
                        <Badge key={index} variant="secondary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Images Gallery */}
                  {allImages.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Gallery</h3>
                      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                        <img
                          src={allImages[selectedImageIndex]}
                          alt={`${title} - Image ${selectedImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {allImages.length > 1 && (
                        <div className="grid grid-cols-4 gap-2">
                          {allImages.map((img, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedImageIndex(index)}
                              className={cn(
                                "relative aspect-video bg-muted rounded overflow-hidden border-2 transition-all",
                                selectedImageIndex === index
                                  ? "border-primary"
                                  : "border-transparent hover:border-muted-foreground"
                              )}
                            >
                              <img
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  {description && (
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">About</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                  )}

                  {/* Positions Timeline */}
                  {hasMultiplePositions && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Positions</h3>
                      <div className="space-y-6">
                        {positions.map((position, index) => (
                          <div key={index} className="relative pl-6 border-l-2 border-border pb-6 last:pb-0">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                            
                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold text-base">
                                  {position.title}
                                </h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                  <Calendar className="size-3" />
                                  <span>{position.period}</span>
                                </div>
                                {position.location && (
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                    <MapPin className="size-3" />
                                    <span>{position.location}</span>
                                  </div>
                                )}
                              </div>

                              {position.badges && position.badges.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {position.badges.map((badge, badgeIndex) => (
                                    <Badge
                                      variant="secondary"
                                      className="text-xs"
                                      key={badgeIndex}
                                    >
                                      {badge}
                                    </Badge>
                                  ))}
                                </div>
                              )}

                              {position.description && (
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {position.description}
                                </p>
                              )}

                              {position.images && position.images.length > 0 && (
                                <div className="grid grid-cols-2 gap-2 mt-3">
                                  {position.images.map((img, imgIndex) => (
                                    <div key={imgIndex} className="relative aspect-video bg-muted rounded overflow-hidden">
                                      <img
                                        src={img}
                                        alt={`${position.title} - Image ${imgIndex + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}

                              {position.skills && position.skills.length > 0 && (
                                <div className="mt-3 pt-3 border-t border-border">
                                  <p className="text-xs font-semibold mb-2 text-muted-foreground">Skills</p>
                                  <div className="flex flex-wrap gap-2">
                                    {position.skills.map((skill, skillIndex) => (
                                      <Badge
                                        key={skillIndex}
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};