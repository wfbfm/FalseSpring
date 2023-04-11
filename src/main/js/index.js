import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Nav from "./navbar";
import Grid from "./grid";
import LocalDatePicker from "./datepicker";
import SmallWithLogoLeft from "./footer";
import LocationPicker from "./locationpicker";

function App() {

    const [localDate, setLocalDate] = React.useState(new Date());
    const [selectedLocation, setSelectedLocation] = React.useState("");

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
      };
    return (
    <>
    <div>
    <Nav />
    </div>
      <div>
        <LocationPicker onSelect={handleLocationSelect} />
        <p>You selected: {selectedLocation}</p>
      </div>
    <div>
    <LocalDatePicker localDate={localDate} setLocalDate={setLocalDate} />
    </div>
    <div>
    <Grid />
    </div>
    <div>
    <SmallWithLogoLeft />
    </div>
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