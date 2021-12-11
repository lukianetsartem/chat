import React, { useCallback, useEffect, useRef } from 'react';
import { Message } from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { createStorageAC, updateChatAC } from '../../actions/actions';
import { getDataPart } from '../../api/api';

export const Messages = props => {
  const { userId } = props;
  const messages = useSelector(state => state?.chat);
  const dispatch = useDispatch();
  const ref = useRef();
  const step = 10;

  const getNewMessages = useCallback(amount => {
    const newMessages = getDataPart(-amount);
    dispatch(updateChatAC(newMessages));
  }, [dispatch]);

  const scrollHandler = useCallback(e => {
    const element = e.target;
    if (element.scrollTop < 100) {
      // Remember scroll position
      const distance = element.scrollHeight - element.scrollTop - element.offsetHeight;

      getNewMessages(messages.length + step);

      // Move scroll to previous position
      ref.current?.scrollTo(0, element.scrollHeight - distance - element.offsetHeight);
    }
  }, [getNewMessages, messages.length]);

  useEffect(() => {
    const scrollRef = ref.current;

    scrollRef?.addEventListener('scroll', scrollHandler);
    return function () {
      scrollRef?.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  useEffect(() => {
    ref.current?.scrollTo(0, ref.current?.scrollHeight);
  }, []);

  // Checking if localstorage is changing from other documents
  window.onstorage = () => {
    getNewMessages(messages.length + 1);
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
