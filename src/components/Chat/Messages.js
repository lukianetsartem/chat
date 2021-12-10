import React from 'react';
import { Message } from './Message';

export const Messages = props => {
  const { messages, userId } = props;

  return (
    <section className="chat--messages">
      {messages.map(m => (
        <Message
          key={m.id}
          userId={userId}
          letter={m.letter}
          text={m.text}
          ownerId={m.ownerId}
        />
      ))}
      {messages.length === 0 && (
        <div className="chat--empty-label">
          This chat is empty, be first here!
        </div>
      )}
    </section>
  );
};
