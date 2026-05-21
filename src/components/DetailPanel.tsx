import React, { useState } from 'react';
import { XIcon, StarIcon, MapPinIcon, CalendarIcon, ClockIcon, RouteIcon } from 'lucide-react';
import { type JourneyStop, type Activity, type ActivityType, getActivitiesForStop, TYPE_COLORS, TYPE_ICONS } from '../data/tripData';
interface DetailPanelProps {
  selectedStop: JourneyStop | null;
  selectedActivity: Activity | null;
  onClose: () => void;
  onActivityClick: (activity: Activity) => void;
}
function TypeBadge({
  type


}: {type: ActivityType;}) {
  return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium text-white" style={{
    backgroundColor: TYPE_COLORS[type]
  }}>
      {TYPE_ICONS[type]} {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>;
}
function ActivityRow({
  activity,
  onClick



}: {activity: Activity;onClick: () => void;}) {
  return <button onClick={onClick} className="w-full text-left px-3 py-2.5 rounded-lg transition-colors duration-150 group" style={{
    backgroundColor: 'rgba(222, 105, 82, 0.04)'
  }} onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'rgba(222, 105, 82, 0.1)';
  }} onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'rgba(222, 105, 82, 0.04)';
  }}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm" style={{
            color: TYPE_COLORS[activity.type]
          }}>
              {TYPE_ICONS[activity.type]}
            </span>
            <span className="text-sm font-medium truncate" style={{
            color: 'var(--color-text-primary)'
          }}>
              {activity.name}
            </span>
            {activity.highlight && <StarIcon className="w-3 h-3 flex-shrink-0" style={{
            color: 'var(--color-primitive-gold)'
          }} fill="currentColor" />}
          </div>
          <div className="flex items-center gap-3 mt-0.5 text-xs" style={{
          color: 'var(--color-text-secondary)'
        }}>
            <span>{activity.distance} mi</span>
            <span>{activity.time}</span>
          </div>
        </div>
      </div>
    </button>;
}
export function DetailPanel({
  selectedStop,
  selectedActivity,
  onClose,
  onActivityClick
}: DetailPanelProps) {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 250);
  };
  if (!selectedStop && !selectedActivity) return null;
  const isOpen = selectedStop || selectedActivity;
  const animClass = isClosing ? 'detail-panel-exit' : 'detail-panel-enter';
  // Activity detail view
  if (selectedActivity && !selectedStop) {
    const a = selectedActivity;
    return <div className={`absolute top-0 right-0 h-full z-30 frosted-glass shadow-2xl ${animClass}`} style={{
      width: 348,
      borderLeft: '1px solid var(--color-border-default)'
    }}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-5 pt-5 pb-4" style={{
          borderBottom: '1px solid var(--color-border-default)'
        }}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <TypeBadge type={a.type} />
                  {a.highlight && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium" style={{
                  backgroundColor: 'rgba(222, 105, 82, 0.15)',
                  color: 'var(--color-interactive-accent)'
                }}>
                      <StarIcon className="w-3 h-3" fill="currentColor" style={{
                    color: 'var(--color-primitive-gold)'
                  }} />
                      Highlight
                    </span>}
                </div>
                <h2 className="text-lg font-semibold leading-tight" style={{
                color: 'var(--color-text-primary)'
              }}>
                  {a.name}
                </h2>
              </div>
              <button onClick={handleClose} className="p-1.5 rounded-lg transition-colors" style={{
              color: 'var(--color-text-secondary)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(222, 105, 82, 0.1)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }} aria-label="Close panel">
                <XIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-5 py-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm" style={{
              color: 'var(--color-text-secondary)'
            }}>
                <CalendarIcon className="w-4 h-4 flex-shrink-0" style={{
                color: 'var(--color-interactive-accent)'
              }} />
                <span>{a.date}, 2025</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm" style={{
              color: 'var(--color-text-secondary)'
            }}>
                <MapPinIcon className="w-4 h-4 flex-shrink-0" style={{
                color: 'var(--color-interactive-accent)'
              }} />
                <span>{a.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm" style={{
              color: 'var(--color-text-secondary)'
            }}>
                <RouteIcon className="w-4 h-4 flex-shrink-0" style={{
                color: 'var(--color-interactive-accent)'
              }} />
                <span>{a.distance} miles</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm" style={{
              color: 'var(--color-text-secondary)'
            }}>
                <ClockIcon className="w-4 h-4 flex-shrink-0" style={{
                color: 'var(--color-interactive-accent)'
              }} />
                <span>{a.time} moving time</span>
              </div>
            </div>

            {a.desc && <div className="mt-5 pt-4" style={{
            borderTop: '1px solid var(--color-border-default)'
          }}>
                <p className="text-sm leading-relaxed" style={{
              color: 'var(--color-text-primary)'
            }}>
                  {a.desc}
                </p>
              </div>}
          </div>
        </div>
      </div>;
  }
  // Stop detail view (merged with contextual activities)
  if (selectedStop) {
    const stop = selectedStop;
    const contextualActivities = getActivitiesForStop(stop.id);
    // Group by type
    const grouped: Record<ActivityType, Activity[]> = {
      running: [],
      cycling: [],
      hiking: [],
      water: []
    };
    contextualActivities.forEach((a) => {
      grouped[a.type].push(a);
    });
    return <div className={`absolute top-0 right-0 h-full z-30 frosted-glass shadow-2xl ${animClass}`} style={{
      width: 348,
      borderLeft: '1px solid var(--color-border-default)'
    }}>
        
      </div>;
  }
  return null;
}