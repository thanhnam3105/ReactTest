import React from "react";
class UserInfo extends React.Component {
  state = {
    name: "nam",
    diaChi: "tphcm",
  };
  thanhnam = {
    age: 27,
  };
  handleClick() {
    this.setState({
      name: "aaa",
      diaChi: "bccbb",
    });
  }

  handleClick2() {
    this.setState({
      name: "hhhh",
      diaChi: "gggg",
      age: 100,
    });
  }
  render() {
    return (
      <div>
        <label>{this.state.name}</label>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <input onChange={(event) => this.onChangeInput(event)} />
        </form>
      </div>
    );
  }

  onChangeInput(event) {
    this.setState({
      name: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
  }
}
export default UserInfo;
