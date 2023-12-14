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
import negativeAreaByAddressContext from '../../context/geographicalLimitCheck/geolimitContext';
import geolimitContext from '../../context/geographicalLimitCheck/geolimitContext';
import { cityLatLongMapping } from '../Data/data';



function Header() {
  const { geolimitInputData, setGeolimitInputData, geolimitMapData, setGeolimitMapData, isLoading, setIsLoading, geolimitResponse, setGeolimitResponse } = useContext(geolimitContext)
  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY
  const [isEnabled, setIsEnabled] = useState(false)
  const [open, setOpen] = React.useState(false);

  const [isValidInput, setIsValidInput] = useState(true);
  const [isValidCity, setIsValidCity] = useState(true);


  useEffect(() => {

    if (geolimitInputData.latitude && geolimitInputData.longitude) {
      // setDisabled(true)
    }

    if (geolimitInputData.city != '' && geolimitInputData.city != undefined) {
      try {
        const filteredData = cityLatLongMapping.filter(item => item.name === geolimitInputData.city);
        // console.log(filteredData)
        setGeolimitMapData({ ...geolimitMapData, latitude: filteredData[0]['latitude'], longitude: filteredData[0]['longitude'] })
        setIsValidCity(true);

      } catch (e) {
        console.log("Invalid City Name");
        setIsValidCity(false);
      }
    }
    else
      setIsValidCity(true);
  }, [geolimitInputData.city]);

  useEffect(()=>{
    try {
      setGeolimitInputData({ ...geolimitInputData, city: "DELHI" })
      // const filteredData = cityLatLongMapping.filter(item => item.name === geolimitInputData.city);
      const filteredData = cityLatLongMapping.filter(item => item.name === "DELHI");
      // console.log(filteredData)
      setGeolimitMapData({ ...geolimitMapData, latitude: filteredData[0]['latitude'], longitude: filteredData[0]['longitude'] })
      setIsValidCity(true);

    } catch (e) {
      console.log("Invalid City Name");
      setIsValidCity(false);
    }
  },[])
  const validate = () => {
    if (
      geolimitInputData.latitude === "" ||
      geolimitInputData.longitude === "" ||
      geolimitInputData.city === ""
    ) {
      return false;
    }
    else {
      return true;
    }
  }
  const handleSubmit = async () => {
    // console.log("Called ogl api")
    setIsLoading(true);
    const valid = validate()
    if (valid) {
      setIsValidInput(true);
      try {
        const response = await axios.get(api_url + "geolimitCheck", {
          params: {
            latitude: geolimitInputData.latitude,
            longitude: geolimitInputData.longitude,
            radius: geolimitMapData.radius,
            city_lat: geolimitMapData.latitude,
            city_lon: geolimitMapData.longitude
          },
          headers: {
            'x-api-key': api_key,
            'Accept': "*/*"
          }
        });
        console.log(response)
        if ('data' in response) {
          setGeolimitResponse(
            {
              ...geolimitResponse,
              withInGeolimit: response['data']['data']['withInGeolimit'],
              latitude: geolimitInputData.latitude,
              longitude: geolimitInputData.longitude,

            })
        }
      } catch (error) {
        console.error(error);
      }
    setIsEnabled(true)
    }
    else
      setIsValidInput(false)
    setIsLoading(false);


  };

  const handleClickOpen = () => {
    console.log("Hiiii");
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <div className='current' style={{}} data-kt-stepper-element='content' /*style={{ width: "1200px" }}*/>
      <div className='' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
        <div className='' style={{ width: '15vw', flex: '', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>City</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter city'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='city'
            placeholder='city'
            value='DELHI'
            disabled
            // onChange={(e) => setGeolimitInputData({ ...geolimitInputData, city: e.target.value })}
          />
          {!isValidInput && geolimitInputData.city === "" && (
            <div className='fv-plugins-message-container'>
              <div data-field='city' data-validator='notEmpty' className='fv-help-block'>
                city is required
              </div>
            </div>
          )}
          {!isValidCity && (
            <div className='fv-plugins-message-container'>
              <div data-field='city' data-validator='notEmpty' className='fv-help-block'>
                Plese Enter Valid City
              </div>
            </div>
          )}
        </div>
        <div className='' style={{ width: '15vw', flex: '', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Latitude</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the Full latitude'
            ></i>
          </label>
          <input
            type='number'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='latitude'
            placeholder='latitude'
            value={geolimitInputData.latitude}
            onChange={(e) => setGeolimitInputData({ ...geolimitInputData, latitude: e.target.value })}
          />
          {!isValidInput && geolimitInputData.latitude === "" && (
            <div className='fv-plugins-message-container'>
              <div data-field='latitude' data-validator='notEmpty' className='fv-help-block'>
                latitude is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{ width: '15vw', flex: '', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Longitude</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the longitude'
            ></i>
          </label>
          <input
            type='number'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='longitude'
            placeholder='longitude'
            value={geolimitInputData.longitude}
            onChange={(e) => setGeolimitInputData({ ...geolimitInputData, longitude: e.target.value })}
          />
          {!isValidInput && geolimitInputData.longitude === "" && (
            <div className='fv-plugins-message-container'>
              <div data-field='longitude' data-validator='notEmpty' className='fv-help-block'>
                longitude is required
              </div>
            </div>
          )}
        </div>
        <div className=" pr={3}  align-items-center fs-5 fw-semibold" style={{ alignSelf: "start", flex: '', padding: "10px" }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>Circle Radius:</label>
          <div className=' pl={3} width={200}'>
            {/* <Slider   
              sx={{backgroundColor: "#dfdfdf"}}
              defaultValue={3} 
              min={1}
              max={100}            
              value={geolimitMapData.radius} 
              onChange={e => setGeolimitMapData({ ...geolimitMapData, radius: parseInt(e.target.value)})}
              aria-label="Default" 
              valueLabelDisplay="auto"
            /> */}
            <input
              type="range"
              min={1}
              max={100}
              value={geolimitMapData.radius}
              onChange={e => setGeolimitMapData({ ...geolimitMapData, radius: parseInt(e.target.value) })}
            />
          </div>
          <span >{geolimitMapData.radius}</span>
        </div>

        <div className='' style={{ alignSelf: 'end', padding: '10px' }}>
          <button
            type="button"
            className="btn btn-lg btn-primary mb2 "
            data-kt-stepper-action="submit"
            onClick={handleSubmit}
            style={{marginRight: "10px"}}
          >
            Submit
          </button>
          
           {isEnabled &&
            <button
              type='button'
              className='btn btn-lg btn-primary mb2'
              data-kt-stepper-action='view response'
              onClick={handleClickOpen}>View Response</button>
          }
        </div>
       

        <div className='' style={{ display: 'flex', flexDirection: 'row', padding: '10px',  alignSelf: 'end',  }}>

          <div className="" style={{ alignSelf: "center", flex: '', padding: "auto", paddingLeft: "40px", }}>
            <label className='d-flex align-items-center fs-5 fw-semibold' style={{}}>{`${geolimitResponse.withInGeolimit != "" ?'Within Geolimit : '+ (geolimitResponse.withInGeolimit == true ? "True" : "False") : ""}`}</label>
          </div>
        </div>
      </div>



      <SimpleDialog
        isOpen={open}
        onRequestClose={handleClose}
        geolimitResponse={geolimitResponse}
      />
    </div>
  );
}

export default Header;