import React, { useState, useEffect } from 'react';
import { Box, Text, CircularProgress, CircularProgressLabel, Icon } from '@chakra-ui/react'
import { testLocationForecasts } from './data';
import { TbClockHour10 } from 'react-icons/tb';
import { IoWaterSharp } from 'react-icons/io5';
import { GiWindsock } from 'react-icons/gi';
import { BsThermometerHalf } from 'react-icons/bs';
import { HiArrowNarrowUp } from 'react-icons/hi';


function convertForecastData(locationForecasts) {
  // Convert the accessedDate to ISO format
  locationForecasts.forEach(forecast => {
    forecast.accessedDate = forecast.accessedDate.slice(0, 10);
  });

  // Sort the array by descending accessedDate and ascending timeslot
  locationForecasts.sort((a, b) => {
    return b.accessedDate.localeCompare(a.accessedDate) || a.timeslot.localeCompare(b.timeslot);
  });

  const convertedData = locationForecasts.map(forecast => {
    const newForecast = {
      accessedDate: forecast.accessedDate,
      timeslot: forecast.timeslot,
      forecast: {}
    };

    Object.keys(forecast).reduce((acc, key) => {
      if (key !== "accessedDate" && key !== "timeslot") {
        acc.forecast[key] = forecast[key];
      }
      return acc;
    }, newForecast);

    return newForecast;
  });

  return convertedData;
}



const ForecastRender = ({ locationForecasts }) => {

  const data = convertForecastData(testLocationForecasts);

  const forecast = data[24];
  console.log(forecast);


  return (
    <Box>
      <TbClockHour10></TbClockHour10>
      <Icon as={IoWaterSharp} style={{ transform: 'rotate(330deg)' }}></Icon>
      <Icon as={HiArrowNarrowUp} style={{ transform: 'rotate(330deg)' }}></Icon>
      <Icon as={BsThermometerHalf}></Icon>
      <Icon as={GiWindsock}></Icon>
      <Text>{forecast.timeslot}</Text>
      <Text>{forecast.forecast.temperatureC}°C</Text>
      <CircularProgress value={forecast.forecast.precipitationProbabilityInPercent}>
        <CircularProgressLabel>{forecast.forecast.precipitationProbabilityInPercent}%</CircularProgressLabel>
        </CircularProgress>
    </Box>
  )
}
export default ForecastRender;