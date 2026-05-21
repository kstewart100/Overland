import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TabBar } from './components/TabBar';
import { BucketList } from './pages/BucketList';
import { ActivitiesDashboard } from './pages/ActivitiesDashboard';
import { LightThemePreview } from './pages/LightThemePreview';
import {
  type JourneyStop,
  type Activity,
  type ActivityType } from
'./data/tripData';
import {
  parseRoute,
  buildStopUrl,
  buildActivityUrl,
  findStopBySlug,
  findActivityById } from
'./utils/routing';
import { WorldMap } from './components/WorldMap';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedStop, setSelectedStop] = useState<JourneyStop | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [activeTypeFilter, setActiveTypeFilter] = useState<ActivityType | null>(
    null
  );
  const [currentView, setCurrentView] = useState<
    'home' | 'trips' | 'bucket-list' | 'activities'>(
    'home');
  useEffect(() => {
    const route = parseRoute(location.pathname);
    setCurrentView(route.view);
    if (route.view === 'trips') {
      if (
      route.countryId &&
      route.regionId &&
      route.citySlug &&
      route.activityId)
      {
        const activity = findActivityById(route.activityId);
        setSelectedActivity(activity || null);
        setSelectedStop(null);
      } else if (route.countryId && route.regionId && route.citySlug) {
        const stop = findStopBySlug(
          route.countryId,
          route.regionId,
          route.citySlug
        );
        setSelectedStop(stop || null);
        setSelectedActivity(null);
      } else {
        setSelectedStop(null);
        setSelectedActivity(null);
      }
    } else if (route.view === 'activities') {
      if (route.activityId) {
        const activity = findActivityById(route.activityId);
        setSelectedActivity(activity || null);
        setSelectedStop(null);
      } else {
        setSelectedActivity(null);
        setSelectedStop(null);
      }
    } else {
      setSelectedStop(null);
      setSelectedActivity(null);
    }
  }, [location.pathname]);
  const handleStopClick = useCallback(
    (stop: JourneyStop) => {
      navigate(buildStopUrl(stop));
    },
    [navigate]
  );
  const handleActivityClick = useCallback(
    (activity: Activity) => {
      navigate(buildActivityUrl(activity));
    },
    [navigate]
  );
  const handleClearSelection = useCallback(() => {
    navigate('/trips');
  }, [navigate]);
  // Quick check for /preview route
  if (location.pathname === '/preview') {
    return <LightThemePreview />;
  }
  // Helper to wrap dashboard/list views with the TabBar
  const FullPageLayout = ({ children }: {children: React.ReactNode;}) =>
  <div className="flex w-full h-full bg-[var(--color-bg-subtle)] overflow-hidden">
      <TabBar />
      <div className="flex-1 h-full overflow-hidden relative">{children}</div>
    </div>;

  if (currentView === 'bucket-list') {
    return (
      <FullPageLayout>
        <BucketList />
      </FullPageLayout>);

  }
  if (currentView === 'activities' && !selectedActivity) {
    return (
      <FullPageLayout>
        <ActivitiesDashboard />
      </FullPageLayout>);

  }
  return (
    <div className="flex w-full h-full bg-[var(--color-bg-subtle)] overflow-hidden">
      {/* Left Hand Rail */}
      <TabBar />

      {/* Main Container: Contains Sidebar and Map side-by-side */}
      <main className="flex-1 flex relative overflow-hidden min-h-0 min-w-0">
        {/* Sidebar */}
        {(currentView === 'home' ||
        currentView === 'trips' ||
        currentView === 'activities' && selectedActivity) &&
        <Sidebar
          selectedStopId={selectedStop?.id ?? null}
          selectedActivityId={selectedActivity?.id ?? null}
          onStopClick={handleStopClick}
          onActivityClick={handleActivityClick}
          onClearSelection={handleClearSelection}
          currentView={currentView} />

        }

        {/* Map Area */}
        <div className="flex-1 relative h-full min-h-0 min-w-0">
          <WorldMap
            showAllActivities={showAllActivities}
            selectedStopId={selectedStop?.id ?? null}
            selectedActivityId={selectedActivity?.id ?? null}
            activeTypeFilter={activeTypeFilter}
            onStopClick={handleStopClick}
            onActivityClick={handleActivityClick} />
        </div>
      </main>
    </div>);

}