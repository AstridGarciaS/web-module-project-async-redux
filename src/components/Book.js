import React, { useState } from "react";

const Book = (props) => {
  const { book } = props;

  if (!book) {
    return null; 
  }
  const [showDescription, setShowDescription] = useState(false);

  const {
    title,
    authors,
    description,
    imageLinks,
    pageCount,
    categories,
    language,
    infoLink,
  } = book.volumeInfo;

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Authors: {Array.isArray(authors) ? authors : authors}</p>
      {imageLinks && imageLinks.thumbnail && (
        <img src={imageLinks.thumbnail} alt={title} />
      )}
        <p>
          <button
            className="toggle-description"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Hide Description" : "Show Description"}
          </button>
        </p>
        {showDescription && <p className="card-description">{description}</p>}
        <p className="card-details">
          Page Count: {pageCount} | Categories: {categories} | Language: {language}
        </p>
      <p>Categories: {categories}</p>
      <a href={infoLink} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
};

export default Book;
