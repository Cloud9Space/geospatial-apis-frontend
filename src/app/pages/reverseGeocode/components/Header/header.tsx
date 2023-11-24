import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import reverseGeocodeContext from '../../context/reverseGeocode/reverseGeocode';
import { initTableData } from '../..';
// import {v4 as uuidv4} from 'uuid';

export const initData = {
  latitude: "",
  longitude: ""
}

// export interface initTableData {
//   id: string,
//   address: string,
//   latitude: string,
//   longitude: string
// }
export const tableHeaders = [
  "Latitude",
  "Longitude",
  "Address"
]

function Header() {
  // const [tableData, setTableData] = useState([] as initTableData[])
  const {tableData,setTableData}  = useContext(reverseGeocodeContext)
  const {tableDataToShow,setTableDataToShow}  = useContext(reverseGeocodeContext)
  const [inputData, setInputData] = useState(initData)
  const [isLoading, setIsLoading] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY

  // useEffect(()=>{
  //   setTableData([])
  // })

  // const columns: any = tableHeaders.map((item) => (
  //   <th style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{item}</th>
  // ));


  // const rows: any = [tableData.map((item) => {
  //   return (
  //     <tr>
  //       <td style={{ border: '1px solid black', padding: '10px' }}>{item.latitude}</td>
  //       <td style={{ border: '1px solid black', padding: '10px' }}>{item.longitude}</td>
  //       <td style={{ border: '1px solid black', padding: '10px' }}>{item.address}</td>
  //     </tr>
  //   );
  // })];

  const validate = () => {
    if (
      inputData.latitude === "" ||
      inputData.longitude === ""
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
        // let response = await axios.get(api_url + "reverseGeocode", {
        //   params: {
        //     latitude: inputData['latitude'],
        //     longitude: inputData['longitude']
        //   },
        //   headers: {
        //     'x-api-key': api_key,
        //     'Accept': "*/*"
        //   }
        // });
        // response = response.data;
        const response = {
          "message": "Data Fetched Successfully!!",
          "data": {
            "latitude": 18.4634268,
            "longitude": 73.86686279999999,
            "address": "B 21, Bansilal Path, Upper Indira Nagar, Bibwewadi, Pune, Maharashtra 411037, India"
          }
        }
        console.log(response)
        const data: initTableData = {
          // id : uuidv4(),
          id : new Date().getTime(),
          latitude: inputData.latitude,
          longitude: inputData.latitude,
          address: response?.data?.address
        }
        const rows = [
          ...tableData,
          data
        ];


        setTableData(rows);
        setTableDataToShow(rows);

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
        <div className='' style={{width: '15vw', flex: '', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Latitude</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter latitude'
            ></i>
          </label>
          <input
            type='number'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='latitude'
            placeholder='latitude'
            value={inputData.latitude}
            onChange={(e) => setInputData({ ...inputData, latitude: e.target.value })}
          />
          {!isValidInput && (
            <div className='fv-plugins-message-container'>
              <div data-field='latitude' data-validator='notEmpty' className='fv-help-block'>
                Latitude is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{width: '15vw', flex: '', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Longitude</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter Longitude'
            ></i>
          </label>
          <input
            type='number'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='longitude'
            placeholder='longitude'
            value={inputData.longitude}
            onChange={(e) => setInputData({ ...inputData, longitude: e.target.value })}
          />
          {!isValidInput && (
            <div className='fv-plugins-message-container'>
              <div data-field='longitude' data-validator='notEmpty' className='fv-help-block'>
                Longitude is required
              </div>
            </div>
          )}
        </div>
        {/* </div> */}
        <div className='' style={{alignSelf: 'end', padding: '10px' }}>
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
      {/* <div className='d-flex flex-row flex-center'>
        <table className='' style={{ width: '100%', border: '1px solid black' }}>
          <thead>
            <tr >
              {columns}
            </tr>
          </thead>
          {rows}
        </table>
      </div> */}

    </div >
  );
}

export default Header;