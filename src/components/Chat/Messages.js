import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import { messagesManager } from '../../managers/messagesManager';
import { useSelector } from 'react-redux';

export const Messages = props => {
  const { userId } = props;
  const messages = useSelector(state => state?.chat);
  const ref = useRef();

  useEffect(() => {
    messagesManager();
    ref.current?.scrollTo(0, ref.current?.scrollHeight);
  }, [messages]);

  return (
    <section ref={ref} className="chat--messages">
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
