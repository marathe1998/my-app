import React from "react";

function TextInput(props) {
  return (
    <div>
      <input type="text" 
      placeholder={props.placeholder}
      value={props.value}
      onChange = {props.handleOnTextChange}
      onFocus={props.handleOnFocusText}
       />
    </div>
  );
}

export default TextInput;

