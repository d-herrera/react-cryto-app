import { ReactElement } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./theme/Theme";

import CryptoPrice from "./features/crypto-price";
import { AppHeader } from "./components/Header";

function App(): ReactElement {
  return (
    <ThemeProvider theme={Theme}>
      <AppHeader />
      <CryptoPrice />
    </ThemeProvider>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
