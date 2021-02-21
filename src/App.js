import React, { Component } from 'react';
import Counter from './containers/Counter/Counter';
import PostView from './components/posts/PostView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <PostView/>
      </div>
    );
  }
}

export default App;
