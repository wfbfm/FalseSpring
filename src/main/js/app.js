'use strict';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import client from './client';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {locationForecasts: []};
	}

    componentDidMount() {
      client({method: 'GET', path: '/api/locationForecasts'})
        .then(response => {
          this.setState({locationForecasts: response.entity._embedded.locationForecasts});
        })
        .catch(error => {
          console.error('Error fetching location forecasts:', error);
        });
    }

	render() {
		const rowData = this.state.locationForecasts;
		const columnDefs = [
		    { field: 'locationName' },
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

ReactDOM.render(<App />, document.getElementById('react'));