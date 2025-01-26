import React from "react";
import SignLogo from "/sign.svg";

const Sing_img = () => {
  return (
    <>
      <div className="right_data mt-5" style={{ width: "100%" }}>
        <div className="sign_img mt-5">
          <img src={SignLogo} alt="sign logo" style={{ maxWidth: 480 }} />
        </div>
      </div>
    </>
  );
};

export default Sing_img;
