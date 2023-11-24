
import { useState } from "react";
import Header from "./components/Header/header";
import urbanRuralContext from "./context/urbanRural/urbanRural";
import { ListWrapper } from "./table/UsersList";

export interface initTableData  {
  id:number,
  address: string,
  locationType: string,
  dtName: string,
  stName: string,
}



function UrbanRural() {
  const [tableData, setTableData] = useState([] as initTableData[])
  const [tableDataToShow, setTableDataToShow] = useState([] as initTableData[])
  // const google = window.google
  return (
    <div >
      <div className="absolute isMini" />
      <urbanRuralContext.Provider value={{ tableData, setTableData, tableDataToShow, setTableDataToShow }}>
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
      </urbanRuralContext.Provider>
    </div>
  );
}

export default UrbanRural;
