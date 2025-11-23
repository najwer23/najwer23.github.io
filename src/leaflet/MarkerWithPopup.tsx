import { CircleMarker as LeafletCircleMarker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { CircleMarker, Popup, useMap } from 'react-leaflet';

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
          color: '#D32F2F',
          fillColor: '#D32F2F',
          fillOpacity: 1,
          weight: 2,
        }}
        ref={markerRef}
      >
        <Popup>Sky Tower, Wrocław</Popup>
      </CircleMarker>
    </>
  );
};
