import React from 'react';

export const Message = props => {
  const { id, letter, text, ownerId, userId } = props;

  return (
    <div
      className={`chat--message ${
        ownerId === userId && 'chat--message__owned'
      }`}
      key={id}
    >
      <div className="chat--message__avatar">{letter}</div>
      <p className="chat--message__text">{text}</p>
    </div>
  );
};
