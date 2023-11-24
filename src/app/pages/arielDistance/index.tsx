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
import AerialDistanceMap from "./components/Map/map";
import LinearIndeterminate from "./components/Loader/Loader";
// Billing page components
// import Header from "./components/Header/header";
// import GeocodeMap from "./components/Map/map";
// import LinearIndeterminate from "./components/Loader/Loader";

//import geocodeContext from "./Context/geocode/geocodeContext";
import { useState } from "react";
import aerialDistanceContext from "./context/aerialDistance/aerialDistance";

export const aerialDistanceInitData = {
  sourceLatitude: "",
  sourceLongitude: "",
  destinationLatitude: "",
  destinationLongitude: "",
}

export const aerialDistanceInitResponse = {
  sourceLatitude: 18.463435,
  sourceLongitude: 73.866851,
  destinationLatitude: 18.463435,
  destinationLongitude:  73.870000,
  response: {
    arielDistance: null
  }
}

export const aerialDistanceInitMapData = {
  sourceLatitude: 18.463435,
  sourceLongitude: 73.866851,
  destinationLatitude: 18.463435,
  destinationLongitude:  73.870000,
  response: {
    arielDistance: null
  }
}


function AerialDistance() {

  const [aerialDistanceInputData, setAerialDistanceInputData] = useState(aerialDistanceInitData)
  const [aerialDistanceResponse, setAerialDistanceResponse] = useState(aerialDistanceInitResponse)
  const [isLoading, setIsLoading] = useState(false);
  const [aerialDistanceMapData, setAerialDistanceMapData] = useState(aerialDistanceInitMapData)
  // const google = window.google
  return (
    <div >
      <div className="absolute isMini" />
      <aerialDistanceContext.Provider value={{ aerialDistanceInputData, setAerialDistanceInputData, aerialDistanceMapData, setAerialDistanceMapData, isLoading, setIsLoading, aerialDistanceResponse, setAerialDistanceResponse }}  >

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
              <div className="item xs={12} md={12} lg={12}" style={{}}>
                <AerialDistanceMap />
              </div>
            </div>
          </div>
        </div>
      </aerialDistanceContext.Provider>
    </div>
  );
}

export default AerialDistance;
