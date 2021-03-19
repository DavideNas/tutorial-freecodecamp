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

const ships = ["Nina", "Pinta", "Santa Maria"];
// .map method get every element (ships) to single one (ship) and save to new object (newShips)
const newShips = ships.map((ship) => {
  // to render every element in <h1>
  return <h1>{ship}</h1>;
  //console.log(name);
});
console.log(newShips);
function BookList() {
  // printing newShips show me each 'ship' into <h1> tag
  return <section className="booklist">{newShips}</section>;
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
