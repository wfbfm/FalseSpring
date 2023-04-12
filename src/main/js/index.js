import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Nav from "./navbar";
import Grid from "./grid";
import SmallWithLogoLeft from "./footer";
import ControlPanel from "./controlPanel";

function App() {

  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <ControlPanel />
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