// write the book component code here
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-60 m-4">
      <h2 className="text-lg font-bold mb-2">{book.title}</h2>
      <p className="text-gray-600">Author: {book.author}</p>
      <p className="text-gray-600">Year: {book.year}</p>
    </div>
  );
};

export default BookCard;