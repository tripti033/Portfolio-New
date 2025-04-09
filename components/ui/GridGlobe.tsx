"use client";

import { useRef, useEffect } from 'react';
import { World } from './Globe';
import { cn } from '@/lib/utils';

const globeConfig = {
  pointSize: 1,
  globeColor: "#1d072e",
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.2,
  emissive: "#000000",
  emissiveIntensity: 0.5,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  arcTime: 3000,
  arcLength: 0.9,
  rings: 2,
  maxRings: 5,
  autoRotate: true,
  autoRotateSpeed: 0.6,
  initialPosition: {
    lat: 20,
    lng: 80,
  },
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff"
};

const globeData = [
  {
    order: 1,
    startLat: 40.7128,
    startLng: -74.0060,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.3,
    color: "#7928CA"
  },
  {
    order: 2,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.25,
    color: "#FF0080"
  },
  {
    order: 3,
    startLat: 48.8566,
    startLng: 2.3522,
    endLat: 35.6895,
    endLng: 139.6917,
    arcAlt: 0.35,
    color: "#00C9A7"
  },
  {
    order: 4,
    startLat: 35.6895,
    startLng: 139.6917,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.4,
    color: "#FEE440"
  },
  {
    order: 5,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 28.6139,
    endLng: 77.2090,
    arcAlt: 0.3,
    color: "#F15BB5"
  },
  {
    order: 6,
    startLat: 28.6139,
    startLng: 77.2090,
    endLat: 55.7558,
    endLng: 37.6173,
    arcAlt: 0.3,
    color: "#3A86FF"
  },
  {
    order: 7,
    startLat: 55.7558,
    startLng: 37.6173,
    endLat: -23.5505,
    endLng: -46.6333,
    arcAlt: 0.4,
    color: "#9B5DE5"
  },
  {
    order: 8,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: "#FF6D00"
  },
  {
    order: 9,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 40.7128,
    endLng: -74.0060,
    arcAlt: 0.2,
    color: "#00B4D8"
  }
];

export default function GridGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: '400px',
        height: '400px',
        minHeight: '400px'
      }}
    >
      <div
        ref={containerRef}
        className={cn(
          "globe-container globe-glow",
          "w-[400px] h-[400px]"
        )}
        style={{
          width: '400px',
          height: '400px',
          position: 'relative'
        }}
      >
        <div className="relative w-full flex justify-center items-center">
          <div
            ref={containerRef}
            className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] fixed-size"
          >
            <World globeConfig={globeConfig} data={globeData} />
          </div>
        </div>

      </div>
    </div>
  );
}
