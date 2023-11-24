
import { useState } from "react";
import Header from "./components/Header/header";
import { ListWrapper } from "./table/UsersList";
import reverseGeocodeContext from "./context/reverseGeocode/reverseGeocode";

export interface initTableData {
  id: number,
  address: string,
  latitude: string,
  longitude: string
}


function ReverseGeocode() {
  const [tableData, setTableData] = useState([] as initTableData[])
  const [tableDataToShow, setTableDataToShow] = useState([] as initTableData[])

  // const google = window.google
  return (
    <div >
      <div className="absolute isMini" />
      <reverseGeocodeContext.Provider value={{tableData,setTableData,tableDataToShow,setTableDataToShow}}>
        <div className=" mt={4}" >
          <div className=" container spacing={3}">
            <div className="item xs={12} md={12} lg={12}" style={{}}>
              <Header />
            </div>
          </div>
          <div style={{margin: "20px"}}>
            <ListWrapper />
          </div>
        </div>
        </reverseGeocodeContext.Provider>
    </div >
  );
}

export default ReverseGeocode;
