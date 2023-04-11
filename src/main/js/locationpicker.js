import React, { useState, useEffect } from "react";
import { Select } from '@chakra-ui/react'
import client from './client';

const LocationPicker = ({onSelect}) => {
  const [selectLocation, setSelectLocation] = useState("")
  const [locations, setLocations] = useState([])

  const handleSelect = (event) => {
    const location = event.target.value;
    setSelectLocation(location);
    onSelect(location);
  };

  useEffect(() => {
    client({method: 'GET', path: '/api/locations'})
      .then(response => {setLocations(response.entity._embedded.locations)});
  }, [])

  return (
    <Select
      value={selectLocation}
      onChange={handleSelect}
      placeholder="Select a location"
    >
      {locations.map(location => (
        <option key={location.locationName} value={location.locationName}>
          {location.locationName}
        </option>
      ))}
    </Select>
  )
}
export default LocationPicker;