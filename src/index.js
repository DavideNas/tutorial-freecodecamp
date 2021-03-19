import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Event Basic

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
  // attribute, eventHandler
  // onClick, onMouseOver
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // simple onclick event pt 1
  // const clickHandler = () => {
  //  alert("You like it");
  // };

  // onclick event with params pt 1
  const clickHandler = (myTitle) => {
    alert("You like: \n" + myTitle);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(author)}>{title}</h1>
      <h4>{author}</h4>
      <button
        type="button"
        // simple onclick event pt 2
        // onClick={clickHandler}

        // onclick event with params pt 2
        onClick={() => {
          clickHandler(title);
        }}
      >
        Like
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
