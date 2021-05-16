import React, { Component } from "react";
import PostView from "./components/posts/PostView";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SinglePostView from "./components/posts/SinglePostView";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <PostView />
            </Route>
            <Route path="/postview">
              <PostView />
            </Route>
            <Route
              path="/postview/:id"
              render={(props) => (
                <SinglePostView post={props.match.params.id} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
