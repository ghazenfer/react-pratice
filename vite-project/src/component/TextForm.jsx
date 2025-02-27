import React, { useState } from 'react';

const TextForm = (props) => {
  const [text, setText] = useState("Enter the text here");

  const upperClick = () => {
    setText(text.toUpperCase()); // Convert text to uppercase
  };
  const lowerClick = () => {
    setText(text.toLowerCase()); // Convert text to uppercase
  };

  return (
    <>
    <div>
      <div className="form-floating">
        <textarea
          className="form-control mt-5"
          value={text}
          onChange={(e) => setText(e.target.value)} // Update text state on input change
          rows="8"
        ></textarea>
        <label>{props.heading}</label>
        <button className="btn btn-primary my-3 mx-2" onClick={upperClick}>
          Upper Case
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={lowerClick}>
          lower Case
        </button>
      </div>
      <div className="container">
        <h1>Your text Summary </h1>
        <p> {text.split(" ").length} words and Characters {text.length}</p>
        <p> {0.008 * text.split(" ").length}  minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
    </>
  );
};

export default TextForm;
