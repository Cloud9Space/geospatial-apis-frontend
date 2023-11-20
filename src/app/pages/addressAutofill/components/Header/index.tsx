// @mui material components
import React, { useState, useEffect } from 'react';

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


export const initData = {
  city: "",
  pincode: "",
  locality: "",
  sublocality: "",
  address: "",
}

function Header() {
  const [inputData, setInputData] = useState(initData);
  const [csvData, setCsvData] = useState([] as any);
  const [cityList, setCityList] = useState([]);
  const [pincodeList, setPincodeList] = useState([]);
  const [localityList, setLocalityList] = useState([]);
  const [subLocalityList, setSubLocalityList] = useState([]);
  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY
  let navigate = useNavigate();

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
    console.log(inputData.city)

    const fetchPincodes = () => {

      const pincodeList: any = [...new Set(csvData.filter(item => item.city === inputData.city)
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
    if (inputData.city != '') {
      fetchPincodes();
    }
  }, [inputData.city]);

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
    console.log(inputData.locality)

    const fetchLocality = () => {

      const localityList: any = [...new Set(csvData.filter(item => item.city === inputData.city && item.pincode === inputData.pincode)
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
    if (inputData.city != '' && inputData.pincode != '') {
      fetchLocality();
    }
  }, [inputData.pincode]);

  // called once 
  useEffect(() => {

    const fetchSubLocality = () => {

      const subLocalityList: any = [...new Set(csvData.filter(item => item.city === inputData.city && item.pincode === inputData.pincode && item.locality === inputData.locality)
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
    if (inputData.city != '' && inputData.pincode != '' && inputData.locality != '') {
      fetchSubLocality();
    }
  }, [inputData.locality]);


  const HandleSubmit = async () => {
    console.log(inputData)


    // let response:any = await axios.get(api_url + "geocode", {
    //   params: {
    //     address: inputData.address,
    //     city: inputData.city,
    //     pincode: inputData.pincode,
    //   },
    //   headers: {
    //     'x-api-key': api_key,
    //     'Accept': "*/*"
    //   }
    // });
    // if ("data" in response)
    //   response = response.data; 
    const response = {
      "data": {
        'latitude': 18.463435,
        'longitude': 73.866851,
        'full_address': 'pune, maharashtra'
      }
    }
    console.log("response", response)
    let latLonData;
    if ("data" in response) {
      console.log("inresponse" + response.data.latitude
      );

      latLonData = {
        full_address: "",
        latitude: response.data.latitude,
        longitude: response.data.longitude,
      }
    }


    navigate("/geocode", { state: { ...inputData, ...latLonData } })
  }

  return (
    <div id="address-autofill">
      <div className="p={1}" style={{}}>
        <div className="p={2}">
          <div style={{ minWidth: 150 }}>
            <label >City</label>
            <select
              id="city"
              style={{ height: 38 }}
              value={inputData.city}
              onChange={e => setInputData({ ...inputData, city: e.target.value })}
            >
              <option key="Default" value="Default">Default</option >
              {cityList.map((item, index) => (
                <option key={index} value={item}>{item}</option >
              ))}
            </select>
          </div>
        </div>
        <div className="p={2}">
          <div style={{ minWidth: 150 }}>
            <label >Pincode</label>
            <select
              id="pincode"
              style={{ height: 38 }}
              value={inputData.pincode}
              onChange={e => setInputData({ ...inputData, pincode: e.target.value })}
            >
              <option key="Default" value="Default">Default</option >

              {pincodeList.map((item, index) => (
                <option key={index} value={item}>{item}</option >
              ))}
            </select>
          </div>
        </div>
        <div className="p={2}">
          <div style={{ minWidth: 150 }}>
            <label >Locality</label>
            <select
              id="locality"
              style={{ height: 38 }}
              value={inputData.locality}
              onChange={e => setInputData({ ...inputData, locality: e.target.value })}
            >
              <option key="Default" value="Default">Default</option >

              {localityList.map((item, index) => (
                <option key={index} value={item}>{item}</option >
              ))}
            </select>
          </div>
        </div>
        <div className="p={2}">
          <div style={{ minWidth: 150 }}>
            <label >Sub Locality</label>
            <select
              id="sublocality"
              style={{ height: 38 }}
              value={inputData.sublocality}
              onChange={e => setInputData({ ...inputData, sublocality: e.target.value })}
            >
              <option key="Default" value="Default">Default</option >

              {subLocalityList.map((item, index) => (
                <option key={index} value={item}>{item}</option >
              ))}
            </select>
          </div>
        </div>
        <div className="p={2}">
          <label >Address</label>
          <input
            type="text"
            // size="small"
            value={inputData.address}
            style={{ width: 300 }}
            onChange={e => setInputData({ ...inputData, address: e.target.value })}
          />
        </div>
        <div className=" pt={3}">
          <button onClick={HandleSubmit} color="info">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
