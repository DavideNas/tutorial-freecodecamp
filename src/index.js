import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// props form structured objects

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71QuWEIWHlL._AC_UL200_SR200,200_.jpg",
  title: "Dog Man: Mothering Heights: From the Creator of Captain Underpants",
  author: "Dav Pilkey",
};

const secondBook = {
  author: "Amelia Hepworth",
  title: "I Love You to the Moon and Back",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// book component are display in the same way
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
