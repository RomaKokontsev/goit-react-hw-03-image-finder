import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Spinner extends Component {
  render() {
    return (
      <Loader
        type="Rings"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
}

export default Spinner;