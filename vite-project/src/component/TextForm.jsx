import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const TextForm = (props) => {
  const [text, setText] = useState("Enter the text here");

  const upperClick = () => {
    setText(text.toUpperCase()); // Convert text to uppercase
  };

  const lowerClick = () => {
    setText(text.toLowerCase()); // Convert text to lowercase
  };

  const removeExtraSpace = () => {
    setText(text.replace(/\s+/g, ' ').trim()); // Remove extra spaces
  };

  const clearAll = () => {
    setText(""); // Clear all text
  };

  const copyText = () => {
    if (text.trim() === "") {
       toast("Wow so easy!");
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
       toast("Text copied to clipboard!");
    });
  };

 

  return (
    <>
      <div>
   
        <div className="form-floating">
        <ToastContainer/>
          <textarea
            className="form-control mt-5 h-50"
            value={text}
            onChange={(e) => setText(e.target.value)} // Update text state on input change
            rows="8"
          ></textarea>
          <label>{props.heading}</label>
          <button className="btn btn-primary my-3 mx-2" onClick={upperClick}>
            Upper Case
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={lowerClick}>
            Lower Case
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={removeExtraSpace}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={clearAll}>
            Clear All
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={copyText}>
            Copy Text
           
          </button>
        </div>
        <div className="container">
          <h1>Your Text Summary</h1>
          <p>{text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(/\s+/).filter((word) => word !== "").length} minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
