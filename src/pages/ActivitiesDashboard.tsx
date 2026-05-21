import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StarIcon, TrendingUpIcon } from 'lucide-react';
import { activities, TYPE_COLORS, TYPE_ICONS, type ActivityType } from '../data/index';
import { buildActivityUrl } from '../utils/routing';

export function ActivitiesDashboard() {
  const navigate = useNavigate();
  const [activeTypeFilter, setActiveTypeFilter] = useState<ActivityType | null>(null);

  // Calculate aggregate stats
  const stats = {
    total: activities.length,
    totalDistance: activities.reduce((sum, a) => sum + (a.distance || 0), 0),
    byType: {} as Record<ActivityType, {
      count: number;
      distance: number;
    }>
  };
  const types: ActivityType[] = ['running', 'cycling', 'hiking', 'water', 'breathwork'];
  types.forEach((type) => {
    const typeActivities = activities.filter((a) => a.type === type);
    stats.byType[type] = {
      count: typeActivities.length,
      distance: typeActivities.reduce((sum, a) => sum + (a.distance || 0), 0)
    };
  });

  const filteredActivities = activeTypeFilter ? activities.filter((a) => a.type === activeTypeFilter) : activities;

  return (
    <div className="w-full h-full overflow-y-auto bg-[var(--color-bg-canvas)]">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUpIcon className="w-8 h-8 text-[var(--color-interactive-accent)]" />
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Activities</h1>
          </div>
          <p className="text-[var(--color-text-secondary)]">
            {stats.total} activities · {stats.totalDistance.toFixed(1)} miles
            total
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {types.map((type) => {
            const typeStats = stats.byType[type];
            if (typeStats.count === 0) return null;
            return (
              <div key={type} className="bg-[var(--color-bg-surface)] rounded-lg p-4 border border-[var(--color-border-default)] hover:border-[var(--color-interactive-accent)] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{TYPE_ICONS[type]}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
                    {type}
                  </span>
                </div>
                <div className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">
                  {typeStats.count}
                </div>
                {typeStats.distance > 0 &&
                <div className="text-xs text-[var(--color-text-secondary)]">
                    {typeStats.distance.toFixed(1)} mi
                  </div>
                }
              </div>);

          })}
        </div>

        {/* Type Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveTypeFilter(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeTypeFilter === null ? 'bg-[var(--color-interactive-accent)] text-white' : 'bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)] hover:border-[var(--color-interactive-accent)]'}`}>
            
            All ({stats.total})
          </button>
          {types.map((type) => {
            const count = stats.byType[type].count;
            if (count === 0) return null;
            return (
              <button
                key={type}
                onClick={() => setActiveTypeFilter(type)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeTypeFilter === type ? 'text-white border-transparent' : 'bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)] hover:border-[var(--color-interactive-accent)]'}`}
                style={{
                  backgroundColor: activeTypeFilter === type ? TYPE_COLORS[type] : undefined
                }}>
                
                {TYPE_ICONS[type]}{' '}
                {type.charAt(0).toUpperCase() + type.slice(1)} ({count})
              </button>);

          })}
        </div>

        {/* Activities List */}
        <div className="space-y-3">
          {filteredActivities.map((activity) =>
          <button
            key={activity.id}
            onClick={() => navigate(buildActivityUrl(activity))}
            className="w-full text-left p-4 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-interactive-accent)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all group">
            
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{
                backgroundColor: `${TYPE_COLORS[activity.type]}20`,
                color: TYPE_COLORS[activity.type]
              }}>
                  {TYPE_ICONS[activity.type]}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-interactive-accent)] transition-colors">
                      {activity.name}
                    </h3>
                    {activity.highlight && <StarIcon className="w-4 h-4 text-[var(--color-primitive-gold)] flex-shrink-0" fill="currentColor" />}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--color-text-secondary)]">
                    <span>{activity.date}</span>
                    {activity.distance && <span>·</span>}
                    {activity.distance && <span>{activity.distance} mi</span>}
                    <span>·</span>
                    <span>{activity.time}</span>
                    <span>·</span>
                    <span className="opacity-80">{activity.location}</span>
                  </div>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>);

}