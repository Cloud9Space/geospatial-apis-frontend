import React, { useState, useContext } from 'react';
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
    console.log("Hiiii");
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // const response = await axios.get(api_url + "geocode", {
      //   params: {
      //     address: geocodeInputData['address'],
      //     city: geocodeInputData['city'],
      //     pincode: geocodeInputData['pincode'],
      //   },
      //   headers: {
      //     'x-api-key': api_key,
      //     'Accept': "*/*"
      //   }
      // });

      const response = {
        'latitude': 19.77,
        'longitude': 74.44,
        'full_address': 'pune, maharashtra'
      }
      setGeocodeResponse(response)

    } catch (error) {
      console.error(error);
    }
    setIsEnabled(true)
    setIsLoading(false);

  };

  return (
    <div className='current' data-kt-stepper-element='content' style={{ width: "1200px" }}>
      <div className='' style={{ display: 'flex', flexDirection: 'row' }} >
        <div className='mb-10' style={{ flex: '1', marginRight: '20px' }}>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span className='required'>Address</span>
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Enter the Full Address'
              ></i>
            </label>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='address'
              placeholder='address'
              value={geocodeInputData.address}
              onChange={(e) => setGeocodeInputData({ ...geocodeInputData, address: e.target.value })}
              />
            {!geocodeInputData.address && (
              <div className='fv-plugins-message-container'>
                <div data-field='address' data-validator='notEmpty' className='fv-help-block'>
                  Address is required
                </div>
              </div>
            )}
        </div>
        <div className='mb-10' style={{ flex: '1', marginRight: '20px' }}>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span className='required'>City</span>
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Enter the City'
              ></i>
            </label>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='city'
              placeholder='city'
              value={geocodeInputData.city}
              onChange={(e) => setGeocodeInputData({ ...geocodeInputData, city: e.target.value })}
              />
            {!geocodeInputData.city && (
              <div className='fv-plugins-message-container'>
                <div data-field='city' data-validator='notEmpty' className='fv-help-block'>
                  City is required
                </div>
              </div>
            )}
        </div>
        <div className='mb-10' style={{ flex: '1', marginRight: '20px' }}>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span className='required'>Pincode</span>
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Enter the Pincode'
              ></i>
            </label>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='pincode'
              placeholder='pincode'
              value={geocodeInputData.pincode}
              onChange={(e) => setGeocodeInputData({ ...geocodeInputData, pincode: e.target.value })}
              />
            {!geocodeInputData.pincode && (
              <div className='fv-plugins-message-container'>
                <div data-field='pincode' data-validator='notEmpty' className='fv-help-block'>
                  Pincode is required
                </div>
              </div>
            )}
        </div>

        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>

          {isEnabled && 
          <button 
          type='button'
          className='btn btn-lg btn-primary'
          data-kt-stepper-action='view response'
          onClick={handleClickOpen}>View Response</button>
        } 
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