"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const newPulse: Record<number, boolean> = {};
        getRelatedItems(id).forEach((relId) => { newPulse[relId] = true; });
        setPulseEffect(newPulse);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    setRotationAngle(270 - (nodeIndex / timelineData.length) * 360);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    return {
      x: 200 * Math.cos(radian),
      y: 200 * Math.sin(radian),
      zIndex: Math.round(100 + 50 * Math.cos(radian)),
      opacity: Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))),
    };
  };

  const getRelatedItems = (itemId: number) =>
    timelineData.find((item) => item.id === itemId)?.relatedIds ?? [];

  const isRelatedToActive = (itemId: number) =>
    activeNodeId ? getRelatedItems(activeNodeId).includes(itemId) : false;

  const getStatusStyles = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":   return "border-teal-500/60 bg-teal-500/10 text-teal-600 dark:text-teal-400";
      case "in-progress": return "border-amber-500/60 bg-amber-500/10 text-amber-600 dark:text-amber-400";
      case "pending":     return "border-card-border bg-background/60 text-slate-500 dark:text-slate-400";
      default:            return "border-card-border bg-background/60 text-slate-500";
    }
  };

  return (
    <div
      className="w-full h-[560px] flex items-center justify-center bg-background overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* ── Centre orb — uses Hero shader teal palette ── */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(200,100%,22%)] via-[hsl(180,90%,32%)] to-[hsl(160,80%,58%)] animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-teal-400/25 animate-ping opacity-70" />
            <div className="absolute w-24 h-24 rounded-full border border-teal-300/15 animate-ping opacity-50" style={{ animationDelay: "0.5s" }} />
            <div className="w-8 h-8 rounded-full bg-background/90 backdrop-blur-md shadow-inner" />
          </div>

          {/* ── Orbit ring ── */}
          <div className="absolute w-96 h-96 rounded-full border border-card-border" />

          {/* ── Nodes ── */}
          {timelineData.map((item, index) => {
            const pos = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  zIndex: isExpanded ? 200 : pos.zIndex,
                  opacity: isExpanded ? 1 : pos.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Energy aura */}
                <div
                  className={`absolute rounded-full ${pulseEffect[item.id] ? "animate-pulse" : ""}`}
                  style={{
                    background: "radial-gradient(circle, rgba(45,212,191,0.15) 0%, rgba(45,212,191,0) 70%)",
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5) / 2}px`,
                    top: `-${(item.energy * 0.5) / 2}px`,
                  }}
                />

                {/* Node icon circle */}
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center border-2
                  transition-all duration-300
                  ${isExpanded
                    ? "bg-teal-500 text-white border-teal-400 shadow-lg shadow-teal-500/30 scale-150"
                    : isRelated
                    ? "bg-teal-400/20 text-teal-600 dark:text-teal-400 border-teal-400/70 animate-pulse"
                    : "bg-card text-foreground border-card-border hover:border-teal-400/50 hover:text-teal-600 dark:hover:text-teal-400"
                  }
                `}>
                  <Icon size={20} />
                </div>

                {/* Label */}
                <div className={`
                  absolute top-14 whitespace-nowrap text-sm font-bold tracking-wider drop-shadow-sm
                  transition-all duration-300 -translate-x-1/2 left-1/2
                  ${isExpanded ? "text-teal-600 dark:text-teal-400 scale-125" : "text-foreground dark:text-white"}
                `}>
                  {item.title}
                </div>

                {/* Expanded detail card */}
                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-card/95 backdrop-blur-lg border-card-border shadow-xl overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-teal-400/50" />
                    <CardHeader className="pb-2 pt-4 px-4">
                      <div className="flex justify-between items-center gap-2 flex-wrap">
                        <Badge className={`px-2 text-[10px] border font-medium ${getStatusStyles(item.status)}`}>
                          {item.status === "completed" ? "COMPLETE" : item.status === "in-progress" ? "IN PROGRESS" : "PENDING"}
                        </Badge>
                      </div>
                      <CardTitle className="text-sm mt-2 text-foreground">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground px-4 pb-4">
                      <p>{item.content}</p>

                      {/* Energy bar */}
                      <div className="mt-4 pt-3 border-t border-card-border">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="flex items-center gap-1 text-foreground/50">
                            <Zap size={10} /> Progress
                          </span>
                          <span className="font-mono text-teal-600 dark:text-teal-400">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-card-border rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[hsl(180,90%,32%)] to-[hsl(160,80%,58%)]"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {/* Connected steps */}
                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-card-border">
                          <div className="flex items-center gap-1 mb-2">
                            <Link size={10} className="text-foreground/40" />
                            <h4 className="text-[10px] uppercase tracking-wider font-medium text-foreground/40">
                              Connected Steps
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const rel = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="h-6 px-2 py-0 text-[10px] rounded-lg border-card-border bg-transparent hover:bg-teal-500/10 hover:border-teal-400/40 text-foreground/60 hover:text-teal-600 dark:hover:text-teal-400 transition-all"
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                >
                                  {rel?.title}
                                  <ArrowRight size={8} className="ml-1 opacity-60" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
