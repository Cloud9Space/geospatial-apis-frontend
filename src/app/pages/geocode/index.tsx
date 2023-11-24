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
import { useState } from "react";
import { ListWrapper } from "./components/ModelView/UsersList";

export const initGeocodeData = {
  address: "",
  city: "",
  pincode: ""
}
export const initGeocodeResponse = {
  full_address : "",
  latitude: 18.463435,
  longitude: 73.866851,
}

export interface initTableData {
  id:number,
  key:any,
  value:any
}

function Geocode() {

  const [geocodeInputData, setGeocodeInputData] = useState(initGeocodeData)
  const [geocodeResponse, setGeocodeResponse] = useState(initGeocodeResponse)
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([] as initTableData[])
  const [tableDataToShow, setTableDataToShow] = useState([] as initTableData[])

  // const google = window.google
  return (
    <div>
      <div className="absolute isMini"/>
      <geocodeContext.Provider value={{ geocodeInputData, setGeocodeInputData, geocodeResponse, setGeocodeResponse, isLoading, setIsLoading, tableData, setTableData, tableDataToShow, setTableDataToShow }}>
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
              <div className = "item xs={12} md={12} lg={12}" style={{}}>
                <GeocodeMap />
              </div>
            </div>
          </div>
          <div style={{margin: "20px"}}>
            <ListWrapper />
          </div>
        </div>
      </geocodeContext.Provider>
    </div>
  );
}

export default Geocode;