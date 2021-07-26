import React, { Component } from "react";
import Loader from "react-loader-spinner";

import s from "./Loader.module.css";

class Spinner extends Component {
  render() {
    return (
      <div className={s.Spinner}>
        <Loader type="Puff" color="#00BFFF" height={200} width={200} />
      </div>
    );
  }
}

export default Spinner;
