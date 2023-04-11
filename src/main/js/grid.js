'use strict';

import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import client from './client';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

export default class Grid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {locationForecasts: []};
	}

    componentDidMount() {
      client({method: 'GET', path: '/locationForecasts'})
        .then(response => {
          this.setState({locationForecasts: response.entity});
        })
        .catch(error => {
          console.error('Error fetching location forecasts:', error);
        });
    }

	render() {
		const rowData = this.state.locationForecasts;
		const columnDefs = [
          {
              field: "location.locationName", headerName: 'Location'
          },
		    { field: 'localDate' },
		    { field: 'timeslot' },
		    { field: 'temperatureC' }
		];

		return (
			<div className="ag-theme-alpine" style={{height: 400, width: 600}}>
			   <AgGridReact
				   rowData={rowData}
				   columnDefs={columnDefs}>
			   </AgGridReact>
			</div>
		);
	}
}