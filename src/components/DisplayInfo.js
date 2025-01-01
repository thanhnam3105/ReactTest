import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUserProp } = this.props;
    console.log(this.props);
    return (
      <div>
        {listUserProp.map((user, index) => {
          return (
            <div key={user.id}>
              <label>
                {user.id} : {user.name}{" "}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;
