import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export default function Marker({ options, position }) {
  console.log('Options of Marker: ', options);
  console.log('Position in Marker: ', position);
  const [marker, setMarker] = React.useState();

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

  useEffect(() => {
    if (marker && options) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return <MarkerBox>Marker</MarkerBox>;
}

const MarkerBox = styled(Box)({
  position: 'absolute',
  width: 40,
  height: 40,
  left: '430px',
  top: '90px',

  border: '5px solid #f44336',
  borderRadius: 40,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
});
