// ResponseModal.js
import React from 'react';
import Modal from 'react-modal';

const SimpleDialog = ({ isOpen, onRequestClose, geocodeResponse }) => {


  const createData = (key, value) => {
    if (value === true) value = "Yes";
    else if (value === false) value = "No";
    if(key === "lat") key = "Latitude";
    else if(key === "lon") key = "Longitude";
    return { key, value };
  };

  let rows: any = [];

  if (geocodeResponse.data) {
    rows = Object.keys(geocodeResponse.data).map((key) =>
      createData(key, geocodeResponse.data[key])
    );
  }
  console.log(rows)

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
          padding: '3vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
          // overflow: 'auto',
          // WebkitOverflowScrolling: 'touch',
          // borderRadius: '4px',
          // outline: 'none',
          // padding: '20px'
        }
      }}

    >

      <div className='d-flex flex-column  '>
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
      </div>
    </Modal>
  );
};

export default SimpleDialog;
