/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function SimpleDialog(props) {
  const { onClose, open, geocodeResponse } = props;
  const handleClose = () => {
    onClose();
  };

  const createData = (key, value) => {
    return {key, value}
  }

  let rows = []

  if(geocodeResponse.data){
    rows = Object.keys(geocodeResponse.data.data).map(key => createData(key, geocodeResponse.data.data[key]))
  }

  return (
    <div onClose={handleClose} open={open}>
      <div>Geocoding Response</div>
        <Table>
        <div>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <div>
            {rows.map((row) => (
              <div
                key={row.key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'color': "#efefef" }}
              >
                <div component="th" scope="row" sx={{'color': '#316abc'}}>
                  {row.key}
                </div>
                <div style={{textWrap:'balance'}}>{row.value}</div> 
              </div>
            ))}
          </div>
        </Table>
      </div>
      </Table>
    </div>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  geocodeResponse: PropTypes.object.isRequired
};

export default SimpleDialog;