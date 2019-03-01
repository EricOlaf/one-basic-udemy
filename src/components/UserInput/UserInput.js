import React from "react";

const UserInput = props => {
  return (
    <div>
      <input
        value={props.name}
        onChange={e => {
          props.nh(e.target.value);
        }}
      />
    </div>
  );
};

export default UserInput;
