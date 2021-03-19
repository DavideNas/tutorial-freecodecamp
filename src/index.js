import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// props destructured

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71QuWEIWHlL._AC_UL200_SR200,200_.jpg",
  title: "Dog Man: Mothering Heights",
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

// destructuring props , is auto-spread through variables
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;  // must to be Book = (props)
  // prev 2 lines make the same operation
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
