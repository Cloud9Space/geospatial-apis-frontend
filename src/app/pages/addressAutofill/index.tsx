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
import Header from "./components/Header";


function AddressAutofill() {
  const google = window.google
  return (
    <div >
      <div className="absolute isMini" />
      <div className=" mt={4}" >
        <div className="mb={1}">
          <div className="container spacing={3}">
            <div className=" item xs={12}">
              <Header />
              {/* {isLoading && <LinearIndeterminate />} */}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default AddressAutofill;
