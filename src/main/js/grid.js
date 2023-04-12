'use strict';

import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS


export default function Grid({ locationForecasts }) {
	const columnDefs = [
		{
			field: "location.locationName", headerName: 'Location'
		},
		{ field: 'localDate' },
		{ field: 'timeslot' },
		{ field: 'temperatureC' }
	];

	return (
		<div className="ag-theme-alpine" style={{ height: 500, width: 1000 }}>
			<AgGridReact
				rowData={locationForecasts}
				columnDefs={columnDefs}>
			</AgGridReact>
		</div>
	);
}