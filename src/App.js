import "./App.css";
import Cities from "./pages/Cities/Cities";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Cities />
      </ChakraProvider>
    </>
  );
};

export default App;
