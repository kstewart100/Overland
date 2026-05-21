import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, MapIcon, BookmarkIcon, TrendingUpIcon, Mail, Info, Compass } from 'lucide-react';

function SidebarTooltip({
  label


}: {label: string;}) {
  return (
    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] text-[13px] font-medium rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-[100] shadow-lg border border-[var(--color-border-default)]">
      <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[6px] border-r-[var(--color-bg-surface)]" />
      {label}
    </div>);

}

export function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const tabs = [{
    id: 'home',
    label: 'Home',
    icon: HomeIcon,
    path: '/'
  }, {
    id: 'trips',
    label: 'Trips',
    icon: MapIcon,
    path: '/trips'
  }, {
    id: 'bucket-list',
    label: 'Bucket List',
    icon: BookmarkIcon,
    path: '/bucket-list'
  }, {
    id: 'activities',
    label: 'Activities',
    icon: TrendingUpIcon,
    path: '/activities'
  }];

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/trips')) return 'trips';
    if (path.startsWith('/bucket-list')) return 'bucket-list';
    if (path.startsWith('/activities')) return 'activities';
    return 'home';
  };

  const activeTab = getActiveTab();

  return (
    <>
      {/* Desktop Left Hand Rail */}
      <aside className="hidden md:flex flex-col w-16 h-full bg-[var(--color-bg-surface)] border-r border-[var(--color-border-default)] shrink-0 z-50">
        <div className="h-[60px] flex items-center justify-center flex-shrink-0 border-b border-[var(--color-border-default)] px-3">
          <button onClick={() => navigate('/')} className="w-full flex items-center justify-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-[var(--color-bg-subtle)] transition-colors group relative" aria-label="Go to home">
            <Compass className="w-6 h-6 text-[var(--color-interactive-accent)]" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-2" aria-label="Main navigation">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                className={`w-full flex items-center justify-center px-3 py-2.5 rounded-xl group relative transition-colors ${isActive ? 'bg-[var(--color-bg-subtle)] text-[var(--color-interactive-accent)]' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-text-primary)]'}`}
                aria-current={isActive ? 'page' : undefined}>
                
                <div className="shrink-0">
                  <Icon className={`w-6 h-6 transition-all duration-200 group-hover:scale-110 ${isActive ? 'text-[var(--color-interactive-accent)]' : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]'}`} />
                </div>
                <SidebarTooltip label={tab.label} />
              </button>);

          })}
        </nav>

        <div className="px-3 py-4 border-t border-[var(--color-border-default)] space-y-2">
          <button className="w-full flex items-center justify-center px-3 py-2.5 rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] group relative">
            <Mail size={20} className="shrink-0 transition-all duration-200" />
            <SidebarTooltip label="Contact" />
          </button>
          <button className="w-full flex items-center justify-center px-3 py-2.5 rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] group relative">
            <Info size={20} className="shrink-0 transition-all duration-200" />
            <SidebarTooltip label="About" />
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Tab Bar */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 h-16 frosted-glass border-t border-[var(--color-border-default)] z-40 items-center justify-around px-2 pb-safe">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors flex-1 ${isActive ? 'text-[var(--color-interactive-accent)]' : 'text-[var(--color-text-secondary)]'}`}>
              
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>);

        })}
      </div>
    </>);

}