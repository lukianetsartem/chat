import React from 'react';

export const Message = props => {
  const { id, letter, text, ownerId, userId } = props;

  return (
    <div
      className={ownerId === userId ? 'chat--message chat--message__owned' : 'chat--message'}
      key={id}
    >
      <div className="chat--message__avatar">{letter}</div>
      <p className="chat--message__text">{text}</p>
    </div>
  );
};
