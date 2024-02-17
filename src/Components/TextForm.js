import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");

  const handleupClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showalert("Convert to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showalert("Concert to Lowercase", "success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showalert("Clear Text", "success");
  }

  const handleCopy = () => {
    let text = document.getElementById("mytext")
    text.select();  
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy Text", "success");
  }

  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ] + /);
    setText(newText.join(" "))
    props.showalert("Remove Extra Spaces", "success");
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container" style={{color:props.mode === "light" ? "black" : "white"}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            style={{background:props.mode === "light" ? "white" : "#112227",color:props.mode === "light" ? "black" : "white"}}
            value={Text}
            onChange={handleOnChange}
            className="form-control"
            id="mytext"
            rows={8}
          />
        </div>
        <button className="btn btn-primary" onClick={handleupClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-5" style={{color:props.mode === "light" ? "black" : "white"}}>
        <h2>Yout Text Summary</h2>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} Munites Read</p>
        <p>{Text.split("\n").length} Paragraphs</p>
        <h2>Preview</h2>
        <p>{Text.length>0 ? Text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
