import React from "react";
import ReactDom from "react-dom";
import "./index.css";

import { books } from "./books";

// component to another file is import as Book
import Book from "./Book";

// import OneBook from './Book'
// is valid but must change also to JSX tag name
// as <OneBook />

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // this is read as before
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
