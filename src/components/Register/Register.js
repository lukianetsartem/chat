import React, {useState} from 'react';
import './Register.scss';
import { Button } from '../Button/Button';
import {useDispatch} from "react-redux";
import {registerAC} from "../../actions/actions";

export const Register = () => {
    const [username, setUsername] = useState(null)
    const dispatch = useDispatch()

    return (
    <div className="register">
      <div className="register--body">
        <input placeholder="Enter your name" onChange={e => setUsername(e.target.value)}/>
        <Button onClick={() => dispatch(registerAC(username))} label="Start" color="dark" />
      </div>
    </div>
  );
};
