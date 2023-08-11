import React, { useEffect } from "react";
import "./App.css";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { connect } from "react-redux";
import { getBooks } from "./actions";

function App(props) {
  const { loading, getBooks, error } = props

  useEffect(() => {
    getBooks("code")
  }, [])

  return (
    <div className="App">
      <h1>Welcome to the Books Loader</h1>

      <BookForm />
      {error && <h3>error: {error}</h3>}
      {loading ? <h3>We are loading</h3> : <BookList />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps, { getBooks })(App);