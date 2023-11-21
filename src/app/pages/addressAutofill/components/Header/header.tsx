// @mui material components
import React, { useState, useEffect, useContext } from 'react';

// import div from "@mui/material/div";

// import MDBox from "components/MDBox";
// import label from "components/label";
// import MDButton from "components/MDButton";


// import { select } from "@mui/material";
// import MenuItem from '@mui/material/MenuItem';
// import div from '@mui/material/div';
import axios from "axios";
import fetchCsvData from '../Data/data';
import { useNavigate } from 'react-router-dom';
import SimpleDialog from '../Info/SimpleDialog';
import addressAutofill from '../../context/addressAutofill/addressAutofill';


export const initData = {
  city: "",
  pincode: "",
  locality: "",
  sublocality: "",
  address: "",
}

function Header() {
  const { addressAutofillInputData, setAddressAutofillInputData, geocodeResponse, setGeocodeResponse, setIsLoading } = useContext(addressAutofill)
  // const [addressAutofillInputData, setAddressAutofillInputData] = useState(initData);
  const [csvData, setCsvData] = useState([] as any);
  const [cityList, setCityList] = useState([]);
  const [pincodeList, setPincodeList] = useState([]);
  const [localityList, setLocalityList] = useState([]);
  const [subLocalityList, setSubLocalityList] = useState([]);
  const [isValidInput, setIsValidInput] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false)

  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY
  let navigate = useNavigate();

  const handleClickOpen = () => {
    console.log("Hiiii");
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  useEffect(() => {

    const data_ogl = async () => {
      const response: any = await fetchCsvData()
      setCsvData(response)
      console.log(response)
      const cityList: any = [...new Set(response.map(item => item.city))];
      setCityList(cityList)
    }
    data_ogl()
    // console.log("cityList"+cityList)
  }, [])


  useEffect(() => {
    console.log("city has been changed")
    console.log(addressAutofillInputData.city)

    const fetchPincodes = () => {

      const pincodeList: any = [...new Set(csvData.filter(item => item.city === addressAutofillInputData.city)
        .map(item => item.pincode))];

      setPincodeList(pincodeList)
      setLocalityList([])
      setSubLocalityList([])
      // console.log("getPincodes api called")

      // try {
      //   const response = axios.get(api_url + "addressAutofill/getPincodes", {
      //     params: {
      //       city: inputData['city']
      //     },
      //     headers: {
      //       'x-api-key': api_key,
      //       'Accept': "*/*"
      //     }
      //   });
      //   console.log(response)
      //   // setIsLoading(false);

      // } catch (error) {
      //   console.error(error);
      // }
    };
    if (addressAutofillInputData.city != '') {
      fetchPincodes();
    }
  }, [addressAutofillInputData.city]);

  // useEffect(() => {
  //   console.log("pincode has been changed")
  //   console.log(inputData.pincode)

  //   const fetchCity = () => {

  //     // console.log("getCity api called")
  //     // try {
  //     //   const response = axios.get(api_url + "addressAutofill/getCity", {
  //     //     params: {
  //     //       city: inputData['pincode']
  //     //     },
  //     //     headers: {
  //     //       'x-api-key': api_key,
  //     //       'Accept': "*/*"
  //     //     }
  //     //   });
  //     //   console.log(response)
  //     //   // setIsLoading(false);

  //     // } catch (error) {
  //     //   console.error(error);
  //     // }
  //   };
  //   if (inputData.pincode != ''){
  //     fetchCity();
  //   }
  // }, [inputData.pincode]);

  useEffect(() => {
    console.log("locality has been changed")
    console.log(addressAutofillInputData.locality)

    const fetchLocality = () => {

      const localityList: any = [...new Set(csvData.filter(item => item.city === addressAutofillInputData.city && item.pincode === addressAutofillInputData.pincode)
        .map(item => item.locality))];

      setLocalityList(localityList)
      setSubLocalityList([])
      // console.log("getLocalities api called")
      // try {
      //   const response = axios.get(api_url + "addressAutofill/getLocalities", {
      //     params: {
      //       city: inputData['city'],
      //       pincode: inputData['pincode']
      //     },
      //     headers: {
      //       'x-api-key': api_key,
      //       'Accept': "*/*"
      //     }
      //   });
      //   console.log(response)
      //   // setIsLoading(false);

      // } catch (error) {
      //   console.error(error);
      // }
    };
    if (addressAutofillInputData.city != '' && addressAutofillInputData.pincode != '') {
      fetchLocality();
    }
  }, [addressAutofillInputData.pincode]);

  // called once 
  useEffect(() => {

    const fetchSubLocality = () => {

      const subLocalityList: any = [...new Set(csvData.filter(item => item.city === addressAutofillInputData.city && item.pincode === addressAutofillInputData.pincode && item.locality === addressAutofillInputData.locality)
        .map(item => item.sublocality))];

      setSubLocalityList(subLocalityList)

      // try {
      //   const response = axios.get(api_url + "addressAutofill/getSubLocalities", {
      //     params: {
      //       city: inputData['city'],
      //       pincode: inputData['pincode'],
      //       locality: inputData['locality']
      //     },
      //     headers: {
      //       'x-api-key': api_key,
      //       'Accept': "*/*"
      //     }
      //   });
      //   console.log(response)
      //   // setIsLoading(false);

      // } catch (error) {
      //   console.error(error);
      // }
    };
    if (addressAutofillInputData.city != '' && addressAutofillInputData.pincode != '' && addressAutofillInputData.locality != '') {
      fetchSubLocality();
    }
  }, [addressAutofillInputData.locality]);

  const validate = () => {
    if (
      addressAutofillInputData.address === "" ||
      addressAutofillInputData.city === "" ||
      addressAutofillInputData.pincode === ""
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
        // let response = await axios.get(api_url + "geocode", {
        //   params: {
        //     address: addressAutofillInputData['address'],
        //     city: addressAutofillInputData['city'],
        //     pincode: addressAutofillInputData['pincode'],
        //   },
        //   headers: {
        //     'x-api-key': api_key,
        //     'Accept': "*/*"
        //   }
        // });
        // response = response.data

        const response = {
          "data": {
            'latitude': 18.463435,
            'longitude': 73.866851,
            'full_address': 'pune, maharashtra'
          }
        }
        if ("data" in response) {
          console.log(response)
          setGeocodeResponse(response)
        }
      } catch (error) {
        console.error(error);
      }
      setIsEnabled(true)
    }
    else {
      setIsValidInput(false);
    }
    setIsLoading(false);
  };

  return (
    <div id="address-autofill">
      <div className='' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>City</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the City'
            ></i>
          </label>
          <select
            id="city"
            className='form-control form-control-lg form-control-solid bg-light-dark '
            // style={{ height: 38 }}
            name='city'
            placeholder='City'
            value={addressAutofillInputData.city}
            onChange={e => setAddressAutofillInputData({ ...addressAutofillInputData, city: e.target.value })}
          >
            <option key="Default" value="Default">Default</option >
            {cityList.map((item, index) => (
              <option key={index} value={item}>{item}</option >
            ))}
          </select>
        </div>
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Pincode</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the Pincode'
            ></i>
          </label>
          <select
            id="pincode"
            className='form-control form-control-lg form-control-solid bg-light-dark '
            // style={{ height: 38 }}
            name='pincode'
            value={addressAutofillInputData.pincode}
            onChange={e => setAddressAutofillInputData({ ...addressAutofillInputData, pincode: e.target.value })}
          >
            <option key="Default" value="Default">Default</option >

            {pincodeList.map((item, index) => (
              <option key={index} value={item}>{item}</option >
            ))}
          </select>
        </div>
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Locality</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the Locality'
            ></i>
          </label>
          <select
            id="locality"
            className='form-control form-control-lg form-control-solid bg-light-dark '
            // style={{ height: 38 }}
            name='locality'
            value={addressAutofillInputData.locality}
            onChange={e => setAddressAutofillInputData({ ...addressAutofillInputData, locality: e.target.value })}
          >
            <option key="Default" value="Default">Default</option >

            {localityList.map((item, index) => (
              <option key={index} value={item}>{item}</option >
            ))}
          </select>
        </div>
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Sub-Locality</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the Sub-Locality'
            ></i>
          </label>
          <select
            id="sublocality"
            className='form-control form-control-lg form-control-solid bg-light-dark '
            // style={{ height: 38 }}
            name='sublocality'
            value={addressAutofillInputData.sublocality}
            onChange={e => setAddressAutofillInputData({ ...addressAutofillInputData, sublocality: e.target.value })}
          >
            <option key="Default" value="Default">Default</option >

            {subLocalityList.map((item, index) => (
              <option key={index} value={item}>{item}</option >
            ))}
          </select>
        </div>
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Address</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the Address'
            ></i>
          </label>
          <input
            type="text"
            value={addressAutofillInputData.address}
            className='form-control form-control-lg form-control-solid bg-light-dark '
            // style={{ height: 38 }}
            name='address'
            placeholder='Address'
            onChange={e => setAddressAutofillInputData({ ...addressAutofillInputData, address: e.target.value })}
          />
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
      {/* <div className=' d-flex flex-column flex-center' style={{ padding: '10px' }}>
        <label className='d-flex align-items-center fs-5 fw-semibold '>
          {geocodeResponse.data.isInNegativeArea ? `Is In Negative Area : ${geocodeResponse.data.isInNegativeArea}` : " "}
        </label>
      </div> */}
      <SimpleDialog
        isOpen={open}
        onRequestClose={handleClose}
        geocodeResponse={geocodeResponse}
      />
    </div>
  );
}

export default Header;
