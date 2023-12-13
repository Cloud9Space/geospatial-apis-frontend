import React, { useState, useContext, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';
import { test_data } from '../Data/data';
import negativeAreaContext from '../../context/negativeAreaByAddress/negativeAreaByAddressContext';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const NegativeAreaMap = () => {
  const defaultCenter = { lat: 28.5665423236694, lng: 77.1687006758955 };
  const { negativeAreaInputData, setnegativeAreaInputData, negativeAreaResponse, setNegativeAreaResponse, setIsLoading } = useContext(negativeAreaContext)
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [multiPolygonCoordinates, setMultiPolygonCoordinates] = useState([]);
  const [mapMultiPolygon, setMapMultiPolygon] = useState([]);
  const [markerVisible, setMarkerVisible] = useState(false);
  const [redMarkerVisible, setRedMarkerVisible] = useState(false);

  useEffect(()=>{
    setMarkerPosition({...markerPosition, lat: negativeAreaResponse.data.latitude, lng: negativeAreaResponse.data.longitude})
    if (negativeAreaResponse.data.isInNegativeArea === false){
      setRedMarkerVisible(false)
      setMarkerVisible(true)
    }
    else{
      setRedMarkerVisible(true)
      setMarkerVisible(false)
    }
  }, [negativeAreaResponse])

  useEffect(()=>{
      const parseCoordinates = (ags) => {
        return ags.map((wktString) => {
          const coordinates = wktString
            .replace('MULTIPOLYGON(((', '')
            .replace(')))', '')
            .split('),(')
            .map((ring) =>
              ring.split(',').map((coord) => {
                const [lng, lat] = coord.trim().split(' ');
                return { lat: parseFloat(lat), lng: parseFloat(lng) };
              })
            );
          return coordinates;
        });
      };  
      setMapMultiPolygon(parseCoordinates(multiPolygonCoordinates))
  }, [multiPolygonCoordinates])


  useEffect(() => {
    let polyArray: any = []

    test_data.map((item: any)=>{
      polyArray.push(item[0])
    })
    setRedMarkerVisible(false)
    setMarkerVisible(false)
    setMultiPolygonCoordinates(polyArray);
  }, []);



  return (
    <LoadScript googleMapsApiKey={API_KEY!}>
      <GoogleMap
        mapContainerStyle={{ width: 'auto', height: '510px', margin: '5px'}}
        center={markerPosition}
        zoom={10}
      >
        {mapMultiPolygon.map((polygon, index) => (
          <Polygon
            key={index}
            paths={polygon}
            options={{
              fillColor: '#0373fc',
              fillOpacity: 0.45,
              strokeColor: '#0373fc',
              strokeOpacity: 0.8,
              strokeWeight: 2,
            }}
          />
        ))}
        
        {markerVisible && ( <Marker
          position={markerPosition}

          // draggable={true}
          icon='http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          // icon={greenMarkerIcon}
          // onDragEnd={handleMarkerDragEnd}
        /> )}
        {redMarkerVisible && ( <Marker
          position={markerPosition}
          // draggable={true}
          // icon={customIcon}
          // onDragEnd={handleMarkerDragEnd}
        /> )}

      </GoogleMap>

    </LoadScript>
  );
};


export default NegativeAreaMap;
// GeocodeMap