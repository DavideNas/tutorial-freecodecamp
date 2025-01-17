import React from "react";

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
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
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

export default Book;
