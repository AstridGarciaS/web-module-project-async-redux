import React from 'react';
import './App.css';
import BookForm from './components/BookForm' 

import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Best Book</h1>
        <BookForm />
      </header>
      
      <div>


      </div>
    </div>


  );
}


const mapStateToProps = () => {
  return{
     
  }
}
export default connect(mapStateToProps)(App);