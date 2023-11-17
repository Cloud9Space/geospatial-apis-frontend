// import React from "react";
                  
// export function GeoCode() {
//     return <h1>Hello!</h1>
// }

// @mui material components
//import Grid from "@mui/material/Grid";

//import MDBox from "components/MDBox";

// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Header from "./components/Header/header";
import GeoLimitMap from "./components/Map/map";
import LinearIndeterminate from "./components/Loader/Loader";
// Billing page components
// import Header from "./components/Header/header";
// import GeocodeMap from "./components/Map/map";
// import LinearIndeterminate from "./components/Loader/Loader";

//import geocodeContext from "./Context/geocode/geocodeContext";
import geolimitContext from "./context/geographicalLimitCheck/geolimitContext";
import { useState } from "react";

export const geolimitInitData = {
  latitude: "18.7391977",
  longitude: "73.6830521",
  city: "PUNE"
}

export const geolimitInitResponse = {
  withInGeolimit: ""
}

export const geolimitInitMapData = {
  latitude: 18.58339,
  longitude: 73.90823,
  radius: 2,
  response: {
    isOgl: null
  }
}


function GeographicalLimitCheck() {

  const [geolimitInputData, setGeolimitInputData] = useState(geolimitInitData)
  const [geolimitResponse, setGeolimitResponse] = useState(geolimitInitResponse)
  const [isLoading, setIsLoading] = useState(false);
  const [geolimitMapData, setGeolimitMapData] = useState(geolimitInitMapData)
  // const google = window.google
  return (
    <div>
      <div className="absolute isMini"/>
      <geolimitContext.Provider value={{geolimitInputData, setGeolimitInputData, geolimitMapData, setGeolimitMapData, isLoading, setIsLoading, geolimitResponse, setGeolimitResponse}} >
      
        <div className=" mt={4}">
          <div className="mb={1}">
            <div className="container spacing={3}">
              <div className=" item xs={12}">
                <Header />
                {isLoading && <LinearIndeterminate />}
              </div>
            </div>
          </div>
          <div className=" mb={1}">
            <div className=" container spacing={3}">
              <div className = "item xs={12} md={12} lg={12}" style={{ border: '10px solid #dee2e6',borderTop:'none' }}>
                <GeoLimitMap />
              </div>
            </div>
          </div>
        </div>
      </geolimitContext.Provider>
    </div>
  );
}

export default GeographicalLimitCheck;
