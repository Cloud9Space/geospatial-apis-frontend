import React, { useState, useContext } from 'react';
// @mui material components
//import Card from "@mui/material/Card";
import axios from "axios";
import { KTIcon, toAbsoluteUrl } from '../../../../../_metronic/helpers';
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../../../_metronic/partials'
import {useLocation} from 'react-router'

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
  const location = useLocation()

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

      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-column'>
                  <div className='d-flex align-items-center mb-2'>
                    <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                      Max Smith
                    </a>
                    <a
                      href='#'
                      className='btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_upgrade_plan'
                    >
                      Admin
                    </a>
                  </div>

                  <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>

                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                    >
                      <KTIcon iconName='geolocation' className='fs-4 me-1' />
                      SF, Bay Area
                    </a>
                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                    >
                      <KTIcon iconName='sms' className='fs-4 me-1' />
                      max@kt.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div p={1} display="flex" alignItems="center">
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
      </div> */}
    </div>
  );
}

export default Header;
