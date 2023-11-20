import React, { useState, useContext, useEffect } from 'react';
//import geocodeContext from '../Context/geocode/geocodeContext';
import geocodeContext from '../../context/geocode/geocodeContext';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const GeocodeMap = () => {
  const { geocodeResponse } = useContext(geocodeContext)

  const defaultCenter = { lat: geocodeResponse.latitude, lng: geocodeResponse.longitude };

  const [markerPosition, setMarkerPosition] = useState(defaultCenter);


  const handleMarkerDragEnd = (event) => {
    console.log(event)
    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  useEffect(() => {
    console.log("geocodeResponse" + geocodeResponse)
    if ('data' in geocodeResponse){
        setMarkerPosition({
        lat: geocodeResponse.latitude,
        lng: geocodeResponse.longitude
      });
      console.log(markerPosition)
    }
    else{
      setMarkerPosition(defaultCenter)
    }
  }, [geocodeResponse])

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY!}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '580px' }}
        center={markerPosition}
        zoom={13}
      >
        <Marker
          position={markerPosition}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
        />
      </GoogleMap>

    </LoadScript>
  );
};

export default GeocodeMap;