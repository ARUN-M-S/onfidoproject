import React, { useEffect } from "react";
import { render } from "react-dom";
import * as OnfidoSDK from "onfido-sdk-ui/dist/onfido.min.js";
import "onfido-sdk-ui/dist/style.css";
import  axios  from "axios";

let onfidoToken ;
const onfidoContainerId = "onfido-sdk-wrapper";

const Onfido = () => {
  let config = {
    headers: {
      Authorization: `Token token=api_sandbox.VakqVqrE8zA.m7BFiRZPO7tal_neUi2Ca5AOubTcudWf`,
      Accept: "application/json",
    },
  };

  const obj2 = {
    applicant_id: '24120550-81d0-40e5-bab1-90c93bedb3a6',
    referrer: `${window.location.origin}/`,
  };
  useEffect(() => { 
     axios.post(`/sdk_token`, obj2, config).then((res) => {
      onfidoToken=res.data.token
    if (onfidoToken)
      OnfidoSDK.init({
        token: onfidoToken,
        containerId: 'onfido-sdk-wrapper'
      });
  })}, []);

  return <div id='onfido-sdk-wrapper' />;
};

render(<Onfido />, document.getElementById("root"));