import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export default function Marker({ position, styleProps, clickCordinates }) {
  // console.log('Options of Marker: ', options);
  console.log('Position in Marker: ', position);
  console.log('Style props: ', styleProps);
  const [marker, setMarker] = React.useState();
  const [coordinatesNormalized, setCoordinatesNormalized] = useState(null);

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  // useEffect(() => {
  //   if (marker && options) {
  //     marker.setOptions(options);
  //   }
  // }, [marker, options]);

  useEffect(() => {
    if (clickCordinates) {
      const clickCordinatesNormalize = {
        x: clickCordinates.x - 43,
        y: clickCordinates.y - 166,
      };
      setCoordinatesNormalized(clickCordinatesNormalize);
    }
  }, [clickCordinates]);

  return (
    <MarkerBox coordinatesNormalized={coordinatesNormalized}>Marker</MarkerBox>
  );
}

const MarkerBox = styled(Box)(({ coordinatesNormalized }) => ({
  position: 'absolute',
  width: 40,
  height: 40,
  left: coordinatesNormalized?.x ? `${coordinatesNormalized.x}px` : '430px',
  top: coordinatesNormalized?.y ? `${coordinatesNormalized.y}px` : '90px',

  border: '5px solid #f44336',
  borderRadius: 40,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
}));
