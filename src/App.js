import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';
import MovieList from './movielist';
import Cast from './cast';


//The hirarchy: App => Movie List => Movie => Review

class App extends Component {
  render() {
    return (

      <div>
        <MovieList />

      </div>

    );
  }
}

export default App;
