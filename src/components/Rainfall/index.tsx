// src/components/Rainfall/index.tsx
'use client';
import dynamic from 'next/dynamic';
import { StationProvider } from '../../contexts/StationContext';
import Legend from './Legend';
import PlotContainer from './PlotContainer';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function Rainfall() {
  return (
    <StationProvider>
      {/* Mobile: vertical stacking, scrollable */}
      <div className="block md:hidden w-full min-h-[100vh]">
        <div className="w-full h-[75vh] relative">
          <LeafletMap />
          <div className="absolute bottom-0 left-0 right-0 z-[200] flex justify-center pointer-events-auto">
            <Legend mobile />
          </div>
        </div>
        <div className="w-full">
          <PlotContainer mobile />
        </div>
      </div>
      {/* Desktop: map and legend as before */}
      <div className="hidden md:block">
        <LeafletMap />
        <Legend />
      </div>
    </StationProvider>
  );
}