import { useCallback, useEffect, useState, useRef } from 'react';
import { type JourneyStop, journeyStops, parseDateStart, TRIP_START, TRIP_END } from '../data/tripData';

interface TimelineScrubberProps {
  selectedStopId: number | null;
  onStopSelect: (stop: JourneyStop) => void;
}

const MONTHS = [
  { label: 'Feb', date: new Date(2025, 1, 1) },
  { label: 'Mar', date: new Date(2025, 2, 1) },
  { label: 'Apr', date: new Date(2025, 3, 1) },
  { label: 'May', date: new Date(2025, 4, 1) },
];

function dateToFraction(date: Date): number {
  const totalMs = TRIP_END.getTime() - TRIP_START.getTime();
  const elapsed = date.getTime() - TRIP_START.getTime();
  return Math.max(0, Math.min(1, elapsed / totalMs));
}

export function TimelineScrubber({
  selectedStopId,
  onStopSelect,
}: TimelineScrubberProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const nzStops = journeyStops.filter((s) => !s.departure);

  const findNearestStop = useCallback(
    (fraction: number) => {
      let nearest = nzStops[0];
      let minDist = Infinity;
      nzStops.forEach((stop) => {
        const stopFrac = dateToFraction(parseDateStart(stop.date));
        const dist = Math.abs(stopFrac - fraction);
        if (dist < minDist) {
          minDist = dist;
          nearest = stop;
        }
      });
      return nearest;
    },
    [nzStops]
  );

  const handleInteraction = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const fraction = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width)
      );
      const stop = findNearestStop(fraction);
      if (stop) onStopSelect(stop);
    },
    [findNearestStop, onStopSelect]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      handleInteraction(e.clientX);
    },
    [handleInteraction]
  );

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e: MouseEvent) => handleInteraction(e.clientX);
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleInteraction]);

  const selectedStop = selectedStopId
    ? journeyStops.find((s) => s.id === selectedStopId)
    : null;
  const selectedFraction = selectedStop
    ? dateToFraction(parseDateStart(selectedStop.date))
    : 0;

  return (
    <div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] px-5 py-3 rounded-2xl flex items-center gap-4 pointer-events-auto"
      style={{
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(12px)',
        border: '1px solid #D4DDE3',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}>
      <span
        className="text-[10px] font-bold uppercase tracking-wider shrink-0"
        style={{ color: '#5A7A8A', fontFamily: 'Cabin, sans-serif' }}>
        {MONTHS[0].label} 2025
      </span>

      <div
        ref={trackRef}
        className="w-48 sm:w-64 h-6 flex items-center cursor-pointer relative"
        onMouseDown={handleMouseDown}
        role="slider"
        aria-label="Trip timeline"
        aria-valuenow={Math.round(selectedFraction * 100)}
        aria-valuemin={0}
        aria-valuemax={100}>
        <div
          className="absolute left-0 right-0 h-1.5 rounded-full"
          style={{ background: '#D4DDE3' }}
        />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full"
          style={{
            width: `${selectedFraction * 100}%`,
            background: 'linear-gradient(90deg, #2E7DA8, #DE6952)',
          }}
        />
        {nzStops.map((stop) => {
          const frac = dateToFraction(parseDateStart(stop.date));
          const isSelected = stop.id === selectedStopId;
          return (
            <button
              key={stop.id}
              type="button"
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 transition-transform hover:scale-125"
              style={{
                left: `${frac * 100}%`,
                background: isSelected ? '#DE6952' : '#FFFFFF',
                borderColor: isSelected ? '#DE6952' : '#2E7DA8',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
              onClick={(e) => {
                e.stopPropagation();
                onStopSelect(stop);
              }}
              aria-label={stop.name}
            />
          );
        })}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 pointer-events-none"
          style={{
            left: `${selectedFraction * 100}%`,
            marginLeft: '-8px',
            background: '#FFFFFF',
            borderColor: '#DE6952',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          }}
        />
      </div>

      <span
        className="text-[10px] font-bold uppercase tracking-wider shrink-0"
        style={{ color: '#5A7A8A', fontFamily: 'Cabin, sans-serif' }}>
        {MONTHS[MONTHS.length - 1].label} 2025
      </span>
    </div>
  );
}
