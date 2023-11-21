import React, { useState, useContext, useEffect } from 'react';
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
import { cityLatLongMapping } from '../Data/data';
import arielDistanceContext from '../../context/arielDistance/arielDistance';



function Header() {
  const { arielDistanceInputData, setArielDistanceInputData, arielDistanceMapData, setArielDistanceMapData, isLoading, setIsLoading, arielDistanceResponse, setArielDistanceResponse } = useContext(arielDistanceContext)
  const [isValidInput, setIsValidInput] = useState(true)
  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY

  const validate = () => {
    if (
      arielDistanceInputData.sourceLatitude === "" ||
      arielDistanceInputData.sourceLongitude === "" ||
      arielDistanceInputData.destinationLatitude === "" ||
      arielDistanceInputData.destinationLongitude === ""
    ) {
      console.log("hiii")
      return false;
    }
    else {
      return true;
    }
  }

  const handleSubmit = async () => {
    // console.log("Called ogl api")
    setIsLoading(true);
    // console.log(arielDistanceInputData)
    if (validate()) {
      setIsValidInput(true);
      console.log("hii")
      try {
        // const response = await axios.get(api_url + "geocode", {
        //   params: {
        //     sourceLatitude: arielDistanceInputData.sourceLatitude,
        //     sourceLongitude: arielDistanceInputData.sourceLongitude,
        //     destinationLatitude: arielDistanceInputData.destinationLongitude,
        //     destinationLongitude: arielDistanceInputData.destinationlongitude
        //   },
        //   headers: {
        //     'x-api-key': api_key,
        //     'Accept': "*/*"
        //   }
        // });
        // console.log("response",response)
        const response = {
          "message": "Data Fetched Successfully!!",
          "data": {
            "aerial_distance": "1162 m"
          }
        }
        // console.log(response['data']['data']['withInGeolimit'])
        if ('data' in response) {
          // console.log("arielDistanceInputData"+arielDistanceInputData.destinationLatitude )
          setArielDistanceResponse(
            {
              ...arielDistanceResponse,
              aerialDistance: response['data']['aerial_distance'],
              sourceLatitude: 18.463435,
              sourceLongitude: 73.866851,
              destinationLatitude: 19.463435,
              destinationLongitude: 73.866851
              // sourceLatitude: arielDistanceInputData.sourceLatitude,
              // sourceLongitude: arielDistanceInputData.sourceLongitude,
              // destinationLatitude: arielDistanceInputData.destinationLongitude,
              // destinationLongitude: arielDistanceInputData.destinationlongitude

            })
        }
      } catch (error) {
        console.error(error);
      }

    }
    else
      setIsValidInput(false);
    setIsLoading(false);

  };


  return (
    <div className='current' style={{}} data-kt-stepper-element='content' /*style={{ width: "1200px" }}*/>
      <div className='d-flex flex-row' style={{ flexWrap: 'wrap' }} >
        {/* <div> */}
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Source latitude</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter Source latitude'
            ></i>
          </label>
          <input
            type='number'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='sourceLatitude'
            placeholder='Source latitude'
            value={arielDistanceInputData.sourceLatitude}
            onChange={(e) => setArielDistanceInputData({ ...arielDistanceInputData, sourceLatitude: e.target.value })}
          />
          {!isValidInput && (
            <div className='fv-plugins-message-container'>
              <div data-field='sourceLatitude' data-validator='notEmpty' className='fv-help-block'>
                Source latitude is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Source longitude</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the Source longitude'
            ></i>
          </label>
          <input
            type='number'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='sourceLongitude'
            placeholder='Source longitude'
            value={arielDistanceInputData.sourceLongitude}
            onChange={(e) => setArielDistanceInputData({ ...arielDistanceInputData, sourceLongitude: e.target.value })}
          />
          {!isValidInput && (
            <div className='fv-plugins-message-container'>
              <div data-field='sourceLongitude' data-validator='notEmpty' className='fv-help-block'>
                Source longitude is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Destination latitude</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter Destination latitude'
            ></i>
          </label>
          <input
            type='number'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='destinationLatitude'
            placeholder='Destination latitude'
            value={arielDistanceInputData.destinationLatitude}
            onChange={(e) => setArielDistanceInputData({ ...arielDistanceInputData, destinationLatitude: e.target.value })}
          />
          {!isValidInput && (
            <div className='fv-plugins-message-container'>
              <div data-field='destinationLatitude' data-validator='notEmpty' className='fv-help-block'>
                Destination latitude is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Destination longitude</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the Destination longitude'
            ></i>
          </label>
          <input
            type='number'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='destinationLongitude'
            placeholder='Source longitude'
            value={arielDistanceInputData.destinationLongitude}
            onChange={(e) => setArielDistanceInputData({ ...arielDistanceInputData, destinationLongitude: e.target.value })}
          />
          {!isValidInput && (
            <div className='fv-plugins-message-container'>
              <div data-field='destinationLongitude' data-validator='notEmpty' className='fv-help-block'>
                Destination longitude is required
              </div>
            </div>
          )}
        </div>
        {/* </div> */}
        <div className=' d-flex flex-column flex-center' style={{ padding: '10px' }}>
          <button
            type="button"
            className="btn btn-lg btn-primary mb-2 "
            data-kt-stepper-action="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

    </div >
  );
}

export default Header;