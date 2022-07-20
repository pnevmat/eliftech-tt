import React, {
  useState,
  useEffect,
  useRef,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import { createCustomEqual } from 'fast-equals';
import { styled } from '@mui/material/styles';

// const defaultProps = {
//   center: { lat: 59, lng: 30 },
//   // [59.938043, 30.337157]
//   zoom: 11,
//   shopLocation: { lat: 59.724465, lng: 30.080121 },
// };

// function createMapOptions(maps) {
//   // next props are exposed at maps
//   // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
//   // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
//   // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
//   // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
//   // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
//   return {
//     zoomControlOptions: {
//       position: maps.ControlPosition.RIGHT_CENTER,
//       // style: maps.ZoomControlStyle.SMALL,
//     },
//     mapTypeControlOptions: {
//       position: maps.ControlPosition.TOP_RIGHT,
//     },
//     mapTypeControl: true,
//   };
// }

// const ShopAddress = ({ text }) => {
//   return <Marker>{text}</Marker>;
// };

export default function GoogleMap({
  zoom,
  center,
  mapClickHandler,
  map,
  setMap,
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map, setMap]);

  const deepCompareEqualsForMaps = createCustomEqual(deepEqual => (a, b) => {
    if (
      a instanceof window.google.maps.LatLng ||
      b instanceof window.google.maps.LatLng
    ) {
      return new window.google.maps.LatLng(a).equals(
        new window.google.maps.LatLng(b),
      );
    }
    // TODO extend to other types
    // use fast-equals for other objects
    return deepEqual(a, b);
  });

  function useDeepCompareMemoize(value) {
    const ref = useRef();

    if (!deepCompareEqualsForMaps(value, ref.current)) {
      ref.current = value;
    }
    return ref.current;
  }

  function useDeepCompareEffectForMaps(callback, dependencies) {
    useEffect(callback, dependencies.map(useDeepCompareMemoize));
  }

  useDeepCompareEffectForMaps(() => {
    const options = {
      zoom,
      center,
    };
    if (map) {
      map.setOptions(options);
    }
  }, [map, zoom, center]);

  useEffect(() => {
    if (map) {
      ['click', 'idle'].forEach(eventName =>
        window.google.maps.event.clearListeners(map, eventName),
      );

      if (mapClickHandler) {
        map.addListener('click', mapClickHandler);
      }

      // if (onIdle) {
      //   map.addListener("idle", () => onIdle(map));
      // }
    }
  }, [map, mapClickHandler]);

  return (
    <>
      <Container ref={ref}></Container>
      {Children.map(children, child => {
        console.log('Child in ', child);
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </>
  );
}

const Container = styled('main')({
  width: '100%',
  height: '400px',
});
