import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { useColorModeValue, Flex, Box, ChakraProvider, HStack } from "@chakra-ui/react";
import Nav from "./navbar";
import Grid from "./grid";
import SmallWithLogoLeft from "./footer";
import ControlPanel from "./controlPanel";
import { Spacer } from "@chakra-ui/layout";
import ForecastRender from "./forecastRender";

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
function App() {

  const [latestLocationForecasts, setLatestLocationForecasts] = React.useState([]);
  const [historicalLocationForecasts, setHistoricalLocationForecasts] = React.useState([]);

  const fetchForecasts = (latestForecasts, historicalForecasts) => {
    setLatestLocationForecasts(convertData(convertForecastData(latestForecasts)));
    setHistoricalLocationForecasts(convertData(convertForecastData(historicalForecasts)));
  }

  return (
    <>
      <Nav />
      <Box p='4'>
        <Box py='4'>
          <HStack>
            <Box borderWidth='1px' borderRadius='lg' p='4' mx='Auto'>
              <ControlPanel onFetchForecasts={fetchForecasts} />
            </Box>
            <Spacer></Spacer>
          </HStack>
        </Box>
        <Box sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }} bg={useColorModeValue('yellow.50', 'purple.500')} borderRadius='lg'>
          {latestLocationForecasts.map((dailyForecast, i) => <ForecastRender dailyForecast={dailyForecast} key={`latest-${i}`} />)}
        </Box>
        <Box>
          {historicalLocationForecasts.map((dailyForecast, i) => <ForecastRender dailyForecast={dailyForecast} key={`historical-${i}`} />)}
        </Box>
      </Box>
      <Box>
        <SmallWithLogoLeft />
      </Box>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);