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
import NegativeAreaMap from "./components/Map/map";
import LinearIndeterminate from "./components/Loader/Loader";
// Billing page components
// import Header from "./components/Header/header";
// import GeocodeMap from "./components/Map/map";
// import LinearIndeterminate from "./components/Loader/Loader";

//import geocodeContext from "./Context/geocode/geocodeContext";
import negativeAreaByAddressContext from "./context/negativeAreaByAddress/negativeAreaByAddressContext";
import { useState } from "react";

export const initnegativeAreaData = {
  longitude: "",
  latitude: ""
}

export const negativeAreaInitResponse = {
  data: {
    isInNegativeArea: "",
    lat: 18.5568147,
    lon: 73.79745869999999,
    geo_accuracy: "",
    input_quality: "",
    city: "",
    mis_match: ""}
}

function NegativeAreaByLatLon() {

  const [negativeAreaInputData, setnegativeAreaInputData] = useState(initnegativeAreaData)
  const [negativeAreaResponse, setNegativeAreaResponse] = useState(negativeAreaInitResponse)
  const [isLoading, setIsLoading] = useState(false);

  // const google = window.google
  return (
    <div>
      <div className="absolute isMini"/>
      <negativeAreaByAddressContext.Provider value={{ negativeAreaInputData, setnegativeAreaInputData, negativeAreaResponse, setNegativeAreaResponse, isLoading, setIsLoading }}>
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
              <div className = "item xs={12} md={12} lg={12}" style={{ border: '10px solid #dee2e6' }}>
                <NegativeAreaMap />
              </div>
            </div>
          </div>
        </div>
      </negativeAreaByAddressContext.Provider>
    </div>
  );
}

export default NegativeAreaByLatLon;
