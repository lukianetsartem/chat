import React, { useState } from 'react';
import './Register.scss';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { registerAC } from '../../actions/actions';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Chat } from '../Chat/Chat';

export const Register = ({ user }) => {
  const [username, setUsername] = useState(null);
  const dispatch = useDispatch();

  if (user) {
    return (
      <Router>
        <Switch>
          <Route path="/chat" children={<Chat />} />
          <Redirect to="/chat" />
        </Switch>
      </Router>
    );
  }

  return (
    <div className="register">
      <div className="register--body">
        <input
          placeholder="Enter your name"
          onChange={e => setUsername(e.target.value)}
        />
        <Button
          onClick={() => username ? dispatch(registerAC(username)) : alert('Write your name before start')}
          label="Start"
          color="dark"
        />
      </div>
    </div>
  );
};
