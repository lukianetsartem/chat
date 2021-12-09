import React from 'react';
import './Button.scss';

export const Button = props => {
  const { onClick, label, color } = props;

  return <button className={'button__' + color} onClick={onClick}>{label}</button>;
};
