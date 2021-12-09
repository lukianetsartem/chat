import React from 'react';
import './Register.scss';
import { Button } from '../Button/Button';

export const Register = () => {
  return (
    <div className="register">
      <div className="register--body">
        <input placeholder="Enter your name" />
        <Button onClick={() => {}} label="Start" color="dark" />
      </div>
    </div>
  );
};
