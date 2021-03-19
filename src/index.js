import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// props

const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book job="writer" />
      <Book title="random title" number={22} />
    </section>
  );
}

// value out of component
const Book = (props) => {
  console.log(props);
  // value inside component (it change visibility)
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/*props are printed only when are passed to component */}
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
