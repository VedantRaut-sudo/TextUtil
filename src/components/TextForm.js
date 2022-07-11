import React, { useState } from "react";

export default function TextForm(props) {
// onclick function
const handleUpClick = () => {
// console.log("uppercase was cllick" + text );
let newText = text.toUpperCase();

setText(newText);
props.showAlert("Converted to  uppercase","success");
};
const handleClearClick = () => {
  // console.log("uppercase was cllick" + text );
  let newText = "";
  
  setText(newText);
  props.showAlert(" Cleared !!!","success");
};
const handleLowClick = () => {
  // console.log("uppercase was cllick" + text );
  let newText = text.toLowerCase();
  props.showAlert("Converted to  Lowercase","success");

setText(newText);
};
const handleOnChange = (event) => {
// console.log("uppercase was cllick");
setText(event.target.value);

};
// state topic
const [text, setText] = useState("");
// setText("updated enter set text states features");
return (
<>
  <div className="container"  style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#cccccc':'white' ,color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="7"></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
      Convert to uppercase{" "}
    </button>
    <button className="btn btn-secondary mx-2 my-2" onClick={handleLowClick}>
      Convert to lowercase{" "}
    </button>
    <button className="btn btn-secondary mx-2 my-2" onClick={handleClearClick}>
      Clear{" "}
    </button>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>  
    <h2>your text summary</h2>
    <p>
      {text.split(" ").length} words and {text.length} charater
    </p>
    <p>{0.008 * text.split(" ").length} time isRequired to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the TextBox"} </p>
  </div>
</>
);
}
