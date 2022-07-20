import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { createCustomEqual } from 'fast-equals';
import GoogleMapReact from 'google-map-react';
import Box from '@mui/material/Box';
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

export default function GoogleMap({ zoom, center }) {
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  console.log('Map in googleMap component: ', map);

  useEffect(() => {
    console.log('Ref in useEffect: ', ref);
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

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

  const markerClickHandler = () => {};
  return <Container ref={ref}></Container>;
}

const Container = styled('main')({
  width: '100%',
  height: '400px',
});

const Marker = styled('div')({
  position: 'absolute',
  width: 40,
  height: 40,
  left: '-40 / 2',
  top: '-40 / 2',

  border: '5px solid #f44336',
  borderRadius: 40,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
});
