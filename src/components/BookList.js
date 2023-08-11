import React from "react";
import Book from "./Book";
import { connect } from "react-redux";
import { getBooks } from "../actions";

const BookList = (props) => {
const { data } = props

  return (
    <div className="gif-card">
      {data.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
    return ({
        data: state.data
    })
}

export default connect(mapStateToProps, {getBooks})(BookList);