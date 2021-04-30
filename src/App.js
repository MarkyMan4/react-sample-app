import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import React from 'react';
import Home from './pages/home';
import Post from './pages/post';
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
