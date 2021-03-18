import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// CSS Basics (index.css)

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// Component for book
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

// Compoonent for image
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);
// component for the title
const Title = () => <h1>I Love You to the Moon and Back</h1>;
// component for the author
// NB.. Css inside JSX tag are stronger than specific Css file
const Author = () => (
  <h4
    style={{
      color: "#617d98",
      fontSize: "0.75rem",
      margin: "0.25rem",
    }}
  >
    Amelia Hepworth
  </h4>
);

ReactDom.render(<BookList />, document.getElementById("root"));
