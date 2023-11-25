// ResponseModal.js
import React, { useContext, useEffect } from 'react';
import Modal from 'react-modal';
import { ListWrapper } from '../ModelView/UsersList';
import { initTableData } from '../..';
import negativeAreaByAddressContext from '../../context/negativeAreaByAddress/negativeAreaByAddressContext';

const SimpleDialog = ({ isOpen, onRequestClose, negativeAreaResponse }) => {

  const { tableData, setTableData } = useContext(negativeAreaByAddressContext)

  const createData = (key, value) => {
     if (key === "lat") key = "Latitude";
    else if (key === "lon") key = "Longitude";
    else if (key === "isInNegativeArea") key = "Is In Negative Area";
    if (value === true) value = "True";
    else if (value === false) value = "False";
    return {id: new Date().getTime(), key, value };
  };

  let rows: any = [];

  useEffect(() => {
    if (negativeAreaResponse.data) {
      // data = Object.keys(geocodeResponse.data).map((key) =>
      //   createData(key, geocodeResponse.data[key])
      // );
      // const data: initTableData = {
      //   id : new Date().getTime(),
      //   driveTimeDistance: response['data']['drive_time_distance'],
      //   sourceLatitude: 18.463435,
      //   sourceLongitude: 73.866851,
      //   destinationLatitude: 19.463435,
      //   destinationLongitude: 73.866851
      //   // sourceLatitude: driveTimeDistanceInputData.sourceLatitude,
      //   // sourceLongitude: driveTimeDistanceInputData.sourceLongitude,
      //   // destinationLatitude: driveTimeDistanceInputData.destinationLongitude,
      //   // destinationLongitude: driveTimeDistanceInputData.destinationlongitude
      // }
      const temp:any = Object.keys(negativeAreaResponse.data).map((key) =>
        createData(key, negativeAreaResponse.data[key])
      );
      // console.log("temp"+temp[0) //temp
      const data = [...temp ];


      // setDriveTimeDistanceResponse({...driveTimeDistanceResponse,...data})
      // rows = [
      //   ...tableData,
      //   ...data
      // ];
      // console.log("rows",rows)
      setTableData([...data]);
    }
  }, [negativeAreaResponse])
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="NegativeArea Response"
      style={{
        overlay: {
          position: 'fixed',
          // top: '6vh',
          // left: '10vh',
          // right: 0,
          // bottom: 0,
          // flex:'1',
          // justifyContent: 'center',
          // alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          // flex:'1',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          position: 'relative',
          // top: '40px',
          // left: '40px',
          // right: '40px',
          // bottom: '40px',
          // border: '1px solid #ccc',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          // flex:'1',
          // justifyContent: 'center',
          // alignItems: 'center',
          minWidth: '40%',
          height: 'auto',
          minHeight: 'auto',
          fontSize: '20px',
          // padding: '3vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
          // overflow: 'auto',
          // WebkitOverflowScrolling: 'touch',
          // borderRadius: '4px',
          // outline: 'none',
          padding: '0px',
          border: 'none',
        }
      }}

    >
      <div style={{ }}>
        <ListWrapper />
      </div>
      {/* <div className='d-flex flex-column  '>
        <h2 className='text-center' style={{fontSize: '30px'}}>NegativeArea Response</h2><br />
        <table  style={{ width: 'auto', border: '1px solid black' }}>
          <thead>
            <tr className='text-center' style={{border: '1px solid black'}}>
              <th style={{border: '1px solid black'}}>Key</th>
              <th style={{border: '1px solid black'}}>Value</th>
            </tr>
          </thead>
          <tbody >
            {rows.map((row) => (
              <tr key={row.key}>
                <td style={{border: '1px solid black',padding: '10px'}}>{row.key}</td>
                <td style={{border: '1px solid black',padding: '10px'}}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </Modal>
  );
};

export default SimpleDialog;
