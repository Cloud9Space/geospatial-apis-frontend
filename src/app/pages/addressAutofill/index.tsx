// @mui material components
// import Grid from "@mui/material/Grid";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// // Material Dashboard 2 React examples
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// Billing page components
// import Header from "layouts/addressAutofill/components/Header";
import { useState } from "react";
import addressAutofill from "./context/addressAutofill/addressAutofillContext";
import AddressAutofillMap from "./components/Map/map";
import LinearIndeterminate from "./components/Loader/Loader";
import Header from "./components/Header/header";

export const initAddressAutofillData = {
  address: "",
  city: "",
  pincode: ""
}


export interface initTableData {
  id:number,
  key:any,
  value:any
}

const initAddressAutofillResponse = {
  full_address: "",
  latitude: 18.463435,
  longitude: 73.866851,
}


function AddressAutofill() {
  const [tableData, setTableData] = useState([] as initTableData[])
  const [addressAutofillInputData, setAddressAutofillInputData] = useState(initAddressAutofillData)
  const [geocodeResponse, setGeocodeResponse] = useState(initAddressAutofillResponse)
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY
  const google = window.google
  return (
    <div>
      <div className="absolute isMini" />
      <addressAutofill.Provider value={{ addressAutofillInputData, setAddressAutofillInputData, geocodeResponse, setGeocodeResponse, isLoading, setIsLoading, tableData, setTableData}}>
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
                <AddressAutofillMap />
              </div>
            </div>
          </div>
        </div>
      </addressAutofill.Provider>
    </div>
  );
}

export default AddressAutofill;
