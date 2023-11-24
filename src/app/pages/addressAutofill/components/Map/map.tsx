import React, { useState, useContext, useEffect } from 'react';
//import geocodeContext from '../Context/geocode/geocodeContext';
// import geocodeContext from '../../context/addressAutofill/geocodeContext';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import addressAutofill from '../../context/addressAutofill/addressAutofillContext';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const AddressAutofillMap = () => {
  const { geocodeResponse } = useContext(addressAutofill)

  const defaultCenter = { lat: geocodeResponse.latitude, lng: geocodeResponse.longitude };

  const [markerPosition, setMarkerPosition] = useState(defaultCenter);

  const [markerVisible, setMarkerVisible] = useState(false);

  const handleMarkerDragEnd = (event) => {
    console.log(event)
    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };
  // useEffect(()=>{
  //   setMarkerVisible(false)
  // })

  useEffect(() => {
    console.log("geocodeResponse" , geocodeResponse.data)
    if ('data' in geocodeResponse){
        setMarkerPosition({
        lat: geocodeResponse.data.latitude,
        lng: geocodeResponse.data.longitude
      });
      console.log(markerPosition)
      setMarkerVisible(true)

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
        {markerVisible && (<Marker
          position={markerPosition}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
        />)}
      </GoogleMap>

    </LoadScript>
  );
};

export default AddressAutofillMap;