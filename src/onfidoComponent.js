import React, { useEffect } from "react";
import { render } from "react-dom";
import * as OnfidoSDK from "onfido-sdk-ui/dist/onfido.min.js";
import "onfido-sdk-ui/dist/style.css";

const onfidoToken = "onfido-jwt";
const onfidoContainerId = "onfido-sdk-wrapper";

const Onfido = () => {
  useEffect(() => {
    if (onfidoToken)
      OnfidoSDK.init({
        token: onfidoToken,
        containerId: onfidoContainerId
      });
  }, []);

  return <div id={onfidoContainerId} />;
};

render(<Onfido />, document.getElementById("root"));
