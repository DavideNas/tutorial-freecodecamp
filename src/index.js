import React from "react";
import ReactDom from "react-dom";

// Nested Components, React Tool

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// first component
const Person = () => <h2>David</h2>;

// second component
const Message = () => {
  return <p>It's a good day to learn React</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
