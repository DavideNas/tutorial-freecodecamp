import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// simple list

// delete fistBook and secondBook objects creating a list for both
const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71QuWEIWHlL._AC_UL200_SR200,200_.jpg",
    title: "Dog Man: Mothering Heights",
    author: "Dav Pilkey",
  },

  {
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //console.log(book);
        const { img, title, author } = book;
        return (
          // to print every value I map
          <div>
            <h3>{title}</h3>
            <h6>{author}</h6>
          </div>
        );
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
