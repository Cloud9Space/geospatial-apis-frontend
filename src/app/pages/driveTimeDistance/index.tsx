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
import DriveTimeDistanceMap from "./components/Map/map";
import LinearIndeterminate from "./components/Loader/Loader";
// Billing page components
// import Header from "./components/Header/header";
// import GeocodeMap from "./components/Map/map";
// import LinearIndeterminate from "./components/Loader/Loader";

//import geocodeContext from "./Context/geocode/geocodeContext";
import { useState } from "react";
import driveTimeDistanceContext from "./context/driveTimeDistance/driveTimeDistance";
import { ListWrapper } from "./table/UsersList";

export const driveTimeDistanceInitData = {
  sourceLatitude: "",
  sourceLongitude: "",
  destinationLatitude: "",
  destinationLongitude: "",
}

export const driveTimeDistanceInitResponse = {
  sourceLatitude: 18.463435,
  sourceLongitude: 73.866851,
  destinationLatitude: 18.463435,
  destinationLongitude:  73.870000,
  // response: {
  //   arielDistance: null
  // }
}

export const driveTimeDistanceInitMapData = {
  sourceLatitude: 18.463435,
  sourceLongitude: 73.866851,
  destinationLatitude: 18.463435,
  destinationLongitude:  73.870000,

}

export interface initTableData {
  id: number,
  sourceLatitude: any,
  sourceLongitude: any,
  destinationLatitude: any,
  destinationLongitude:  any,
  driveTimeDistance: any,
}

function DriveTimeDistance() {

  const [driveTimeDistanceInputData, setDriveTimeDistanceInputData] = useState(driveTimeDistanceInitData)
  const [driveTimeDistanceResponse, setDriveTimeDistanceResponse] = useState(driveTimeDistanceInitResponse)
  const [isLoading, setIsLoading] = useState(false);
  const [driveTimeDistanceMapData, setDriveTimeDistanceMapData] = useState(driveTimeDistanceInitMapData)
  const [tableData, setTableData] = useState([] as initTableData[])
  const [tableDataToShow, setTableDataToShow] = useState([] as initTableData[])
  // const google = window.google
  return (
    <div >
      <div className="absolute isMini" />
      <driveTimeDistanceContext.Provider value={{ driveTimeDistanceInputData,  setDriveTimeDistanceInputData, driveTimeDistanceMapData, setDriveTimeDistanceMapData, isLoading, setIsLoading, driveTimeDistanceResponse, setDriveTimeDistanceResponse,tableData,setTableData,tableDataToShow,setTableDataToShow }}  >

        <div className=" mt={4}" >
          <div className="mb={1}">
            <div className="container spacing={3}">
              <div className=" item xs={12}">
                <Header />
                {isLoading && <LinearIndeterminate />}
              </div>
            </div>
          </div>
          {/* <div className=" mb={1}">
            <div className=" container spacing={3}">
              <div className="item xs={12} md={12} lg={12}" style={{}}>
                <DriveTimeDistanceMap />
              </div>
            </div>
          </div> */}
          <div style={{margin: "20px"}}>
            <ListWrapper />
          </div>
        </div>
      </driveTimeDistanceContext.Provider>
    </div>
  );
}

export default DriveTimeDistance;
