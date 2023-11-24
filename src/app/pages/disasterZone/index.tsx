
import { useState } from "react";
import Header from "./components/Header/header";
import disasterZoneContext from "./context/disasterZone/disasterZone";
import { ListWrapper } from "./table/UsersList";

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
  // const google = window.google
  return (
    <div >
      <div className="absolute isMini" />
      <disasterZoneContext.Provider value={{ tableData, setTableData, tableDataToShow, setTableDataToShow }}>

        <div className=" mt={4}" >
          <div className=" container spacing={3}">
            <div className="item xs={12} md={12} lg={12}" style={{}}>
              <Header />
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
