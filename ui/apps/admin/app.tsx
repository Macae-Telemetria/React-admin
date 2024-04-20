import React from "react";

import "../../shared/theme/global.css";
import { Provider } from "react-redux";
import store from "@ui/shared/infra/store";
import Router from "./router";
import { AuthenticationProvider } from "./contexts/Authentication";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AuthenticationProvider>
        <Router />
      </AuthenticationProvider>
    </Provider>
  );
};

export default App;
