import React from 'react';
import {
  MapPinIcon,
  StarIcon,
  MountainIcon,
  BikeIcon,
  FootprintsIcon,
  WavesIcon,
  GlobeIcon } from
'lucide-react';
// ─── Light Theme Tokens (alpine morning palette) ─────────────────────────────
const lightVars: Record<string, string> = {
  '--color-bg-canvas': '#EDF3F8',
  '--color-bg-surface': '#FFFFFF',
  '--color-bg-subtle': '#F5F0E8',
  '--color-bg-invert': '#1A3044',
  '--color-text-primary': '#1A3044',
  '--color-text-secondary': '#5A7A8A',
  '--color-text-link': '#2E7DA8',
  '--color-interactive-primary': '#2E7DA8',
  '--color-interactive-primary-hover': '#256A91',
  '--color-interactive-accent': '#DE6952',
  '--color-interactive-accent-hover': '#C83D5D',
  '--color-border-default': '#D4DDE3',
  '--color-border-strong': '#2E7DA8',
  '--color-border-accent': '#DE6952',
  '--color-primitive-gold': '#B8963E',
  '--color-primitive-blue': '#7AB8E0',
  '--color-map-sea': '#D6E8F3',
  '--color-map-land': '#E8E3D8',
  '--color-map-land-stroke': '#C8CDD0'
};
const mockStats = [
{
  label: 'Total Miles',
  value: '2,847',
  color: 'var(--color-interactive-accent)'
},
{
  label: 'Activities',
  value: '142',
  color: 'var(--color-interactive-primary)'
}];

const mockHighlights = [
{
  name: 'Milford Track',
  location: 'Fiordland, NZ',
  distance: '33.5',
  type: 'hike',
  icon: <FootprintsIcon className="w-4 h-4" />
},
{
  name: 'Col du Galibier',
  location: 'French Alps',
  distance: '48.2',
  type: 'ride',
  icon: <BikeIcon className="w-4 h-4" />
},
{
  name: 'Routeburn Track',
  location: 'Queenstown, NZ',
  distance: '20.1',
  type: 'hike',
  icon: <FootprintsIcon className="w-4 h-4" />
},
{
  name: 'Lake Wanaka Kayak',
  location: 'Wanaka, NZ',
  distance: '8.4',
  type: 'paddle',
  icon: <WavesIcon className="w-4 h-4" />
},
{
  name: 'Remarkables Ridge',
  location: 'Queenstown, NZ',
  distance: '12.7',
  type: 'hike',
  icon: <MountainIcon className="w-4 h-4" />
}];

