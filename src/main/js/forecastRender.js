import React, { useState, useEffect } from 'react';
import { Flex, AbsoluteCenter, Divider, Tooltip, SimpleGrid, Grid, GridItem, Box, Stack, Text, CircularProgress, CircularProgressLabel, Icon, HStack } from '@chakra-ui/react'
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

function convertData(data) {
  const groupedData = data.reduce((acc, curr) => {
    const index = acc.findIndex(item => item.accessedDate === curr.accessedDate);
    if (index === -1) {
      acc.push({ accessedDate: curr.accessedDate, data: [{ timeslot: curr.timeslot, forecast: curr.forecast }] });
    } else {
      acc[index].data.push({ timeslot: curr.timeslot, forecast: curr.forecast });
    }
    return acc;
  }, []);
  return groupedData;
}

function renderHourlyForecast(hourlyForecast) {
  return (
    <Stack key={hourlyForecast.timeslot} direction='column' align='center' justify='center' alignContent='center' alignItems='center'>
      <Text as='i' fontSize='xs'>{hourlyForecast.timeslot}</Text>
      <Box>
        <Icon as={BsCloudFill}></Icon>
      </Box>
      <Text display='flex' alignItems='center' as='b'>{hourlyForecast.forecast.temperatureC}°</Text>
      <Box>{hourlyForecast.forecast.precipitationProbabilityInPercent}%</Box>
      <Box display='flex' alignContent='center' justifyContent='center'>
        <HStack spacing={0} justifyContent='center'>
          <Icon as={HiArrowNarrowUp} style={{ transform: 'rotate(0deg)' }}></Icon>
          <Text fontSize='xs'>{hourlyForecast.forecast.gustSpeedKph}</Text>
        </HStack>
      </Box>
    </Stack>
  )
}

const ForecastRender = ({ locationForecasts }) => {

  const data = convertForecastData(testLocationForecasts);

  const groupedAllDaysData = convertData(data);
  const firstDayData = groupedAllDaysData[0];

  console.log(firstDayData.data[0]);

  return (
    <>
      <Box bg='tomato'>
        <Text>
          Hi
        </Text>
      </Box>
      <Box>
        <Stack direction='row' align='center' justify={'start'} justifyItems={'start'}
          alignContent={'center'}>
          <Stack direction='column' align={'center'} justify={'center'} justifyItems={'center'}
            alignContent={'center'} display={'flex'} verticalAlign={'center'}>
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
          {firstDayData.data.map(hourlyForecast => renderHourlyForecast(hourlyForecast))}
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