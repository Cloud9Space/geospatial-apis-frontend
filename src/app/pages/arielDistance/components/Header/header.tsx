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
import aerialDistanceContext from '../../context/aerialDistance/aerialDistance';



function Header() {
  const { aerialDistanceInputData, setAerialDistanceInputData, aerialDistanceMapData, setAerialDistanceMapData, isLoading, setIsLoading, aerialDistanceResponse, setAerialDistanceResponse } = useContext(aerialDistanceContext)
  const [isValidInput, setIsValidInput] = useState(true)
  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY

  const validate = () => {
    if (
      aerialDistanceInputData.sourceLatitude === "" ||
      aerialDistanceInputData.sourceLongitude === "" ||
      aerialDistanceInputData.destinationLatitude === "" ||
      aerialDistanceInputData.destinationLongitude === ""
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
        let response = await axios.get(api_url + "aerialDistance", {
          params: {
            source_latitude: aerialDistanceInputData.sourceLatitude,
            source_longitude: aerialDistanceInputData.sourceLongitude,
            destination_latitude: aerialDistanceInputData.destinationLatitude,
            destination_longitude: aerialDistanceInputData.destinationLongitude
          },
          headers: {
            'x-api-key': api_key,
            'Accept': "*/*"
          }
        });
        response = response.data

        // console.log("response",response)
        // const response = {
        //   "message": "Data Fetched Successfully!!",
        //   "data": {
        //     "aerial_distance": "1162 m"
        //   }
        // }
        // console.log("response"+Object.entries(response.data.data))
        if ('data' in response) {
          // console.log("arielDistanceInputData"+arielDistanceInputData.destinationLatitude )
          setAerialDistanceResponse(
            {
              ...aerialDistanceResponse,
              aerialDistance: response['data']['aerial_distance'],
              // sourceLatitude: 18.463435,
              // sourceLongitude: 73.866851,
              // destinationLatitude: 19.463435,
              // destinationLongitude: 73.866851
              sourceLatitude: aerialDistanceInputData.sourceLatitude,
              sourceLongitude: aerialDistanceInputData.sourceLongitude,
              destinationLatitude: aerialDistanceInputData.destinationLatitude,
              destinationLongitude: aerialDistanceInputData.destinationLongitude
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
        <div className='' style={{width: '15vw', flex: '', padding: '10px' }}>
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
            value={aerialDistanceInputData.sourceLatitude}
            onChange={(e) => setAerialDistanceInputData({ ...aerialDistanceInputData, sourceLatitude: e.target.value })}
          />
          {!isValidInput && aerialDistanceInputData.sourceLatitude === "" && (
            <div className='fv-plugins-message-container'>
              <div data-field='sourceLatitude' data-validator='notEmpty' className='fv-help-block'>
                Source latitude is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{width: '15vw', flex: '', padding: '10px' }}>
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
            value={aerialDistanceInputData.sourceLongitude}
            onChange={(e) => setAerialDistanceInputData({ ...aerialDistanceInputData, sourceLongitude: e.target.value })}
          />
          {!isValidInput && aerialDistanceInputData.sourceLongitude === "" && (
            <div className='fv-plugins-message-container'>
              <div data-field='sourceLongitude' data-validator='notEmpty' className='fv-help-block'>
                Source longitude is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{width: '15vw', flex: '', padding: '10px' }}>
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
            value={aerialDistanceInputData.destinationLatitude}
            onChange={(e) => setAerialDistanceInputData({ ...aerialDistanceInputData, destinationLatitude: e.target.value })}
          />
          {!isValidInput && (
            <div className='fv-plugins-message-container'>
              <div data-field='destinationLatitude' data-validator='notEmpty' className='fv-help-block'>
                Destination latitude is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{width: '15vw', flex: '', padding: '10px' }}>
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
            value={aerialDistanceInputData.destinationLongitude}
            onChange={(e) => setAerialDistanceInputData({ ...aerialDistanceInputData, destinationLongitude: e.target.value })}
          />
          {!isValidInput && aerialDistanceInputData.destinationLongitude === "" && (
            <div className='fv-plugins-message-container'>
              <div data-field='destinationLongitude' data-validator='notEmpty' className='fv-help-block'>
                Destination longitude is required
              </div>
            </div>
          )}
        </div>
        {/* </div> */}
        <div className='' style={{ alignSelf: 'end', padding: '10px' }}>
          <button
            type="button"
            className="btn btn-lg btn-primary mb2 "
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