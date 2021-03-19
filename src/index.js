import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// props children

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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora
          illo ipsum explicabo nulla. Accusantium nemo nostrum eos temporibus
          nam.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;  // must to be Book = (props)
  // console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* with children parameter It's possible to read paragraph <p> */}
      {children}
      {/* can modify css 'align-items' if i want fitted cards */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
