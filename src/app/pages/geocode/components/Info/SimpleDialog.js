// ResponseModal.js
import React from 'react';
import Modal from 'react-modal';

const SimpleDialog = ({ isOpen, onRequestClose, geocodeResponse }) => {
  const createData = (key, value) => {
    return { key, value };
  };

  let rows = [];

  if (geocodeResponse.data) {
    rows = Object.keys(geocodeResponse.data.data).map((key) =>
      createData(key, geocodeResponse.data.data[key])
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Geocoding Response"
    >
      <h2>Geocoding Response</h2>
      <table>
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
    </Modal>
  );
};

export default SimpleDialog;