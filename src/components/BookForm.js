import React from "react";
import { connect } from "react-redux";
import { getBooks } from "../actions";
import { useState } from "react";


const SearchForm = (props) => {
const { getBooks } = props
const [ searchTerm, setSearchTerm ] = useState('')

const handleSubmit = e => {
    e.preventDefault()
    getBooks(searchTerm)
}

const handleChange = e => {
    setSearchTerm(e.target.value)
}

  return (
      <form 
      onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Enter Book Information"value={searchTerm} onChange={handleChange}/>
        <button>Search</button>
      </form>
  );
};

export default connect(null, {getBooks})(SearchForm)