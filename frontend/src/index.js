import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CometChat } from "@cometchat-pro/chat";

import "./index.css";
import App from "./App";
// import bootstrap for CSS
import "bootstrap/dist/css/bootstrap.min.css";

const appID = process.env.REACT_APP_COMECHAT_ID;
const region = process.env.REACT_APP_COMECHAT_REGION;
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build()

CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    ReactDOM.render(
      <BrowserRouter>
        <App></App>
      </BrowserRouter>,
      document.getElementById("root")
    );

  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);




