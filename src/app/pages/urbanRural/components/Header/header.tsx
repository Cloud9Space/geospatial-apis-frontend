import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";


export const initData = {
  address: "",
  city: "",
  pincode: "",
}

export interface initTableData  {
  address: string,
  locationType: string,
  dtName: string,
  stName: string,
}
export const tableHeaders = [
  "Location Type",
  "Address",
  "District Name",
  "State Name"

]

function Header() {
  const [tableData, setTableData] = useState([] as initTableData[])
  const [inputData, setInputData] = useState(initData)
  const [isLoading, setIsLoading] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY

  // useEffect(()=>{
  //   setTableData([])
  // })

  const columns: any = tableHeaders.map((item) => (
    <th style={{border:'1px solid black',padding:'10px',textAlign:'center'}}>{item}</th>
  ));


  const rows: any = [tableData.map((item) => {
    return (
      <tr>
        <td style={{border:'1px solid black',padding:'10px'}}>{item.locationType}</td>
        <td style={{border:'1px solid black',padding:'10px'}}>{item.address}</td>
        <td style={{border:'1px solid black',padding:'10px'}}>{item.dtName}</td>
        <td style={{border:'1px solid black',padding:'10px'}}>{item.stName}</td>
      </tr>
    );
  })];

  const validate = () => {
    if (
      inputData.address === "" ||
      inputData.city === "" ||
      inputData.pincode === ""
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
        // const response = await axios.get(api_url + "urbanRuralCheck", {
        //   params: {
        //     address: inputData['address'],
        //     city: inputData['city'],
        //     pincode: inputData['pincode']
        //   },
        //   headers: {
        //     'x-api-key': api_key,
        //     'Accept': "*/*"
        //   }
        // });
        const response = {
          "status": 200,
          "message": "Data Fetched Successfully!!",
          "data": {
            "location_type": "Urban",
            "town_name": "Pune",
            "town_village_code": "802814",
            "dt_name": "Pune",
            "dt_code": "521",
            "st_name": "MAHARASHTRA",
            "st_code": "27"
          }
        }
        const data:initTableData = {
          address: inputData.address,
          locationType: response?.data?.location_type,
          dtName: response?.data?.dt_name,
          stName: response?.data?.st_name,
        }
        const rows = [
          ...tableData,
          data
          ];


        setTableData(rows);

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
            <span className='required'>Address</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter Address'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='address'
            placeholder='Address'
            value={inputData.address}
            onChange={(e) => setInputData({ ...inputData, address: e.target.value })}
          />
          {!isValidInput && (
            <div className='fv-plugins-message-container'>
              <div data-field='address' data-validator='notEmpty' className='fv-help-block'>
                Address is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>City</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter City'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='city'
            placeholder='City'
            value={inputData.city}
            onChange={(e) => setInputData({ ...inputData, city: e.target.value })}
          />
          {!isValidInput && (
            <div className='fv-plugins-message-container'>
              <div data-field='city' data-validator='notEmpty' className='fv-help-block'>
                City is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{ flex: '1', padding: '10px' }}>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Pincode</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter Pincode'
            ></i>
          </label>
          <input
            type='number'
            className='form-control form-control-lg form-control-solid bg-light-dark '
            name='pincode'
            placeholder='Pincode'
            value={inputData.pincode}
            onChange={(e) => setInputData({ ...inputData, pincode: e.target.value })}
          />
          {!isValidInput && (
            <div className='fv-plugins-message-container'>
              <div data-field='pincode' data-validator='notEmpty' className='fv-help-block'>
                Pincode is required
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
      <div className='d-flex flex-row flex-center'>
        <table className='' style={{ width: '100%' ,border:'1px solid black'}}>
          <thead>
            <tr >
              {columns}
            </tr>
          </thead>
          {rows}
        </table>
      </div>

    </div >
  );
}

export default Header;