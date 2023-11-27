import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import { initTableData } from '../..';
import disasterZoneContext from '../../context/disasterZone/disasterZone';


export const initData = {
  address: "",
  city: "",
  pincode: "",
}

// export interface initTableData {
//   address: string,
//   data: any
// }
export const tableHeaders = [
  "Address",
  "Data"
]

// export const ExpandToggles = {
//   data: false,
//   earthquake: false,
//   flood: false,
//   wind: false,
//   cyclone: false,
//   landslide: false,
// }

function Header() {
  // const [tableData, setTableData] = useState([] as initTableData[])
  const [inputData, setInputData] = useState(initData)
  // const [isLoading, setIsLoading] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);
  const { tableData, setTableData } = useContext(disasterZoneContext)
  const { tableDataToShow, setTableDataToShow ,setIsLoading} = useContext(disasterZoneContext)
  // const [expand, setExpand] = useState(ExpandToggles);

  const api_url = process.env.REACT_APP_API_URL_DEV
  const api_key = process.env.REACT_APP_API_KEY

  // useEffect(()=>{
  //   console.log("ExpandToggles"+ExpandToggles.earthquake)
  // },[ExpandToggles])

  // const columns: any = tableHeaders.map((item) => (
  //   <th style={{ border: '1px solid black', padding: '10px', textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>{item}</th>
  // ));


  // const rows: any = [tableData.map((item) => {
  //   return (
  //     <tr>
  //       <td style={{ border: '1px solid black', padding: '5px', fontSize: '20px', fontWeight: 'bold' }}>{item.address}</td>
  //       <td style={{ border: '1px solid black', padding: '5px' }}>{item.data}</td>
  //     </tr>
  //   );
  // })];

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
        let response:any = await axios.get(api_url + "disasterZone", {
          params: {
            address: inputData['address'],
            city: inputData['city'],
            pincode: inputData['pincode']
          },
          headers: {
            'x-api-key': api_key,
            'Accept': "*/*"
          }
        });
        response = response.data;
        // const response = {
        //   "status": 200,
        //   "message": "Data Fetched Successfully!!",
        //   "data": {
        //     "earthquake": {
        //       "hazard_zone_code": "Zone III",
        //       "hazard_zone_value": "Moderate Damage Risk Zone"
        //     },
        //     "flood": {
        //       "risk_zone_code": "Zone II",
        //       "risk_zone_value": "Not liable to floods",
        //       "max_surge_height": ""
        //     },
        //     "wind": {
        //       "hazard_zone_code": "Zone II",
        //       "hazard_zone_value": "Moderate Damage Risk Zone-B",
        //       "max_speed": "39 m/s"
        //     },
        //     "cyclone": {
        //       "risk_zone_code": "Zone 0",
        //       "risk_zone_value": "No Risk Zone",
        //       "max_speed": "",
        //       "occurance": "None"
        //     },
        //     "landslide": {
        //       "risk_zone_code": "Zone III",
        //       "risk_zone_value": "Moderate Risk Zone"
        //     }
        //   }
        // }

        
        console.log("response",Object.keys(response.data).length);
        {
          // const dataOutput: any = Object.entries(response.data).map((item: any) => {
          //   const tempsubHeader: any = Object.entries(item[1]).map((item: any) => {
          //     return (
          //       <tr>
          //         < td style={{ padding: '10px' }}>
          //           <tr>
          //             <td style={{ fontSize: '20px' }}>{item[0]} : </td>
          //             <td style={{ fontSize: '20px' }}>{item[1]}</td>
          //           </tr >
          //         </td >
          //       </tr>
          //     )
          //   });
          //   const expandUpdatedData = [
          //     { [item[0]]: true }
          //   ];
          //   let bo = false;
          //   // const tempdata: any = Object.entries(item[1]).map(() => { <td style={{ fontSize: '20px' }}>{item[2]}</td> });
          //   return (
          //     <tr style={{ borderBottom: '1px solid black', borderStyle: 'dotted' }}>
          //       <td style={{ fontSize: '20px', fontWeight: 'bold', borderRight: '1px solid black', borderStyle: 'dotted' }}>{item[0]}

          //       {/* <button onClick={() => { ExpandToggles[item[0]] = true;bo=true }}>See More</button> */}

          //       </td>
          //       {/* <div id='expand'> */}
          //       {/* {bo? tempsubHeader : null} */}
          //       {/* </div> */}
          //       {tempsubHeader}

          //     </tr>
          //   )
          // })
          // console.log(dataOutput);
          // const data: initTableData = {
          //   address: inputData.address,
          //   data: (
          //     <table className='' style={{ width: '100%' }}>
          //       {dataOutput}
          //     </table>
          //   )
          // }
        }
        let data:initTableData;
        if ("data" in response && Object.keys(response.data).length >0) {
          const data:initTableData = {
            id: new Date().getTime(),
            address: inputData.address,
            earthquakeHazardZoneCode: response.data.earthquake.hazard_zone_code!=""?response.data.earthquake.hazard_zone_code:"None",
            earthquakeHazardZoneValue: response.data.earthquake.hazard_zone_value!=""?response.data.earthquake.hazard_zone_value:"None",
            floodRiskZoneCode: response.data.flood.risk_zone_code!=""?response.data.flood.risk_zone_code:"None",
            floodRiskZoneValue: response.data.flood.risk_zone_value!=""?response.data.flood.risk_zone_value:"None",
            floodMaxSurgeHeight: response.data.flood.max_surge_height!=""?response.data.flood.max_surge_height:"None",
            windHazardZoneCode: response.data.wind.hazard_zone_code!=""?response.data.wind.hazard_zone_code:"None",
            windHazardZoneValue: response.data.wind.hazard_zone_value!=""?response.data.wind.hazard_zone_value:"None",
            windMaxSpeed: response.data.wind.max_speed!=""?response.data.wind.max_speed:"None",
            cycloneRiskZoneCode: response.data.cyclone.risk_zone_code!=""?response.data.cyclone.risk_zone_code:"None",
            cycloneRiskZoneValue: response.data.cyclone.risk_zone_value!=""?response.data.cyclone.risk_zone_value:"None",
            cycloneMaxSpeed: response.data.cyclone.max_speed!=""?response.data.cyclone.max_speed:"None",
            cycloneOccurance: response.data.cyclone.occurance!=""?response.data.cyclone.occurance:"None",
            LandSlideRiskZoneCode: response.data.landslide.risk_zone_code!=""?response.data.landslide.risk_zone_code:"None",
            LandSlideRiskZoneValue: response.data.landslide.risk_zone_value!=""?response.data.landslide.risk_zone_value:"None",
          }
          // console.log("data"+[Object.entries(data)])
          console.log("hiii")
          const rows = [
            ...tableData,
            data
          ];
          console.log("hiii3")

          console.log("rows")
          console.log("rows"+rows);
          setTableData(rows);
          setTableDataToShow(rows);
          console.log("hiii3")

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
        <div className='' style={{ width: '20vw', flex: '', padding: '10px' }}>
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
          {!isValidInput && inputData.address === "" && (
            <div className='fv-plugins-message-container'>
              <div data-field='address' data-validator='notEmpty' className='fv-help-block'>
                Address is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{ width: '15vw', flex: '', padding: '10px' }}>
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
          {!isValidInput && inputData.city === "" && (
            <div className='fv-plugins-message-container'>
              <div data-field='city' data-validator='notEmpty' className='fv-help-block'>
                City is required
              </div>
            </div>
          )}
        </div>
        <div className='' style={{ width: '15vw', flex: '', padding: '10px' }}>
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
          {!isValidInput && inputData.pincode === "" && (
            <div className='fv-plugins-message-container'>
              <div data-field='pincode' data-validator='notEmpty' className='fv-help-block'>
                Pincode is required
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
      {/* <div className='d-flex flex-row flex-center' style={{ marginTop: '20px' }}>
        <table className='' style={{ width: '100%', border: '1px solid black' }}>
          <thead>
            <tr >
              {columns}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div> */}

    </div >
  );
}

export default Header;