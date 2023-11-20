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
import ArielDistanceMap from "./components/Map/map";
import LinearIndeterminate from "./components/Loader/Loader";
// Billing page components
// import Header from "./components/Header/header";
// import GeocodeMap from "./components/Map/map";
// import LinearIndeterminate from "./components/Loader/Loader";

//import geocodeContext from "./Context/geocode/geocodeContext";
import { useState } from "react";
import arielDistanceContext from "./context/arielDistance/arielDistance";

export const aerialDistanceInitData = {
  sourceLatitude: "",
  sourceLongitude: "",
  destinationLatitude: "",
  destinationLongitude: "",
}

export const arielDistanceInitResponse = {
  withInGeolimit: ""
}

export const arielDistanceInitMapData = {
  sourceLatitude: 18.463435,
  sourceLongitude: 73.866851,
  destinationLatitude: 18.463435,
  destinationLongitude:  73.870000,
  response: {
    arielDistance: null
  }
}


function ArielDistance() {

  const [arielDistanceInputData, setArielDistanceInputData] = useState(aerialDistanceInitData)
  const [arielDistanceResponse, setArielDistanceResponse] = useState(arielDistanceInitResponse)
  const [isLoading, setIsLoading] = useState(false);
  const [arielDistanceMapData, setArielDistanceMapData] = useState(arielDistanceInitMapData)
  // const google = window.google
  return (
    <div >
      <div className="absolute isMini" />
      <arielDistanceContext.Provider value={{arielDistanceInputData, setArielDistanceInputData, arielDistanceMapData, setArielDistanceMapData, isLoading, setIsLoading, arielDistanceResponse, setArielDistanceResponse}}  >
      
        <div className=" mt={4}" >
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
              <div className = "item xs={12} md={12} lg={12}" style={{}}>
                <ArielDistanceMap />
              </div>
            </div>
          </div>
        </div>
      </arielDistanceContext.Provider>
    </div>
  );
}

export default ArielDistance;
