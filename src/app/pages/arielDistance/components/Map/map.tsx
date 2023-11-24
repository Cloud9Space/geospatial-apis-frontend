import React, { useState, useContext, useEffect } from 'react';
// import geocodeContext from 'layouts/geocode/context/geocode/geocodeContext';
import { Circle, GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';
import aerialDistanceContext from '../../context/aerialDistance/aerialDistance';
// import { test_data } from '../Data/data';
// import axios from 'axios';

// import MDBox from "components/MDBox";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
// const api_url = process.env.REACT_APP_API_URL_DEV
// const api_key = process.env.REACT_APP_API_KEY

const AerialDistanceMap = () => {
  // const defaultCenter = { lat: 18.531905, lng: 73.847874 };
  const { aerialDistanceMapData, setAerialDistanceMapData, aerialDistanceResponse, setAerialDistanceResponse } = useContext(aerialDistanceContext)
  const defaultCenter = { lat: aerialDistanceResponse.sourceLatitude, lng: aerialDistanceResponse.sourceLongitude };

  const [markerPositionSource, setMarkerPositionSource] = useState(defaultCenter);
  const [markerPositionDestination, setMarkerPositionDestination] = useState(defaultCenter);
  const [centerPosition, setCenterPosition] = useState(defaultCenter);
  const [markerVisible, setMarkerVisible] = useState(false);
  // const [redMarkerVisible, setRedMarkerVisible] = useState(false);


  useEffect(() => {
    setMarkerPositionSource({
      lat: parseFloat(aerialDistanceResponse.sourceLatitude),
      lng: parseFloat(aerialDistanceResponse.sourceLongitude),
    });
    setMarkerPositionDestination({
      lat: parseFloat(aerialDistanceResponse.destinationLatitude),
      lng: parseFloat(aerialDistanceResponse.destinationLongitude),
    });
    setCenterPosition({
      lat: aerialDistanceResponse.sourceLatitude,
      lng: aerialDistanceResponse.sourceLongitude,
    });
    // setMarkerVisible(true)
    // setCenterPosition({
    //   lat: parseFloat(geolimitResponse.latitude),
    //   lng: parseFloat(geolimitResponse.longitude),
    // });
    console.log(aerialDistanceResponse.aerialDistance != undefined)
    if (aerialDistanceResponse.aerialDistance != undefined) {
      setMarkerVisible(true)
      // setRedMarkerVisible(false)
    }
    else {
      // setRedMarkerVisible(true)
      setMarkerVisible(false)
    }
  }, [aerialDistanceResponse])

  useEffect(() => {
    // setMarkerVisible(false)
    // setRedMarkerVisible(false)
    console.log("geolimitMapData in default")
    console.log(aerialDistanceResponse)

    setCenterPosition({
      lat: aerialDistanceResponse.sourceLatitude,
      lng: aerialDistanceResponse.sourceLongitude,
    });
    console.log(centerPosition.lat)
    setMarkerVisible(false)
    // setMarkerPosition({
    //   lat: geolimitMapData.latitude,
    //   lng: geolimitMapData.longitude,
    // });

  }, [])

  // useEffect(() => {
  //   // if (geolimitResponse.withInGeolimit){
  //   //   setFillColor("#42f54b")
  //   //   console.log(fillColor)
  //   // }
  //   // console.log(geolimitMapData)
  //   // setMarkerPosition({
  //   //   lat: geolimitMapData.latitude,
  //   //   lng: geolimitMapData.longitude,
  //   // });
  //   // console.log(geolimitMapData)
  //   setCenterPosition({
  //     lat: arielDistanceResponse.sourceLatitude,
  //     lng: arielDistanceResponse.sourceLongitude,
  //   });
  // }, [arielDistanceResponse])

  return (
    <LoadScript googleMapsApiKey={API_KEY!}>
      <div className='d-flex flex-row flex-center align-items-center fs-5 fw-semibold' style={{padding: '10px'}}>
          <label>{`Aerial Distance : ${aerialDistanceResponse.aerialDistance!=null ? aerialDistanceResponse.aerialDistance : "Make a submission"}`}</label>
      </div>
      <GoogleMap
        mapContainerStyle={{ width: 'auto', height: '510px', margin: '5px' }}
        center={centerPosition}
        zoom={13}
      >

        
        {markerVisible && (<Marker position={markerPositionSource} />)}
        {markerVisible && (<Marker position={markerPositionDestination} />)}
        {/* {redMarkerVisible && (
          <Marker
          position={markerPosition}
        // draggable={true}
        // onDragEnd={handleMarkerDragEnd}
        />
        )}
        {markerVisible && (<Marker
          position={markerPosition}
          icon='http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        // draggable={true}
        // onDragEnd={handleMarkerDragEnd}
        />)} */}
                
               
          {markerVisible && (<Polygon
            // key={index}
            paths={[markerPositionSource,markerPositionDestination]}
            options={{
              fillColor: '#0373fc',
              fillOpacity: 0.45,
              strokeColor: '#0373fc',
              strokeOpacity: 0.8,
              strokeWeight: 5,
            }}
          />)}

      </GoogleMap>

    </LoadScript>
  );
};


export default AerialDistanceMap;
// GeocodeMap