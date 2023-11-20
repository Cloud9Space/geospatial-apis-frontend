// ResponseModal.js
import React from 'react';
import Modal from 'react-modal';

const SimpleDialog = ({ isOpen, onRequestClose, negativeAreaResponse }) => {


  const createData = (key, value) => {
    if (value === true)
      value = "Yes";
    else if (value === false)
      value = "No";
    return { key, value };
  };

  let rows: any = [];

  if (negativeAreaResponse.data) {
    rows = Object.keys(negativeAreaResponse.data).map((key) =>
      createData(key, negativeAreaResponse.data[key])
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
          justifyContent: 'center',
          width: 'fit-content',
          height: 'auto',
          padding: '2vw',
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
        <h2>NegativeArea Response</h2><br />
        <table style={{ width: 'auto' }}>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <td>{row.key}</td>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default SimpleDialog;
