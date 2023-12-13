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
  latitude: "",
  longitude: "",
  city: ""
}

export const geolimitInitResponse = {
  withInGeolimit: ""
}

export const geolimitInitMapData = {
  latitude: 28.5665423236694,
  longitude: 77.1687006758955,
  radius: 2,
  response: {
    isOgl: null
  }
}

export interface initTableData {
  id:number,
  key:any,
  value:any
}


function GeographicalLimitCheck() {

  const [geolimitInputData, setGeolimitInputData] = useState(geolimitInitData)
  const [geolimitResponse, setGeolimitResponse] = useState(geolimitInitResponse)
  const [isLoading, setIsLoading] = useState(false);
  const [geolimitMapData, setGeolimitMapData] = useState(geolimitInitMapData)
  const [tableData, setTableData] = useState([] as initTableData[])
  const [tableDataToShow, setTableDataToShow] = useState([] as initTableData[])
  // const google = window.google
  return (
    <div >
      <div className="absolute isMini" />
      <geolimitContext.Provider value={{geolimitInputData, setGeolimitInputData, geolimitMapData, setGeolimitMapData, isLoading, setIsLoading, geolimitResponse, setGeolimitResponse, tableData, setTableData, tableDataToShow, setTableDataToShow}}  >
      
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
