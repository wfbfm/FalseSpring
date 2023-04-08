'use strict';

// tag::vars[]
const React = require('react'); // <1>
const ReactDOM = require('react-dom'); // <2>
const client = require('./client'); // <3>
// end::vars[]

// tag::app[]
class App extends React.Component { // <1>

	constructor(props) {
		super(props);
		this.state = {locationForecasts: []};
	}

	componentDidMount() { // <2>
		client({method: 'GET', path: '/api/locationForecasts'}).done(response => {
			this.setState({locationForecasts: response.entity._embedded.locationForecasts});
		});
	}

	render() { // <3>
		return (
			<LocationForecastList locationForecasts={this.state.locationForecasts}/>
		)
	}
}
// end::app[]

// tag::locationForecast-list[]
class LocationForecastList extends React.Component{
	render() {
		const employees = this.props.locationForecasts.map(locationForecast =>
			<LocationForecast key={locationForecast._links.self.href} locationForecast={locationForecast}/>
		);
		return (
			<table>
				<tbody>
					<tr>
                        <th>Location Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Temperature C</th>
					</tr>
					{locationForecasts}
				</tbody>
			</table>
		)
	}
}
// end::locationForecast-list[]

// tag::locationForecast[]
class LocationForecast extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.locationForecast.locationName}</td>
				<td>{this.props.locationForecast.localDate}</td>
				<td>{this.props.locationForecast.timeSlot}</td>
				<td>{this.props.locationForecast.temperatureC}</td>
			</tr>
		)
	}
}
// end::temperatureC[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]