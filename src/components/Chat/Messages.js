import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Message } from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessagesPartAC } from '../../actions/actions';

export const Messages = ({ userId }) => {
  const messages = useSelector(state => state?.chat);
  const dispatch = useDispatch();
  const ref = useRef();
  const step = 10;

  const [prevLength, setPrevLength] = useState(0);
  const scrollHandler = useCallback(
    e => {
      const element = e.target;
      if (element.scrollTop < 100) {
        // Remember scroll position
        const distance = element.scrollHeight - element.scrollTop - element.offsetHeight;

        dispatch(loadMessagesPartAC(messages.length + step));

        // Remove listener if all messages loaded
        if (prevLength === messages.length) {
          ref.current?.removeEventListener('scroll', scrollHandler);
        }

        setPrevLength(messages.length);
        // Move scroll to previous position
        ref.current?.scrollTo(0, element.scrollHeight - distance - element.offsetHeight);
      }
    },
    [messages.length, prevLength, dispatch],
  );

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
    dispatch(loadMessagesPartAC(messages.length + 1));
  };

  return (
    <section ref={ref} className="chat--messages">
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
    </section>
  );
};
