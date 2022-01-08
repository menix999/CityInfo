import Routes from "./Routes/Routes";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Routes />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
