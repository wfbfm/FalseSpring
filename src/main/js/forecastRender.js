import React, { useState, useEffect } from 'react';
import { Box, Stack, Text, CircularProgress, CircularProgressLabel, Icon } from '@chakra-ui/react'
import { testLocationForecasts } from './data';
import { TbClockHour10 } from 'react-icons/tb';
import { IoWaterSharp } from 'react-icons/io5';
import { GiWindsock, GiBinoculars } from 'react-icons/gi';
import { BsThermometerHalf, BsCloudFill, BsFillCloudSunFill, BsSun } from 'react-icons/bs';
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

  const forecast1 = data[20];
  const forecast2 = data[21];
  const forecast3 = data[22];

  return (
    <>
      <Box bg='tomato'>
        <Text>
          Hi
        </Text>
      </Box>
      <Box>
        <Stack direction='row' align='center' justify={'center'} justifyItems={'center'}
          alignContent={'center'}>
          <Stack direction='column' align='center' justify={'center'} justifyItems={'center'}
            alignContent={'center'}>
            {/* <Stack direction='column'> */}
            <Box>
              <Icon as={TbClockHour10}></Icon>
            </Box>
            <Box>
              <Icon as={GiBinoculars}></Icon>
            </Box>
            <Box>
              <Icon as={BsThermometerHalf}></Icon>
            </Box>
            <Box>
              <Icon as={IoWaterSharp} style={{ transform: 'rotate(330deg)' }}></Icon>
            </Box>
            <Box>
              <Icon as={GiWindsock}></Icon>
            </Box>
          </Stack>
          <Stack direction='column' align='center' justify={'center'} justifyItems={'center'}
            alignContent={'center'}>
            {/* <Stack direction='column'> */}
            <Box bg='cyan'>{forecast1.timeslot}</Box>
            <Box>
              <Icon as={BsCloudFill}></Icon>
            </Box>
            <Box>{forecast1.forecast.temperatureC}°C</Box>
            <Box>{forecast1.forecast.precipitationProbabilityInPercent}%</Box>
            <Box bg='green'>
              <Icon as={HiArrowNarrowUp} style={{ transform: 'rotate(0deg)' }}></Icon>
              {forecast3.forecast.gustSpeedKph}
            </Box>
          </Stack>
          <Stack direction='column' align='center' justify={'center'} justifyItems={'center'}
            alignContent={'center'}>
            {/* <Stack direction='column'> */}
            <Box bg='cyan'>{forecast2.timeslot}</Box>
            <Icon as={BsCloudFill}></Icon>
            <Box>{forecast2.forecast.temperatureC}°C</Box>
            <Box>{forecast2.forecast.precipitationProbabilityInPercent}%</Box>
            <Box bg='green'>
              <Icon as={HiArrowNarrowUp} style={{ transform: 'rotate(330deg)' }}></Icon>
              {forecast3.forecast.gustSpeedKph}
            </Box>
          </Stack>
          <Stack direction='column' align='center' justify={'center'} justifyItems={'center'}
            alignContent={'center'}>
            <Box bg='cyan'>{forecast3.timeslot}</Box>
            <Icon as={BsCloudFill}></Icon>
            <Box>{forecast3.forecast.temperatureC}°C</Box>
            <Box>{forecast3.forecast.precipitationProbabilityInPercent}%</Box>
            <Box bg='green'>
              <Icon as={HiArrowNarrowUp} style={{ transform: 'rotate(330deg)' }}></Icon>
              {forecast3.forecast.gustSpeedKph}
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box bg='blue'>
        <Text>
          Hi
        </Text>
      </Box>
    </>
  )
}
export default ForecastRender;