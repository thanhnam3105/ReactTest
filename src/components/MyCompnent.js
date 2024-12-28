import React from "react";

class Mycomponent extends React.Component {
  state = {
    name: "nam",
    diaChi: "tphcm",
  };
  render() {
    return <div>{this.state.diaChi}</div>;
  }
}

export default Mycomponent;
