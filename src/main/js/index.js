import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Box, ChakraProvider, HStack } from "@chakra-ui/react";
import Nav from "./navbar";
import Grid from "./grid";
import SmallWithLogoLeft from "./footer";
import ControlPanel from "./controlPanel";
import { Spacer } from "@chakra-ui/layout";

function App() {

  const [latestLocationForecasts, setLatestLocationForecasts] = React.useState([]);
  const [historicalLocationForecasts, setHistoricalLocationForecasts] = React.useState([]);

  const fetchForecasts = (latestForecasts, historicalForecasts) => {
    setLatestLocationForecasts(latestForecasts);
    setHistoricalLocationForecasts(historicalForecasts);
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
      <Box>
        <Grid locationForecasts={latestLocationForecasts} />
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