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
    services: ['Personal Banking', 'Business Banking', 'Loans', ' Deposits', 'Forex'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '2',
    name: 'MNS Bank - MP Nagar',
    type: 'branch',
    address: '456, Commercial Area',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462011',
    phone: '0755-234-5678',
    coordinates: {
      lat: 23.2270,
      lng: 77.4375
    },
    services: ['Personal Banking', 'Business Banking', 'Loans'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '3',
    name: 'MNS Bank - Habibganj',
    type: 'branch',
    address: '789, Station Road',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462016',
    phone: '0755-345-6789',
    coordinates: {
      lat: 23.2315,
      lng: 77.4344
    },
    services: ['Personal Banking', 'Loans', 'Deposits'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '4',
    name: 'MNS Bank - New Market',
    type: 'branch',
    address: '321, Market Complex',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462003',
    phone: '0755-456-7890',
    coordinates: {
      lat: 23.2443,
      lng: 77.4019
    },
    services: ['Personal Banking', 'Business Banking'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '5',
    name: 'MNS ATM - Habibganj',
    type: 'atm',
    address: 'Near Railway Station',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462016',
    phone: '0755-345-6789',
    coordinates: {
      lat: 23.2325,
      lng: 77.4354
    },
    services: ['24/7 ATM', 'Cash Deposit', 'Mini Statement']
  },
  {
    id: '6',
    name: 'MNS ATM - MP Nagar',
    type: 'atm',
    address: 'Near Commercial Area',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462011',
    phone: '0755-234-5678',
    coordinates: {
      lat: 23.2260,
      lng: 77.4385
    },
    services: ['24/7 ATM', 'Cash Deposit', 'Mini Statement']
  }
];

interface LocatorMapProps {
  locations?: Location[];
  center?: {
    lat: number;
    lng: number;
  };
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
  const [map, setMap] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFilter, setCurrentFilter] = useState(filterType);

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    const loadMap = async () => {
      if (typeof window === 'undefined' || !mapRef.current) return;

      try {
        const L = await import('leaflet');
        
        // Fix for default markers in Leaflet with webpack
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        });

        const leafletMap = L.map(mapRef.current).setView([center.lat, center.lng], zoom);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(leafletMap);

        setMap(leafletMap);
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    loadMap();
  }, [center, zoom]);

  useEffect(() => {
    if (!map) return;

    // Clear existing markers
    map.eachLayer((layer: any) => {
      if (layer instanceof (window as any).L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Filter locations based on current filter
    const filteredLocations = currentFilter === 'all' 
      ? locations 
      : locations.filter(loc => loc.type === currentFilter);

    // Add markers for filtered locations
    filteredLocations.forEach((location) => {
      const L = (window as any).L;
      
      // Create custom icon based on location type
      const customIcon = L.divIcon({
        html: `
          <div class="custom-marker ${location.type}">
            <div class="marker-icon">
              ${location.type === 'branch' ? 
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>' :
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
              }
            </div>
          </div>
        `,
        className: 'custom-div-icon',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      const marker = L.marker([location.coordinates.lat, location.coordinates.lng], {
        icon: customIcon
      }).addTo(map);

      // Create popup content
      const popupContent = `
        <div class="map-popup">
          <h3>${location.name}</h3>
          <p><strong>Type:</strong> ${location.type === 'branch' ? 'Branch' : 'ATM'}</p>
          <p><strong>Address:</strong> ${location.address}, ${location.city}, ${location.state} - ${location.pincode}</p>
          <p><strong>Phone:</strong> ${location.phone}</p>
          ${location.email ? `<p><strong>Email:</strong> ${location.email}</p>` : ''}
          ${location.services ? `<p><strong>Services:</strong> ${location.services.join(', ')}</p>` : ''}
          ${location.timings ? `
            <p><strong>Timings:</strong></p>
            <p>Weekdays: ${location.timings.weekdays}</p>
            <p>Saturday: ${location.timings.saturday}</p>
            <p>Sunday: ${location.timings.sunday}</p>
          ` : ''}
        </div>
      `;

      marker.bindPopup(popupContent);
      
      marker.on('click', () => {
        setSelectedLocation(location);
        onLocationSelect?.(location);
      });
    });

  }, [map, locations, currentFilter, onLocationSelect]);

  const filteredLocations = currentFilter === 'all' 
    ? locations 
    : locations.filter(loc => loc.type === currentFilter);

  const searchFilteredLocations = searchQuery
    ? filteredLocations.filter(loc => 
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.city.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredLocations;

  return (
    <div className="w-full">
      {/* Map Controls */}
      {showControls && (
        <div className="mb-4 flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          
          {/* Filter Buttons */}
          <div className="flex gap-2">
            <Button
              variant={currentFilter === 'all' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setCurrentFilter('all')}
            >
              All
            </Button>
            <Button
              variant={currentFilter === 'branch' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setCurrentFilter('branch')}
            >
              Branches
            </Button>
            <Button
              variant={currentFilter === 'atm' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setCurrentFilter('atm')}
            >
              ATMs
            </Button>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div
                ref={mapRef}
                style={{ height, minHeight: '400px' }}
                className="w-full rounded-lg"
              />
            </CardContent>
          </Card>
        </div>

        {/* Location List */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-text-primary mb-4">
                Locations ({searchFilteredLocations.length})
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {searchFilteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className={`p-3 border border-border rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                      selectedLocation?.id === location.id ? 'bg-brand-primary/10 border-brand-primary' : ''
                    }`}
                    onClick={() => {
                      setSelectedLocation(location);
                      onLocationSelect?.(location);
                      // Center map on selected location
                      if (map) {
                        map.setView([location.coordinates.lat, location.coordinates.lng], 15);
                      }
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        location.type === 'branch' ? 'bg-brand-primary text-white' : 'bg-green-500 text-white'
                      }`}>
                        {location.type === 'branch' ? 'B' : 'A'}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-text-primary text-sm">
                          {location.name}
                        </h4>
                        <p className="text-xs text-text-secondary mb-1">
                          {location.address}, {location.city}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {location.phone}
                        </p>
                        {location.services && (
                          <div className="mt-2">
                            <div className="flex flex-wrap gap-1">
                              {location.services.slice(0, 2).map((service, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                >
                                  {service}
                                </span>
                              ))}
                              {location.services.length > 2 && (
                                <span className="text-xs text-gray-500">
                                  +{location.services.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .custom-marker {
          position: relative;
        }
        
        .marker-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        
        .custom-marker.branch .marker-icon {
          background: #3b82f6;
          color: white;
        }
        
        .custom-marker.atm .marker-icon {
          background: #10b981;
          color: white;
        }
        
        .map-popup {
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        .map-popup h3 {
          margin: 0 0 8px 0;
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
        }
        
        .map-popup p {
          margin: 4px 0;
          font-size: 14px;
          color: #4b5563;
        }
        
        .map-popup strong {
          color: #1f2937;
        }
      `}</style>
    </div>
  );
}
