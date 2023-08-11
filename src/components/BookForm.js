import React from "react";
import { connect } from "react-redux";
import { useState } from "react"


const BookForm = () => {
    return(
        <form>
            <input type="text" placeholder="Enter Book Name"/>
            <button>Search</button>
        </form>
    )
}


export default BookForm;