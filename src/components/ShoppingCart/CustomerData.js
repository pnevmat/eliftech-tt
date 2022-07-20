import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import GoogleMap from './GoogleMap/GoogleMap';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Marker from './GoogleMap/Marker';
import coords from 'google-maps-coords';
import Typography from '@mui/material/Typography';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/material/styles';

export default function CustomerData({
  userData,
  setUserData,
  validName,
  validEmail,
  validPhone,
  validAddress,
}) {
  const [data, setData] = useState([]);
  const [map, setMap] = useState(null);
  console.log('Map in googleMap component: ', map);
  const shopAddress = [50.427565233131844, 30.539179858883248];
  // const mapSettings = { zoom: 10, center: google.maps.LatLngLiteral };
  const heatmapData = {
    positions: data,
    options: {
      radius: 20,
      opacity: 1,
    },
  };
  const [zoom, setZoom] = useState(18); // initial zoom
  const [center, setCenter] = useState({
    lat: 50.42726007633734,
    lng: 30.53808888888888,
  });
  // lat: 50.42656007633734,
  // lng: 30.54006377370059,
  const [clicks, setClicks] = useState([]);
  console.log('Clicks: ', clicks);
  const [clickCordinates, setClickCordinates] = useState([]);
  console.log('Click coordinates: ', clickCordinates);
  const mapClickHandler = e => {
    console.log('Event in map click handler: ', e);
    const coordinates = e.latLng;
    console.log('Coordinates clicked: ', coordinates);

    const domEventCordinates = { x: e.domEvent.x, y: e.domEvent.y };
    console.log('Dom event cordinates: ', domEventCordinates);

    const latLngValues = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    console.log('Lat and Lng values from functions: ', latLngValues);

    const latAndLng = map.getBounds();
    console.log('Pixel Lat and lng from event: ', latAndLng);

    const currentZoom = map.zoom;
    console.log('Current zoom: ', currentZoom);

    const normalCoords = coords.llToPX(
      [latLngValues.lat, latLngValues.lng],
      currentZoom,
    );
    console.log('Coordinates to path to marker position: ', normalCoords);
    // getBounds();
    setClickCordinates([...clickCordinates, domEventCordinates]);
    setClicks([
      ...clicks,
      { position: latLngValues, stylePosition: normalCoords },
    ]);
  };

  return (
    <CustomerDataWrapper>
      <Drawer variant="permanent">
        <InputList component="nav" id="nav">
          <Wrapper
            apiKey={'AIzaSyBbEDMMXs5fXz6sqiyHyIKO7SqDszGXNto'}
            defaultZoom={zoom}
            defaultCenter={center}
          >
            <GoogleMap
              zoom={zoom}
              center={center}
              mapClickHandler={mapClickHandler}
              map={map}
              setMap={setMap}
            >
              <Marker key={'i'} position={center} />
              {clicks.map((position, i) => (
                <Marker
                  key={i}
                  position={position.position}
                  styleProps={position.stylePosition}
                  clickCordinates={clickCordinates[i]}
                />
              ))}
            </GoogleMap>
          </Wrapper>
          <InputWrapper>
            <InputLabel>Address:</InputLabel>
            <StyledInput
              value={userData.address}
              onChange={e => setUserData(e.target.value, 'address')}
              onBlur={e => setUserData(e.target.value, 'address')}
            />
            {!validAddress.value && (
              <ValidationMessage>{validAddress.message}</ValidationMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Name:</InputLabel>
            <StyledInput
              value={userData.name}
              onChange={e => setUserData(e.target.value, 'name')}
              onBlur={e => setUserData(e.target.value, 'name')}
            />
            {!validName.value && (
              <ValidationMessage>{validName.message}</ValidationMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Email:</InputLabel>
            <StyledInput
              value={userData.email}
              onChange={e => setUserData(e.target.value, 'email')}
              onBlur={e => setUserData(e.target.value, 'email')}
            />
            {!validEmail.value && (
              <ValidationMessage>{validEmail.message}</ValidationMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Phone:</InputLabel>
            <StyledInput
              value={userData.phone}
              onChange={e => setUserData(e.target.value, 'phone')}
              onBlur={e => setUserData(e.target.value, 'phone')}
            />
            {!validPhone.value && (
              <ValidationMessage>{validPhone.message}</ValidationMessage>
            )}
          </InputWrapper>
        </InputList>
      </Drawer>
    </CustomerDataWrapper>
  );
}

const CustomerDataWrapper = styled(Box)({
  paddingLeft: '20px',
  background: 'transparent',
});

const drawerWidth = '40vw';

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop,
})(({ theme }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));

const InputList = styled(List)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '20px',
  paddingRight: '20px',
  paddingBottom: '20px',
  paddingLeft: '20px',
  '& :not(:last-child)': {
    marginBottom: '20px',
  },
});

const InputWrapper = styled(Box)({
  width: '100%',
});

const InputLabel = styled(Typography)({
  paddingLeft: '10px',
  marginBottom: '10px !important',
});

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInput = styled(InputUnstyled)(({ theme }) => ({
  '& > input': {
    width: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'inherit',
  },
  fontSize: '0.875rem',
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontWeight: 400,
  lineHeight: 1.5,
  color: `${theme.palette.mode === 'dark' ? grey[300] : grey[900]}`,
  background: `${theme.palette.mode === 'dark' ? grey[900] : grey[50]}`,
  border: `1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]}`,
  borderRadius: '8px',
  padding: '12px 12px',
  '&:hover': {
    background: `${theme.palette.mode === 'dark' ? '' : grey[100]}`,
    borderColor: `${theme.palette.mode === 'dark' ? grey[700] : grey[400]}`,
  },
  '&:focus': {
    outline: `3px solid ${
      theme.palette.mode === 'dark' ? blue[600] : blue[100]
    }`,
  },
}));

const ValidationMessage = styled(Typography)({
  paddingLeft: '10px',
  fontSize: '14px',
  fontWeight: 400,
  color: 'red',
});
