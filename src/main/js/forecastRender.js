import React, { useState, useEffect } from 'react';
import { useColorModeValue, Flex, AbsoluteCenter, Divider, Tooltip, SimpleGrid, Grid, GridItem, Box, Stack, Text, CircularProgress, CircularProgressLabel, Icon, HStack } from '@chakra-ui/react'
import { testLocationForecasts } from './data';
import { TbClockHour10 } from 'react-icons/tb';
import { IoWaterSharp } from 'react-icons/io5';
import { GiWindsock, GiBinoculars } from 'react-icons/gi';
import { BsThermometerHalf, BsCloudFill, BsFillCloudSunFill, BsSun, BsCloudSun, BsCloudyFill, BsCloudy, BsCloudDrizzle, BsCloudFog, BsCloudHazeFill, BsCloudRain, BsCloudRainHeavyFill, BsCloudSleet, BsCloudSleetFill, BsCloudHail, BsCloudHailFill, BsCloudSnow, BsCloudSnowFill, BsCloudLightningRainFill, BsCloudMoon, BsMoon } from 'react-icons/bs';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { WiShowers } from 'react-icons/wi';


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
function mapWeatherIcon(hourlyForecast) {
  let icon;
  switch (hourlyForecast.forecast.weatherTypeText) {
    case 'Sunny':
      icon = BsSun;
      break;
    case 'Sunny Intervals':
      icon = BsCloudSun;
      break;
    case 'Light Cloud':
      icon = BsCloudy;
      break;
    case 'Thick Cloud':
      icon = BsCloudyFill;
      break;
    case 'Drizzle':
      icon = BsCloudDrizzle;
      break;
    case 'Mist':
      icon = BsCloudFog;
      break;
    case 'Fog':
      icon = BsCloudHazeFill;
      break;
    case 'Light Rain Showers':
      icon = BsCloudDrizzle;
      break;
    case 'Light Rain':
      icon = BsCloudRain;
      break;
    case 'Heavy Rain':
      icon = BsCloudRainHeavyFill;
      break;
    case 'Sleet Showers':
      icon = BsCloudSleet;
      break;
    case 'Sleet':
      icon = BsCloudSleetFill;
      break;
    case 'Hail Showers':
      icon = BsCloudHail;
      break;
    case 'Hail':
      icon = BsCloudHailFill;
      break;
    case 'Light Snow Showers':
      icon = BsCloudSnow;
      break;
    case 'Light Snow':
      icon = BsCloudSnow;
      break;
    case 'Heavy Snow':
      icon = BsCloudSnowFill;
      break;
    case 'Thundery Showers':
      icon = BsCloudLightningRainFill;
      break;
    case 'Partly Cloudy':
      icon = BsCloudMoon;
      break;
    case 'Clear Sky':
      icon = BsMoon;
      break;
    default:
      icon = BsCloudFill;
  }
  icon.key = `weatherIcon-${hourlyForecast.forecast.id}`
  return icon;
}

const RotatedArrowIcon = React.forwardRef(({ rotation, ...rest }, ref) => (
  <Icon as={HiArrowNarrowUp} ref={ref} style={{ transform: `rotate(${rotation}deg)` }} {...rest} />
));

function mapWindDirection(hourlyForecast) {
  switch (hourlyForecast.forecast.windDirectionAbbreviation) {
    case 'N':
      return '0';
    case 'NNE':
      return '22.5';
    case 'NE':
      return '45';
    case 'ENE':
      return '67.5';
    case 'E':
      return '90';
    case 'ESE':
      return '112.5';
    case 'SE':
      return '135';
    case 'SSE':
      return '157.5';
    case 'S':
      return '180';
    case 'SSW':
      return '202.5';
    case 'SW':
      return '225';
    case 'WSW':
      return '247.5';
    case 'W':
      return '270';
    case 'WNW':
      return '292.5';
    case 'NW':
      return '315';
    case 'NNW':
      return '337.5';
    default:
      return '0';
  }
}

function renderHourlyForecast(hourlyForecast) {
  return (
    <Box key={`outer-box-${hourlyForecast.forecast.id}`} borderWidth='1px' borderRadius='lg' p='4' mx='Auto'>
      <Stack key={hourlyForecast.forecast.id} p='1' direction='column' align='center' justify='center' alignContent='center' alignItems='center'>
        <Text key={`timeslot-text-${hourlyForecast.forecast.id}`} as='i' fontSize='xs'>{hourlyForecast.timeslot}</Text>
        <Box>
          <Tooltip label={hourlyForecast.forecast.weatherTypeText} bg='blue.600' placement='auto-start'>
            <span>
              <Icon as={mapWeatherIcon(hourlyForecast)}></Icon>
            </span>
          </Tooltip>
        </Box>
        <Tooltip label={`${hourlyForecast.forecast.temperatureC}°C`} bg='blue.600' placement='auto-start'>
          <Text key={`temp-text-${hourlyForecast.forecast.id}`} display='flex' alignItems='center' as='b'>{hourlyForecast.forecast.temperatureC}°</Text>
        </Tooltip>
        <Text key={`precipitation-text-${hourlyForecast.forecast.id}`} color={useColorModeValue('blue.500', 'blue.200')} fontSize='xs'>{hourlyForecast.forecast.precipitationProbabilityInPercent}%</Text>
        <Box key={`wind-box-${hourlyForecast.forecast.id}`} display='flex' alignContent='center' justifyContent='center'>
          <HStack key={`wind-stack-${hourlyForecast.forecast.id}`} spacing={0} justifyContent='center'>
            <Tooltip key={`wind-tooltip-${hourlyForecast.forecast.id}`}
              label={`${hourlyForecast.forecast.gustSpeedKph} kph ${hourlyForecast.forecast.windDirectionAbbreviation}`}
              bg='blue.600' placement='auto-start'>
              <span>
                <RotatedArrowIcon key={`wind-icon-${hourlyForecast.forecast.id}`} rotation={mapWindDirection(hourlyForecast)} />
              </span>
            </Tooltip>
            <Text key={`wind-label-${hourlyForecast.forecast.id}`} fontSize='xs'>{hourlyForecast.forecast.gustSpeedKph}</Text>
          </HStack>
        </Box>
      </Stack>
    </Box>
  )
}

const ForecastRender = ({ dailyForecast, i }) => {
  if (!dailyForecast || dailyForecast.length === 0) {
    return (null);
  }
  return (
    <Box key={`box-container-${dailyForecast.data[0].forecast.id}`}>
      <Box bg={useColorModeValue('blue.700', 'gray.900')} key={`box-header-${dailyForecast.data[0].forecast.id}`} borderWidth='1px' borderRadius='lg' px='4' py='1' mx='Auto'>
        <Text as='b' key={`text-header-${dailyForecast.data[0].forecast.id}`} color='white'>
          Forecast as of {dailyForecast.accessedDate}
        </Text>
      </Box>
      <Box key={`container-box-${dailyForecast.data[0].forecast.id}`}>
        <Flex key={`stack-weather-${dailyForecast.data[0].forecast.id}`} p='4' align='center' justify={'start'} justifyItems={'start'}
          alignContent={'center'}>
          {dailyForecast.data.map(hourlyForecast => renderHourlyForecast(hourlyForecast))}
        </Flex>
      </Box>
    </Box>
  )
}
export default ForecastRender;