const typeColors: Record<string, string> = {
  hike: '#8A9A6B',
  ride: '#2E7DA8',
  paddle: '#7AB8E0'
};
export function LightThemePreview() {
  return (
    <div
      className="w-full h-full flex overflow-hidden"
      style={lightVars as React.CSSProperties}>
      
      {/* Tab Bar Mock */}
      <div
        className="w-14 h-full flex flex-col items-center py-4 gap-4 shrink-0"
        style={{
          background: '#FFFFFF',
          borderRight: '1px solid #D4DDE3'
        }}>
        
        <div
          className="w-8 h-8 rounded-full bg-[#2E7DA8] flex items-center justify-center text-white font-bold text-sm"
          style={{
            fontFamily: 'Cabin, sans-serif'
          }}>
          
          K
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#EDF3F8] flex items-center justify-center">
            <GlobeIcon className="w-4 h-4 text-[#2E7DA8]" />
          </div>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <MapPinIcon className="w-4 h-4 text-[#5A7A8A]" />
          </div>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <StarIcon className="w-4 h-4 text-[#5A7A8A]" />
          </div>
        </div>
      </div>

      {/* Sidebar Mock */}
      <div
        className="w-[320px] h-full overflow-y-auto shrink-0"
        style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          borderRight: '1px solid #D4DDE3'
        }}>
        
        {/* Header */}
        <div className="p-5 pb-2">
          <h1
            className="text-xl font-bold"
            style={{
              fontFamily: 'Cabin, sans-serif',
              color: '#1A3044'
            }}>
            
            Kyle's Journey
          </h1>
          <p
            className="text-xs mt-1"
            style={{
              color: '#5A7A8A'
            }}>
            
            Adventure map & travel log
          </p>
        </div>

        <div className="p-5 space-y-8">
          {/* Stats */}
          <section>
            <h3
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{
                color: '#5A7A8A'
              }}>
              
              The Numbers
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {mockStats.map((stat) =>
              <div
                key={stat.label}
                className="p-3 rounded-xl border"
                style={{
                  background: '#F5F0E8',
                  borderColor: '#D4DDE3'
                }}>
                
                  <div
                  className="text-2xl font-bold"
                  style={{
                    color: stat.color,
                    fontFamily: 'Cabin, sans-serif'
                  }}>
                  
                    {stat.value}
                  </div>
                  <div
                  className="text-[10px] uppercase font-semibold opacity-80"
                  style={{
                    color: '#1A3044'
                  }}>
                  
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Highlights */}
          <section>
            <h3
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{
                color: '#5A7A8A'
              }}>
              
              Greatest Hits
            </h3>
            <div className="space-y-3">
              {mockHighlights.map((h) =>
              <div
                key={h.name}
                className="p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-all hover:shadow-md"
                style={{
                  background: '#FFFFFF',
                  borderColor: '#D4DDE3'
                }}
                onMouseEnter={(e) =>
                e.currentTarget.style.borderColor = '#DE6952'
                }
                onMouseLeave={(e) =>
                e.currentTarget.style.borderColor = '#D4DDE3'
                }>
                
                  <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: `${typeColors[h.type]}20`,
                    color: typeColors[h.type]
                  }}>
                  
                    {h.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                    className="text-sm font-bold truncate"
                    style={{
                      color: '#1A3044',
                      fontFamily: 'Cabin, sans-serif'
                    }}>
                    
                      {h.name}
                    </div>
                    <div
                    className="text-[10px] uppercase tracking-tighter"
                    style={{
                      color: '#5A7A8A'
                    }}>
                    
                      {h.location} · {h.distance} mi
                    </div>
                  </div>
                  <StarIcon
                  className="w-3 h-3 shrink-0"
                  style={{
                    color: '#B8963E'
                  }}
                  fill="currentColor" />
                
                </div>
              )}
            </div>
          </section>

          {/* Country Nav Mock */}
          <section>
            <h3
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{
                color: '#5A7A8A'
              }}>
              
              Regions
            </h3>
            <div className="space-y-1">
              {['New Zealand', 'Europe', 'North America'].map((region) =>
              <div
                key={region}
                className="px-4 py-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors"
                style={{
                  color: '#1A3044'
                }}
                onMouseEnter={(e) =>
                e.currentTarget.style.background = '#F5F0E8'
                }
                onMouseLeave={(e) =>
                e.currentTarget.style.background = 'transparent'
                }>
                
                  <span
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: 'Cabin, sans-serif'
                  }}>
                  
                    {region}
                  </span>
                  <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: '#EDF3F8',
                    color: '#5A7A8A'
                  }}>
                  
                    12
                  </span>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Map Area Mock */}
      <div
        className="flex-1 relative h-full"
        style={{
          background: '#D6E8F3'
        }}>
        
        {/* Fake map with land masses */}
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice">
          
          {/* Sea */}
          <rect width="800" height="600" fill="#D6E8F3" />
          {/* Abstract land shapes */}
          <ellipse
            cx="200"
            cy="280"
            rx="120"
            ry="80"
            fill="#E8E3D8"
            stroke="#C8CDD0"
            strokeWidth="1" />
          
          <ellipse
            cx="500"
            cy="200"
            rx="180"
            ry="100"
            fill="#E8E3D8"
            stroke="#C8CDD0"
            strokeWidth="1" />
          
          <ellipse
            cx="600"
            cy="400"
            rx="100"
            ry="60"
            fill="#E8E3D8"
            stroke="#C8CDD0"
            strokeWidth="1" />
          
          <ellipse
            cx="150"
            cy="450"
            rx="80"
            ry="50"
            fill="#E8E3D8"
            stroke="#C8CDD0"
            strokeWidth="1" />
          

          {/* Trace lines */}
          <path
            d="M200 280 Q350 200 500 200"
            fill="none"
            stroke="#DE6952"
            strokeWidth="2.5"
            strokeDasharray="6 3"
            opacity="0.7" />
          
          <path
            d="M500 200 Q560 300 600 400"
            fill="none"
            stroke="#2E7DA8"
            strokeWidth="2.5"
            strokeDasharray="6 3"
            opacity="0.7" />
          

          {/* Stop markers */}
          {[
          {
            x: 200,
            y: 280,
            n: 1
          },
          {
            x: 500,
            y: 200,
            n: 2
          },
          {
            x: 600,
            y: 400,
            n: 3
          }].
          map((m) =>
          <g key={m.n}>
              <circle
              cx={m.x}
              cy={m.y}
              r="14"
              fill="#DE6952"
              stroke="#FFFFFF"
              strokeWidth="2.5" />
            
              <text
              x={m.x}
              y={m.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="700"
              fontFamily="Cabin, sans-serif">
              
                {m.n}
              </text>
            </g>
          )}
        </svg>

        {/* Timeline scrubber mock */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl flex items-center gap-4"
          style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid #D4DDE3',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
          
          <span
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{
              color: '#5A7A8A'
            }}>
            
            Mar 2024
          </span>
          <div
            className="w-48 h-1.5 rounded-full relative"
            style={{
              background: '#D4DDE3'
            }}>
            
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: '65%',
                background: 'linear-gradient(90deg, #2E7DA8, #DE6952)'
              }} />
            
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2"
              style={{
                left: '65%',
                marginLeft: '-8px',
                background: '#FFFFFF',
                borderColor: '#DE6952',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
              }} />
            
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{
              color: '#5A7A8A'
            }}>
            
            Dec 2024
          </span>
        </div>

        {/* Theme label */}
        <div
          className="absolute top-4 right-4 px-4 py-2 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            border: '1px solid #D4DDE3'
          }}>
          
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{
              color: '#2E7DA8',
              fontFamily: 'Cabin, sans-serif'
            }}>
            
            ☀️ Light Theme Preview
          </span>
        </div>
      </div>
    </div>);

}