import React from 'react';
import {
  BookmarkIcon,
  FootprintsIcon,
  MountainIcon,
  BikeIcon,
  WavesIcon,
  MapPinIcon } from
'lucide-react';
import { bucketListItems, type BucketListCategory } from '../data/bucketList';
const CATEGORY_CONFIG: Record<
  BucketListCategory,
  {
    title: string;
    icon: React.ReactNode;
    color: string;
  }> =
{
  'multi-day-hike': {
    title: 'Multi-day Hikes',
    icon: <FootprintsIcon className="w-5 h-5" />,
    color: 'var(--color-primitive-gold)'
  },
  'day-hike': {
    title: 'Day Hikes',
    icon: <MountainIcon className="w-5 h-5" />,
    color: 'var(--color-primitive-coral)'
  },
  ride: {
    title: 'Rides',
    icon: <BikeIcon className="w-5 h-5" />,
    color: 'var(--color-primitive-blue)'
  },
  swimming: {
    title: 'Swimming',
    icon: <WavesIcon className="w-5 h-5" />,
    color: 'var(--color-primitive-magenta)'
  }
};
export function BucketList() {
  // Group items by category
  const groupedItems = bucketListItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<BucketListCategory, typeof bucketListItems>
  );
  const categories: BucketListCategory[] = [
  'multi-day-hike',
  'day-hike',
  'ride',
  'swimming'];

  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 flex items-center gap-4 border-b border-[var(--color-border-default)] pb-6">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] flex items-center justify-center">
            <BookmarkIcon className="w-6 h-6 text-[var(--color-interactive-accent)]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold font-['Cabin']">Bucket List</h1>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Future adventures and dream destinations
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category) => {
            const items = groupedItems[category];
            if (!items || items.length === 0) return null;
            const config = CATEGORY_CONFIG[category];
            return (
              <section
                key={category}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                style={{
                  animationDelay: `${categories.indexOf(category) * 100}ms`
                }}>
                
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${config.color}20`,
                      color: config.color
                    }}>
                    
                    {config.icon}
                  </div>
                  <h2 className="text-xl font-bold font-['Cabin']">
                    {config.title}
                  </h2>
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)]">
                    {items.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item) =>
                  <div
                    key={item.id}
                    className="group relative p-5 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-interactive-accent)] transition-all overflow-hidden flex flex-col">
                    
                      {/* Aspiratonal dashed left border accent */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 border-l-2 border-dashed border-[var(--color-border-default)] group-hover:border-[var(--color-interactive-accent)] transition-colors opacity-50" />

                      <div className="pl-2 flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold font-['Cabin'] group-hover:text-[var(--color-interactive-accent)] transition-colors">
                            {item.name}
                          </h3>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] mb-3 font-semibold uppercase tracking-wider">
                          <MapPinIcon className="w-3 h-3" />
                          {item.location}
                        </div>

                        <p className="text-sm text-[var(--color-text-primary)] opacity-80 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </section>);

          })}
        </div>

        <div className="mt-16 text-center pb-12">
          <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-widest font-bold">
            More to come
          </p>
        </div>
      </div>
    </div>);

}