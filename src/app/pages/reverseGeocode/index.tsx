
import { useState } from "react";
import Header from "./components/Header/header";
import { ListWrapper } from "./table/UsersList";
import reverseGeocodeContext from "./context/reverseGeocode/reverseGeocode";
import LinearIndeterminate from "./components/Loader/Loader";

export interface initTableData {
  id: number,
  address: string,
  latitude: string,
  longitude: string
}


function ReverseGeocode() {
  const [tableData, setTableData] = useState([] as initTableData[])
  const [tableDataToShow, setTableDataToShow] = useState([] as initTableData[])
  const [isLoading, setIsLoading] = useState(false);

  // const google = window.google
  return (
    <div >
      <div className="absolute isMini" />
      <reverseGeocodeContext.Provider value={{tableData,setTableData,tableDataToShow,setTableDataToShow,isLoading,setIsLoading}}>
        <div className=" mt={4}" >
          <div className=" container spacing={3}">
            <div className="item xs={12} md={12} lg={12}" style={{}}>
              <Header />
              {isLoading && <LinearIndeterminate />}
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
