'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export interface Location {
  id: string;
  name: string;
  type: 'branch' | 'atm';
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  services?: string[];
  timings?: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

const sampleLocations: Location[] = [
  {
    id: '1',
    name: 'MNS Bank - Head Office',
    type: 'branch',
    address: '123, Banking Street',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462001',
    phone: '0755-123-4567',
    email: 'headoffice@mnsbank.com',
    coordinates: {
      lat: 23.2599,
      lng: 77.4126
    },
    services: ['Personal Banking', 'Business Banking', 'Loans', 'Deposits', 'Forex'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '2',
    name: 'MNS Bank - ATM - New Market',
    type: 'atm',
    address: '456, Market Road',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462002',
    phone: '0755-234-5678',
    coordinates: {
      lat: 23.2499,
      lng: 77.4026
    }
  },
  {
    id: '3',
    name: 'MNS Bank - Branch - MP Nagar',
    type: 'branch',
    address: '789, Civil Lines',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462003',
    phone: '0755-345-6789',
    email: 'mpnagar@mnsbank.com',
    coordinates: {
      lat: 23.2699,
      lng: 77.4226
    },
    services: ['Personal Banking', 'Business Banking', 'Deposits'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed'
    }
  }
];

interface LocatorMapProps {
  locations?: Location[];
  center?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
  showControls?: boolean;
  onLocationSelect?: (location: Location) => void;
  filterType?: 'all' | 'branch' | 'atm';
}

export function LocatorMap({
  locations = sampleLocations,
  center = { lat: 23.2599, lng: 77.4126 },
  zoom = 12,
  height = '400px',
  showControls = true,
  onLocationSelect,
  filterType = 'all'
}: LocatorMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(filterType);
  const [currentZoom, setCurrentZoom] = useState(zoom);

  // Load Leaflet CSS and JS
  useEffect(() => {
    const loadLeaflet = async () => {
      try {
        // Load Leaflet CSS
        const leafletCSS = document.createElement('link');
        leafletCSS.rel = 'stylesheet';
        leafletCSS.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(leafletCSS);

        // Load Leaflet JS
        const leafletJS = document.createElement('script');
        leafletJS.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        leafletJS.onload = () => {
          setTimeout(() => initializeMap(), 100);
        };
        document.head.appendChild(leafletJS);

        setMapLoaded(true);
      } catch (error) {
        console.error('Error loading Leaflet:', error);
      }
    };

    loadLeaflet();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || !window.L) return;

    try {
      // Check if map container is already initialized
      if (mapInstanceRef.current) {
        // Remove existing map instance
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Clear any existing content in the container
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }

      // Create map
      const map = window.L.map(mapRef.current).setView([center.lat, center.lng], zoom);

      // Add OpenStreetMap tiles
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Disable default zoom controls
      map.zoomControl.remove();

      mapInstanceRef.current = map;
      addMarkers(map);

      // Update zoom state when zoom changes
      map.on('zoomend', () => {
        setCurrentZoom(map.getZoom());
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const addMarkers = (map: any) => {
    // Clear existing markers
    markersRef.current.forEach(marker => map.removeLayer(marker));
    markersRef.current = [];

    // Filter locations
    const filteredLocations = currentFilter === 'all' 
      ? locations 
      : locations.filter(loc => loc.type === currentFilter);

    // Add markers
    filteredLocations.forEach((location) => {
      const icon = window.L.divIcon({
        html: `
          <div style="
            background: ${location.type === 'branch' ? '#2563eb' : '#10b981'};
            width: 32px;
            height: 32px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              transform: rotate(45deg);
              color: white;
              font-size: 14px;
              font-weight: bold;
            ">
              ${location.type === 'branch' ? '🏦' : '🏧'}
            </div>
          </div>
        `,
        className: 'custom-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      const marker = window.L.marker([location.coordinates.lat, location.coordinates.lng], { icon })
        .addTo(map);

      // Create popup
      const popupContent = `
        <div style="padding: 8px; min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1f2937;">${location.name}</h3>
          <p style="margin: 0 0 4px 0; font-size: 14px; color: #6b7280;">${location.address}</p>
          <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">${location.city}, ${location.state} - ${location.pincode}</p>
          <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">📞 ${location.phone}</p>
          ${location.timings ? `<p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">🕒 ${location.timings.weekdays}</p>` : ''}
          <p style="margin: 8px 0 0 0; font-size: 12px; font-weight: bold; color: ${location.type === 'branch' ? '#2563eb' : '#10b981'};">
            ${location.type === 'branch' ? '🏦 Branch' : '🏧 ATM'}
          </p>
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on('click', () => {
        setSelectedLocation(location);
        if (onLocationSelect) {
          onLocationSelect(location);
        }
      });

      markersRef.current.push(marker);
    });
  };

  // Update markers when filter changes
  useEffect(() => {
    if (mapInstanceRef.current) {
      addMarkers(mapInstanceRef.current);
    }
  }, [currentFilter, locations]);

  if (!mapLoaded) {
    return (
      <div className="relative w-full" style={{ height }}>
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-500 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Loading Map...</h3>
            <p className="text-gray-500">Please wait while we load the map</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ height }}>
      <div ref={mapRef} className="w-full h-full rounded-lg" style={{ minHeight: '400px' }} />
      
      {showControls && (
        <div className="absolute top-4 left-4 z-[1000] bg-white rounded-lg shadow-lg p-2">
          <div className="flex gap-2">
            <Button
              variant={currentFilter === 'all' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setCurrentFilter('all')}
            >
              All ({locations.length})
            </Button>
            <Button
              variant={currentFilter === 'branch' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setCurrentFilter('branch')}
            >
              🏦 Branches ({locations.filter(l => l.type === 'branch').length})
            </Button>
            <Button
              variant={currentFilter === 'atm' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setCurrentFilter('atm')}
            >
              🏧 ATMs ({locations.filter(l => l.type === 'atm').length})
            </Button>
          </div>
        </div>
      )}

      {/* Custom Zoom Controls */}
      {showControls && (
        <div className="absolute top-4 right-4 z-[1000] bg-white rounded-lg shadow-lg p-1">
          <div className="flex flex-col gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (mapInstanceRef.current && currentZoom < 19) {
                  mapInstanceRef.current.setZoom(currentZoom + 1);
                }
              }}
              disabled={currentZoom >= 19}
              className="w-8 h-8 p-0"
            >
              +
            </Button>
            <div className="text-xs text-center font-medium text-gray-600">
              {currentZoom}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (mapInstanceRef.current && currentZoom > 1) {
                  mapInstanceRef.current.setZoom(currentZoom - 1);
                }
              }}
              disabled={currentZoom <= 1}
              className="w-8 h-8 p-0"
            >
              −
            </Button>
          </div>
        </div>
      )}

      {selectedLocation && (
        <div className="absolute bottom-4 right-4 z-[1000] bg-white rounded-lg shadow-lg p-4 max-w-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-900">{selectedLocation.name}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedLocation(null)}
            >
              ✕
            </Button>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>📍 {selectedLocation.address}</p>
            <p>{selectedLocation.city}, {selectedLocation.state} - {selectedLocation.pincode}</p>
            <p>📞 {selectedLocation.phone}</p>
            {selectedLocation.timings && (
              <p>🕒 {selectedLocation.timings.weekdays}</p>
            )}
            <p className="font-medium text-blue-600">
              {selectedLocation.type === 'branch' ? '🏦 Branch' : '🏧 ATM'}
            </p>
          </div>
          <div className="mt-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                try {
                  // Open in Google Maps with the exact location
                  const query = `${selectedLocation.name}, ${selectedLocation.address}, ${selectedLocation.city}, ${selectedLocation.state} ${selectedLocation.pincode}`;
                  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
                  
                  console.log('Selected Location:', selectedLocation);
                  console.log('Query:', query);
                  console.log('Encoded URL:', url);
                  
                  // Try to open in new window
                  const newWindow = window.open(url, '_blank');
                  
                  if (!newWindow) {
                    console.error('Failed to open new window - popup might be blocked');
                    // Fallback: try opening in same window
                    window.location.href = url;
                  } else {
                    console.log('Successfully opened Google Maps');
                  }
                } catch (error) {
                  console.error('Error opening Google Maps:', error);
                  alert('Unable to open directions. Please check your browser settings.');
                }
              }}
            >
              🗺️ Get Directions
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
