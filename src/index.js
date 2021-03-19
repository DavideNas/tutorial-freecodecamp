import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Sample of Javascript in JSX using {} parenthesis

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

// value out of component
const author = "Amelia Hepworth";
const Book = () => {
  // value inside component (it change visibility)
  const title = "I Love You to the Moon and Back";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      {/* Possible add javascript into parenthesis */}
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p> */}
      {6 + 6}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
