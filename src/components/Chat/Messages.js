import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import { useDispatch, useSelector } from 'react-redux';
import {
  createStorageAC,
  getChatPartAC,
  updateChatAC,
} from '../../actions/actions';

export const Messages = props => {
  const { userId } = props;
  const messages = useSelector(state => state?.chat);
  const dispatch = useDispatch();
  const ref = useRef();
  const step = 10;

  const scrollHandler = e => {
    if (e.target.scrollTop < 100) {
      const amount = messages.length + step;
      dispatch(getChatPartAC(amount));
    }
  };

  useEffect(() => {
    ref.current?.addEventListener('scroll', scrollHandler);
    return function () {
      ref.current?.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  useEffect(() => {
    ref.current?.scrollTo(0, ref.current?.scrollHeight);
  }, []);

  // Checking if localstorage is changing from other documents
  window.onstorage = () => {
    dispatch(updateChatAC(messages.length + 1));
  };

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
