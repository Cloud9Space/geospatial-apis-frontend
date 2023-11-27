
import { useState } from "react";
import Header from "./components/Header/header";
import disasterZoneContext from "./context/disasterZone/disasterZone";
import { ListWrapper } from "./table/UsersList";
import LinearIndeterminate from "./components/Loader/Loader";

export interface initTableData {
  id: number,
  address: string,
  earthquakeHazardZoneCode: string,
  earthquakeHazardZoneValue: string,
  floodRiskZoneCode: string,
  floodRiskZoneValue: string,
  floodMaxSurgeHeight: string,
  windHazardZoneCode: string,
  windHazardZoneValue: string,
  windMaxSpeed: string,
  cycloneRiskZoneCode: string,
  cycloneRiskZoneValue: string,
  cycloneMaxSpeed: string,
  cycloneOccurance: string,
  LandSlideRiskZoneCode: string,
  LandSlideRiskZoneValue: string,
}



function DisasterZone() {
  const [tableData, setTableData] = useState([] as initTableData[])
  const [tableDataToShow, setTableDataToShow] = useState([] as initTableData[])
  const [isLoading, setIsLoading] = useState(false);
  // const google = window.google
  return (
    <div style={{}}>
      <div className="absolute isMini" />
      <disasterZoneContext.Provider value={{ tableData, setTableData, tableDataToShow, setTableDataToShow, isLoading, setIsLoading }}>

        <div className=" mt={4}" >
          <div className=" containr spacing={3}" >
            <div className="item xs={12} md={12} lg={12}" >
              <Header />
              {isLoading && <LinearIndeterminate />}
            </div>
          </div>
          <div>
            <ListWrapper />
          </div>
        </div>
      </disasterZoneContext.Provider>

    </div>
  );
}

export default DisasterZone;
