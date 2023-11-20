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
import GeocodeMap from "./components/Map/map";
import LinearIndeterminate from "./components/Loader/Loader";
// Billing page components
// import Header from "./components/Header/header";
// import GeocodeMap from "./components/Map/map";
// import LinearIndeterminate from "./components/Loader/Loader";

//import geocodeContext from "./Context/geocode/geocodeContext";
import geocodeContext from "./context/geocode/geocodeContext";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import { useSearchParams } from "react-router-dom";

export const initGeocodeData = {
  address: "",
  city: "",
  pincode: ""
}

function Geocode() {
  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY
  let locaiton = useLocation();
  const state: any = locaiton.state
  let initGeocodeResponse

  const init = () => {
    if (state != null) {
      console.log("hii" , state)
      initGeocodeData.address = state.address;
      initGeocodeData.city = state.city;
      initGeocodeData.pincode = state.pincode;
      // setIsDataLoaded(true);
      initGeocodeResponse = {
        full_address: "",
        latitude: state.latitude,
        longitude: state.longitude,
      }
    }
    else {
      initGeocodeResponse = {
        full_address: "",
        latitude: 18.463435,
        longitude: 73.866851,
      }
    }
  }
  // initGeocodeResponse = {
  //   full_address: "",
  //   latitude: 18.463435,
  //   longitude: 73.866851,
  // }
  init();

  // initGeocodeResponse = {
  //   full_address: "",
  //   latitude: 18.463435,
  //   longitude: 73.866851,
  // }

  // const [searchParams, setSearchParams] = useSearchParams();
  const [geocodeInputData, setGeocodeInputData] = useState(initGeocodeData)
  const [geocodeResponse, setGeocodeResponse] = useState(initGeocodeResponse)
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  console.log("geocodeResponsehiasfoawenl"+geocodeResponse);
  
  // useEffect(()=>{
  //   init();

  //   setGeocodeInputData(initGeocodeResponse)})
  // const google = window.google
  return (
    <div>
      <div className="absolute isMini" />
      <geocodeContext.Provider value={{ geocodeInputData, setGeocodeInputData, geocodeResponse, setGeocodeResponse, isLoading, setIsLoading, isDataLoaded, setIsDataLoaded }}>
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
              <div className="item xs={12} md={12} lg={12}" style={{}}>
                <GeocodeMap />
              </div>
            </div>
          </div>
        </div>
      </geocodeContext.Provider>
    </div>
  );
}

export default Geocode;
