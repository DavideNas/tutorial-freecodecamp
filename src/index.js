import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Iteration of Books list

// delete fistBook and secondBook objects creating a list for both
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71QuWEIWHlL._AC_UL200_SR200,200_.jpg",
    title: "Dog Man: Mothering Heights",
    author: "Dav Pilkey",
  },
  {
    id: 2,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    author: "Alyssa Satin Capucilli",
    title: "Biscuit's Pet & Play Easter",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51gIBBYlqNL._AC_UL200_SR200,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} onebook={book} />;
        /* alternative for ID is:
        books.map((book, index) =>
        key={index}
        but index change as array change */

        /* alternative 1 to pass PARAMS is:
        PARAMS pt 1
        key={book.id} {...book} */
      })}
    </section>
  );
}

const Book = (props) => {
  /*
  alternative 1 PARAMS pt 2
  const { img, title, author } = props; 
  */

  /*
  alternative 2 PARAMS pt 2
  const const Book = ({ img, title, author }) => {
  */
  const { img, title, author } = props.onebook;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
