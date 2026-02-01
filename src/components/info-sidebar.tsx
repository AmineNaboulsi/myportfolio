"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}

interface InfoSidebarProps {
  className?: string;
}

export const InfoSidebar = ({ className }: InfoSidebarProps) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const infoItems: InfoItem[] = [
    {
      icon: <Calendar className="size-4" />,
      label: "Today's Date",
      value: formattedDate,
      highlight: false,
    },
    {
      icon: <Clock className="size-4" />,
      label: "Availability",
      value: "Open to opportunities",
      highlight: true,
    },
    {
      icon: <MapPin className="size-4" />,
      label: "Based in",
      value: "Casablanca, Morocco",
      highlight: false,
    },
    {
      icon: <Briefcase className="size-4" />,
      label: "Experience",
      value: "2+ years",
      highlight: false,
    },
  ];

  return (
    <Card className={cn("p-6 bg-gradient-to-br from-[#BFE241]/5 to-transparent border-[#BFE241]/20", className)}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#BFE241]">Quick Info</h3>
          <Badge variant="outline" className="border-[#BFE241] text-[#BFE241]">
            Live
          </Badge>
        </div>
        
        <div className="space-y-3">
          {infoItems.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-muted/50",
                item.highlight && "bg-[#BFE241]/10 border border-[#BFE241]/20"
              )}
            >
              <div className={cn(
                "mt-0.5",
                item.highlight ? "text-[#BFE241]" : "text-muted-foreground"
              )}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-muted-foreground">
                  {item.label}
                </p>
                <p className={cn(
                  "text-sm font-semibold mt-0.5",
                  item.highlight && "text-[#BFE241]"
                )}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BFE241] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BFE241]"></span>
            </div>
            <span>Last updated: Just now</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
