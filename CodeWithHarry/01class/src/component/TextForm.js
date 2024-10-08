import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   setText("new text");
  const handleUpclick = () => {
    let newTax = text.toUpperCase();
    setText(newTax);
  };
  const handlLowClick = () => {
    let newLow = text.toLowerCase();
    setText(newLow);
  };
  const handlClick = () => {
    let newLow = "";
    setText(newLow);
  };
  const handleOnclick = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnclick}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          <b>Convert to Upercase</b>
        </button>
        <button className="btn btn-primary mx-2" onClick={handlLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlClick}>
          Text Clear
        </button>
      </div>
      <div className="container">
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
