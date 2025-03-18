import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-60 m-4">
      <img src={book.image} alt={book.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-bold mb-2">{book.name}</h2>
      <p className="text-gray-600">Author: {book.author}</p>
      <p className="text-gray-600">Genre: {book.genre}</p>
    </div>
  );
};

export default BookCard;
