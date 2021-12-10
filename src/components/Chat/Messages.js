import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { createStorageAC } from '../../actions/actions';

export const Messages = props => {
  const { userId } = props;
  const messages = useSelector(state => state?.chat);
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    ref.current?.scrollTo(0, ref.current?.scrollHeight);
  }, [messages]);

  const getMessagesContent = () => {
    if (messages) {
      return (
        <>
          {messages.map((m, i) => (
            <Message
              key={i}
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
        </>
      );
    }
    dispatch(createStorageAC());
  };

  return (
    <section ref={ref} className="chat--messages">
      {getMessagesContent()}
    </section>
  );
};
