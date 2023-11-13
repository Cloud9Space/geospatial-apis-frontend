// import React from "react";
                  
// export function GeoCode() {
//     return <h1>Hello!</h1>
// }

// @mui material components
//import Grid from "@mui/material/Grid";

//import MDBox from "components/MDBox";

// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Header from "./Components/Header/header";
import GeocodeMap from "./Components/Map/map";
import LinearIndeterminate from "./Components/Loader/Loader";
// Billing page components
// import Header from "./components/Header/header";
// import GeocodeMap from "./components/Map/map";
// import LinearIndeterminate from "./components/Loader/Loader";

//import geocodeContext from "./Context/geocode/geocodeContext";
import geocodeContext from "./context/geocode/geocodeContext";
import { useState } from "react";

export const initGeocodeData = {
  address: "",
  city: "",
  pincode: ""
}

function Geocode() {

  const [geocodeInputData, setGeocodeInputData] = useState(initGeocodeData)
  const [geocodeResponse, setGeocodeResponse] = useState({ latitude: 18.58339, longitude: 73.90823 })
  const [isLoading, setIsLoading] = useState(false);

  // const google = window.google
  return (
    <div>
      <div absolute isMini />
      <geocodeContext.Provider value={{ geocodeInputData, setGeocodeInputData, geocodeResponse, setGeocodeResponse, isLoading, setIsLoading }}>
        <div mt={4}>
          <div mb={1}>
            <div container spacing={3}>
              <div item xs={12}>
                <Header />
                {isLoading && <LinearIndeterminate />}
              </div>
            </div>
          </div>
          <div mb={1}>
            <div container spacing={3}>
              <div item xs={12} md={12} lg={12}>
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
