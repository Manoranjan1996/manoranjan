import React from "react";

function Alart(props) {
  return (
    props.alart && (
      <div
        className={`alert alert-${props.alart.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alart.msg}</strong>:{props.alart.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}

export default Alart;
