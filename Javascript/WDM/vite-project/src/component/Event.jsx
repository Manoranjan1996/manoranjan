import React from "react";

const Event = () => {
  const handelClick = () => {
    alert("Your are click the button");
  };
  const addition = (a) => {
    alert(a + 10);
  };
  return (
    <div>
      <h1>We are learing Events</h1>
      <button onMouseOver={handelClick}>Click this button</button>;
      <button onClick={() => addition(10)}>Button 2</button>
    </div>
  );
};

export default Event;
