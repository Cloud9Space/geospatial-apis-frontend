import React, { useState, useContext, useEffect } from 'react';
// import geocodeContext from 'layouts/geocode/context/geocode/geocodeContext';
import { Circle, GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';
// import { test_data } from '../Data/data';
// import axios from 'axios';
import geolimitContext from '../../context/geographicalLimitCheck/geolimitContext';
// import MDBox from "components/MDBox";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
// const api_url = process.env.REACT_APP_API_URL_DEV
// const api_key = process.env.REACT_APP_API_KEY

const GeoLimitMap = () => {
  // const defaultCenter = { lat: 18.531905, lng: 73.847874 };
  const { geolimitMapData, setGeolimitMapData, geolimitResponse, setGeolimitResponse } = useContext(geolimitContext)
  const defaultCenter = { lat: geolimitMapData.latitude, lng: geolimitMapData.longitude };

  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [centerPosition, setCenterPosition] = useState(defaultCenter);
  const [markerVisible, setMarkerVisible] = useState(false);
  const [redMarkerVisible, setRedMarkerVisible] = useState(false);


  useEffect(() => {
    console.log("geolimitResponse"+geolimitResponse);
    setMarkerPosition({
      lat: parseFloat(geolimitResponse.latitude),
      lng: parseFloat(geolimitResponse.longitude),
    });
    // setCenterPosition({
    //   lat: parseFloat(geolimitResponse.latitude),
    //   lng: parseFloat(geolimitResponse.longitude),
    // });

    if(geolimitResponse.withInGeolimit === true){
      setMarkerVisible(true)
      setRedMarkerVisible(false)
    }
    else{
      setRedMarkerVisible(true)
      setMarkerVisible(false)
    }
  },[geolimitResponse])

  useEffect(() => {
    setMarkerVisible(false)
    setRedMarkerVisible(false)
    console.log("geolimitMapData in default")
    console.log(geolimitMapData)

    setCenterPosition({
      lat: geolimitMapData.latitude,
      lng: geolimitMapData.longitude,
    });
    // setMarkerPosition({
    //   lat: geolimitMapData.latitude,
    //   lng: geolimitMapData.longitude,
    // });

  },[])

  useEffect(() => {
    // if (geolimitResponse.withInGeolimit){
    //   setFillColor("#42f54b")
    //   console.log(fillColor)
    // }
    // console.log(geolimitMapData)
    // setMarkerPosition({
    //   lat: geolimitMapData.latitude,
    //   lng: geolimitMapData.longitude,
    // });
    // console.log(geolimitMapData)
    setCenterPosition({
      lat: geolimitMapData.latitude,
      lng: geolimitMapData.longitude,
    });
    console.log(geolimitMapData)
  }, [geolimitMapData])

  return (
    <LoadScript googleMapsApiKey={API_KEY!}>
      <div className=' d-flex flex-row flex-center' style={{}}>
        <div className=" pr={3}" style={{flex:'1',padding: "10px"}}>
          <label>Circle Radius:</label>
          <div className=' pl={3} width={200}'>
            {/* <Slider 
              sx={{backgroundColor: "#dfdfdf"}}
              defaultValue={3} 
              min={1}
              max={100}            
              value={geolimitMapData.radius} 
              onChange={e => setGeolimitMapData({ ...geolimitMapData, radius: parseInt(e.target.value)})}
              aria-label="Default" 
              valueLabelDisplay="auto"
            /> */}
            <input
              type="range"
              min={1}
              max={100}
              value={geolimitMapData.radius}
              onChange={e => setGeolimitMapData({ ...geolimitMapData, radius: parseInt(e.target.value)})}
            />
          </div>
          <span >{geolimitMapData.radius}</span>      
        </div>
        <div   className="" style={{flex:'1',padding: "auto",paddingLeft: "10px", }}>
        <label>{`Within Geolimit : ${geolimitResponse.withInGeolimit != null?geolimitResponse.withInGeolimit:"Make a submission"}`}</label>
        </div>
      </div>
      <GoogleMap
        mapContainerStyle={{ width: 'auto', height: '510px', margin: '5px'}}
        center={centerPosition}
        zoom={13}
      >
       {redMarkerVisible && ( <Marker
          position={markerPosition}
          // draggable={true}
          // onDragEnd={handleMarkerDragEnd}
        /> )}
        {markerVisible && ( <Marker
          position={markerPosition}
          icon='http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          // draggable={true}
          // onDragEnd={handleMarkerDragEnd}
        /> )}


        <Circle
          center={centerPosition}
          radius={geolimitMapData.radius*1000}
          options={{
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
          }}
        />
      </GoogleMap>

    </LoadScript>
  );
};


export default GeoLimitMap;
// GeocodeMap