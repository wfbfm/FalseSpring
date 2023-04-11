import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Nav from "./navbar";
import Grid from "./grid";
import LocalDatePicker from "./datepicker";
import SmallWithLogoLeft from "./footer";

function App() {

    const [localDate, setLocalDate] = React.useState(new Date());

    return (
    <>
    <div>
    <Nav />
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