import L from 'leaflet';
import { Button } from 'najwer23morsels/lib/button';
import { IconLocate } from 'najwer23morsels/lib/icons';
import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';

export const CenterMapButton = ({
  center,
  zoom,
  onCenter,
}: {
  center: [number, number];
  zoom: number;
  onCenter: () => void;
}) => {
  const map = useMap();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      L.DomEvent.disableClickPropagation(buttonRef.current);
      L.DomEvent.disableScrollPropagation(buttonRef.current);
    }
  }, []);

  const handleClick = () => {
    const currentCenter = map.getCenter();
    const currentZoom = map.getZoom();

    const isCenterDifferent =
      Math.abs(currentCenter.lat - center[0]) > 1e-3 || Math.abs(currentCenter.lng - center[1]) > 1e-3;
    const isZoomDifferent = currentZoom !== zoom;

    if (isCenterDifferent || isZoomDifferent) {
      map.closePopup();
      setTimeout(() => {
        onCenter();
        map.flyTo(center, zoom);
      }, 300);
    }
  };

  return (
    <Button
      onClick={handleClick}
      ref={buttonRef}
      style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        zIndex: 1000,
      }}
      type="submit"
      height={'40px'}
      width={'40px'}
      padding={0}
      margin={0}
      backgroundColor="orangered"
      backgroundColorDisabled="grey"
    >
      <IconLocate width={20} height={20} color="white" />
    </Button>
  );
};
