import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ChatView from './ChatView';
import { selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';

import Preview from './Preview';
import Chats from './Chats';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  return (
    <div className="app">
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

        <div className="app__body">

          <Switch>
            <Route path="/chats">
              <Chats />
            </Route>
            <Route path="/preview">
              <Preview />

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
