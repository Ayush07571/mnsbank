'use client';

import { LocatorMap, Location } from '@/components/maps/LocatorMap';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface LocatorMapWrapperProps {
  locations?: Location[];
  height?: string;
  filterType?: 'all' | 'branch' | 'atm';
  showControls?: boolean;
}

export function LocatorMapWrapper({
  locations,
  height,
  filterType,
  showControls
}: LocatorMapWrapperProps) {
  const handleLocationSelect = (location: Location) => {
    console.log('Selected location:', location);
    // Could open a modal with more details or show directions
  };

  return (
    <LocatorMap
      locations={locations}
      height={height}
      filterType={filterType}
      onLocationSelect={handleLocationSelect}
      showControls={showControls}
    />
  );
}
