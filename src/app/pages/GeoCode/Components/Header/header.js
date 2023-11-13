import React, { useState, useContext } from 'react';
// @mui material components
//import Card from "@mui/material/Card";
import axios from "axios";

// Material Dashboard 2 React components
// import MDInput from "components/MDInput";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
// import geocodeContext from 'layouts/geocode/context/geocode/geocodeContext';
// import SimpleDialog from '../Info/SimpleDialog';
import SimpleDialog from '../Info/SimpleDialog';
import geocodeContext from '../../context/geocode/geocodeContext';

function Header() {
  const { geocodeInputData, setGeocodeInputData, geocodeResponse, setGeocodeResponse, setIsLoading } = useContext(geocodeContext)
  const [isEnabled, setIsEnabled] = useState(false)
  const [open, setOpen] = React.useState(false);
  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(api_url + "geocode", {
        params: {
          address: geocodeInputData['address'],
          city: geocodeInputData['city'],
          pincode: geocodeInputData['pincode'],
        },
        headers: {
          'x-api-key': api_key,
          'Accept': "*/*"
        }
      });

      setGeocodeResponse(response)

    } catch (error) {
      console.error(error);
    }
    setIsEnabled(true)
    setIsLoading(false);

  };

  return (
    <div id="geocode">
      <div p={1} display="flex" alignItems="center">
        <div p={2}>
          <div variant="subtitle2">Address</div>
          <input 
            type="text" 
            size="small"
            value={geocodeInputData.address} 
            sx={{width: 300}}
            onChange = {e => setGeocodeInputData({ ...geocodeInputData, address: e.target.value })}
          />
        </div>
        <div p={2}>
          <div variant="subtitle2">City</div>
          <input 
            type="text" 
            size="small" 
            value={geocodeInputData.city}
            onChange = {e => setGeocodeInputData({ ...geocodeInputData, city: e.target.value })}
          />
        </div>
        <div p={2}>
          <div variant="subtitle2">Pincode</div>
          <input 
            type="number" 
            size="small" 
            value={geocodeInputData.pincode} 
            onChange = {e => setGeocodeInputData({ ...geocodeInputData, pincode: e.target.value })}
          />
        </div>
        <div pt={3}>
          <div disabled={!geocodeInputData.address && !geocodeInputData.city && !geocodeInputData.pincode}
            style={{marginRight:'200px'}} variant="gradient" color="info" onClick={handleSubmit}>
            Submit
          </div>
        </div>

        {isEnabled && <div
         pt={3}>
          <div variant="gradient" color="info" onClick={handleClickOpen}>View Response</div>
        </div>} 
        <SimpleDialog
          open={open}
          onClose={handleClose}
          geocodeResponse={geocodeResponse}
      />
      </div>
    </div>
  );
}

export default Header;
