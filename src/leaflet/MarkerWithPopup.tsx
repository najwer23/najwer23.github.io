import { CircleMarker as LeafletCircleMarker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { CircleMarker, useMap } from 'react-leaflet';
import { CustomPopup } from './customPopup/CustomPopup';

interface MarkerWithPopupProps {
  mapIsFlying: boolean;
  setMapIsFlying: (v: boolean) => void;
}

export const MarkerWithPopup: React.FC<MarkerWithPopupProps> = ({ mapIsFlying, setMapIsFlying }) => {
  const markerRef = useRef<LeafletCircleMarker>(null);
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    });
  }, []);

  useEffect(() => {
    if (!map) return;

    const handleMoveEnd = () => {
      setTimeout(() => {
        if (mapIsFlying && markerRef.current) {
          markerRef.current.openPopup();
          setMapIsFlying(false);
        }
      });
    };

    map.on('moveend', handleMoveEnd);

    return () => {
      map.off('moveend', handleMoveEnd);
    };
  }, [map, mapIsFlying]);

  return (
    <>
      <CircleMarker
        center={[51.094598, 17.020876]}
        radius={8}
        pathOptions={{
          color: !mapIsFlying ? '#D32F2F' : 'transparent',
          fillColor: !mapIsFlying ? '#D32F2F' : 'transparent',
          fillOpacity: 1,
          weight: 2,
        }}
        ref={markerRef}
      >
        <CustomPopup />
      </CircleMarker>
    </>
  );
};
