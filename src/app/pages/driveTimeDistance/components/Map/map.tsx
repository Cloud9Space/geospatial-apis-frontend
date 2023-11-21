import React, { useState, useContext, useEffect } from 'react';
// import geocodeContext from 'layouts/geocode/context/geocode/geocodeContext';
import { Circle, GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';
import driveTimeDistanceContext from '../../context/driveTimeDistance/driveTimeDistance';
// import { test_data } from '../Data/data';
// import axios from 'axios';

// import MDBox from "components/MDBox";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
// const api_url = process.env.REACT_APP_API_URL_DEV
// const api_key = process.env.REACT_APP_API_KEY

const DriveTimeDistanceMap = () => {
  // const defaultCenter = { lat: 18.531905, lng: 73.847874 };
  const { driveTimeDistanceMapData, setDriveTimeDistanceMapData, driveTimeDistanceResponse, setDriveTimeDistanceResponse } = useContext(driveTimeDistanceContext)
  const defaultCenter = { lat: driveTimeDistanceResponse.sourceLatitude, lng: driveTimeDistanceResponse.sourceLongitude };

  const [markerPositionSource, setMarkerPositionSource] = useState(defaultCenter);
  const [markerPositionDestination, setMarkerPositionDestination] = useState(defaultCenter);
  const [centerPosition, setCenterPosition] = useState(defaultCenter);
  const [markerVisible, setMarkerVisible] = useState(false);
  // const [redMarkerVisible, setRedMarkerVisible] = useState(false);


  useEffect(() => {
    setMarkerPositionSource({
      lat: parseFloat(driveTimeDistanceResponse.sourceLatitude),
      lng: parseFloat(driveTimeDistanceResponse.sourceLongitude),
    });
    setMarkerPositionDestination({
      lat: parseFloat(driveTimeDistanceResponse.destinationLatitude),
      lng: parseFloat(driveTimeDistanceResponse.destinationLongitude),
    });
    setCenterPosition({
      lat: driveTimeDistanceResponse.sourceLatitude,
      lng: driveTimeDistanceResponse.sourceLongitude,
    });
    // setMarkerVisible(true)
    // setCenterPosition({
    //   lat: parseFloat(geolimitResponse.latitude),
    //   lng: parseFloat(geolimitResponse.longitude),
    // });
    // console.log(driveTimeDistanceResponse.driveTimeDistance != undefined)
    if (driveTimeDistanceResponse.driveTimeDistance != undefined) {
      setMarkerVisible(true)
      // setRedMarkerVisible(false)
    }
    else {
      // setRedMarkerVisible(true)
      setMarkerVisible(false)
    }
  }, [driveTimeDistanceResponse])

  useEffect(() => {
    // setMarkerVisible(false)
    // setRedMarkerVisible(false)
    console.log("geolimitMapData in default")
    console.log(driveTimeDistanceResponse)

    setCenterPosition({
      lat: driveTimeDistanceResponse.sourceLatitude,
      lng: driveTimeDistanceResponse.sourceLongitude,
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
      <div className=' d-flex flex-row flex-center' style={{padding: '10px'}}>
          <label>{`Aerial Distance : ${driveTimeDistanceResponse.aerialDistance!=null ? driveTimeDistanceResponse.aerialDistance : "Make a submission"}`}"markerVisible"{markerVisible?"true":"false"}hi</label>
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


export default DriveTimeDistanceMap;
// GeocodeMap