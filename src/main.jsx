import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dariogod.us.auth0.com"
    clientId="cNbv3Wu1rub3deUoYXNmn1Pgwfz86Fdm"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <App />
  </Auth0Provider>
);
