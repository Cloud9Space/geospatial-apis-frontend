import React, { useState, useContext } from 'react';
import axios from "axios";
import { KTIcon, toAbsoluteUrl } from '../../../../../_metronic/helpers';
import { Link } from 'react-router-dom'
import { Dropdown1 } from '../../../../../_metronic/partials'
import { useLocation } from 'react-router'
import SimpleDialog from '../Info/SimpleDialog';
// Material Dashboard 2 React components
// import MDInput from "components/MDInput";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
// import geocodeContext from 'layouts/geocode/context/geocode/geocodeContext';
// import SimpleDialog from '../Info/SimpleDialog';
// import SimpleDialog from '../Info/SimpleDialog';
import negativeAreaByAddressContext from '../../context/negativeAreaByAddress/negativeAreaByAddressContext';

function Header() {
  const { negativeAreaInputData, setnegativeAreaInputData, negativeAreaResponse, setNegativeAreaResponse, setIsLoading } = useContext(negativeAreaByAddressContext)
  const [isEnabled, setIsEnabled] = useState(false)
  const [open, setOpen] = React.useState(false);
  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY
  const [isValidInput, setIsValidInput] = useState(true)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const validate = () => {
    if (
      negativeAreaInputData.latitude === "" ||
      negativeAreaInputData.longitude === ""
    ) {
      console.log("hiii")
      return false;
    }
    else {
      return true;
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true);
    if (validate()) {
      setIsValidInput(true);
    try {
      // const response = await axios.get(api_url + "negativeAreaByLatLon", {
      //   params: {
      //     latitude: negativeAreaInputData['latitude'],
      //     longitude: negativeAreaInputData['longitude'],
      //   },
      //   headers: {
      //     'x-api-key': api_key,
      //     'Accept': "*/*"
      //   }
      // });
      const response = {
        'data': {
          'lat': 18.531905,
          'lon': 73.847874,
          'isInNegativeArea': false
        }
      }
      console.log(response)
      setNegativeAreaResponse(response)

    } catch (error) {
      console.error(error);
    }
    
    setIsEnabled(true);
  }
  else
  {
    setIsValidInput(false);
  }
    setIsLoading(false);
  };

  return (
    <div className='current' style={{ }} data-kt-stepper-element='content' /*style={{ width: "1200px" }}*/>
        <div className='' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
          <div className='' style={{ flex: '1', padding: '10px' }}>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span className='required'>Latitude</span>
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Enter the Full latitude'
              ></i>
            </label>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid bg-light-dark '
              name='latitude'
              placeholder='latitude'
              value={negativeAreaInputData.latitude}
              onChange={(e) => setnegativeAreaInputData({ ...negativeAreaInputData, latitude: e.target.value })}
            />
            {!isValidInput && (
              <div className='fv-plugins-message-container'>
                <div data-field='latitude' data-validator='notEmpty' className='fv-help-block'>
                latitude is required
                </div>
              </div>
            )}
          </div>
          <div className='' style={{ flex: '1', padding: '10px' }}>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span className='required'>Longitude</span>
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Enter the longitude'
              ></i>
            </label>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid bg-light-dark' 
              name='longitude'
              placeholder='longitude'
              value={negativeAreaInputData.longitude}
              onChange={(e) => setnegativeAreaInputData({ ...negativeAreaInputData, longitude: e.target.value })}
            />
            {!isValidInput && (
              <div className='fv-plugins-message-container'>
                <div data-field='longitude' data-validator='notEmpty' className='fv-help-block'>
                longitude is required
                </div>
              </div>
            )}
          </div>
          
          <div className=' d-flex flex-column flex-center' style={{ padding: '10px' }}>
            <button
              type="button"
              className="btn btn-lg btn-primary mb-2 "
              data-kt-stepper-action="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>

            {isEnabled &&
              <button
                type='button'
                className='btn btn-lg btn-primary mb-2'
                data-kt-stepper-action='view response'
                onClick={handleClickOpen}>View Response</button>
            }


          </div>
        </div>
        <div className=' d-flex flex-column flex-center' style={{ padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold '>
            {negativeAreaResponse.data.isInNegativeArea ? `Is In Negative Area : ${negativeAreaResponse.data.isInNegativeArea}` : " "}
          </label>
        </div>
        <SimpleDialog
          isOpen={open}
          onRequestClose={handleClose}
          negativeAreaResponse={negativeAreaResponse}
        />
    </div>
  );
}

export default Header;