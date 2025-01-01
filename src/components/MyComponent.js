import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Thanh nam", age: "27" },
      { id: 2, name: "Thanh nam 2", age: "28" },
      { id: 3, name: "Thanh nam 3", age: "29" },
      { id: 4, name: "Thanh nam 4", age: "30" },
      { id: 5, name: "Thanh nam 5", age: "31" },
    ],
  };
  render() {
    const soTuoi = 50;
    return (
      <div>
        <UserInfo></UserInfo>
        <DisplayInfo listUserProp={this.state.listUsers}></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;
