import React from "react";
import ReactDom from "react-dom";

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
    <React.Fragment>
      <div class="">
        <h1>hello world</h1>
      </div>
    </React.Fragment>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
