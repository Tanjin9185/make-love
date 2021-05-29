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
import ChatView from './ChatView';
import { selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Tanjin, How are you? </h1>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app_body">
          <Switch>
            <Route path="/chats/view">
              <ChatView />
            </Route>
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
        )}
        
      </Router>
    </div>
  );
}

export default App;
