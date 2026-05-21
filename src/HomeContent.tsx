import React from 'react';
import { StarIcon, MapPinIcon, ArrowRightIcon } from 'lucide-react';
import {
  journeyStops,
  activities,
  TYPE_COLORS,
  TYPE_ICONS,
  type JourneyStop,
  type Activity } from
'./data/index';
interface HomeContentProps {
  onStopClick: (stop: JourneyStop) => void;
  onActivityClick: (activity: Activity) => void;
}
export function HomeContent({
  onStopClick,
  onActivityClick
}: HomeContentProps) {
  // 1. Calculate Stats
  const totalMiles = activities.reduce((sum, a) => sum + (a.distance || 0), 0);
  const highlights = activities.filter((a) => a.highlight);
  // 2. Get Latest Stop
  const latestStop = journeyStops[journeyStops.length - 1];
  // 3. Get Top Highlights (Top 5)
  const topHighlights = highlights.slice(0, 5);
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      <div className="p-5 space-y-8">
        {/* Journey Summary Stats */}
        <section>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)] mb-3">
            The Numbers
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[var(--color-bg-subtle)] p-3 rounded-xl border border-[var(--color-border-default)]">
              <div className="text-2xl font-bold text-[var(--color-interactive-accent)]">
                {totalMiles.toLocaleString(undefined, {
                  maximumFractionDigits: 0
                })}
              </div>
              <div className="text-[10px] text-[var(--color-text-primary)] opacity-80 uppercase font-semibold">
                Total Miles
              </div>
            </div>
            <div className="bg-[var(--color-bg-subtle)] p-3 rounded-xl border border-[var(--color-border-default)]">
              <div className="text-2xl font-bold text-[var(--color-interactive-primary)]">
                {activities.length}
              </div>
              <div className="text-[10px] text-[var(--color-text-primary)] opacity-80 uppercase font-semibold">
                Activities
              </div>
            </div>
          </div>
        </section>

        {/* Curated Highlights */}
        <section className="pb-8">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)] mb-3">
            Greatest Hits
          </h3>
          <div className="space-y-3">
            {topHighlights.map((activity) =>
            <button
              key={activity.id}
              onClick={() => onActivityClick(activity)}
              className="w-full text-left p-3 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:border-[var(--color-interactive-accent)] hover:shadow-md transition-all flex items-center gap-3 group">
              
                <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `${TYPE_COLORS[activity.type]}20`,
                  color: TYPE_COLORS[activity.type]
                }}>
                
                  {TYPE_ICONS[activity.type]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-[var(--color-text-primary)] truncate group-hover:text-[var(--color-interactive-accent)]">
                    {activity.name}
                  </div>
                  <div className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-tighter">
                    {activity.location} · {activity.distance} mi
                  </div>
                </div>
                <StarIcon
                className="w-3 h-3 text-[var(--color-primitive-gold)]"
                fill="currentColor" />
              
              </button>
            )}
          </div>
        </section>
      </div>
    </div>);

}