import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import React from 'react';
import Home from './components/home';
import Post from './components/post';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route name="post" path="/post/:postId" component={Post} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
