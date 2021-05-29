import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chats from './Chats';


function App() {
  return (
    <div className="App">
      <h1>Tanjin, How are you? </h1>
      <Router>
        <div>

          <Switch>
            <Route path="/chats">
              <Chats />
            </Route>
            <Route path="/">
              <WebcamCapture />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
