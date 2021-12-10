import React, { useState } from 'react';
import { Button } from '../Button/Button';

export const WritingArea = props => {
  const [value, setValue] = useState('');

  const sendMessage = () => {
    setValue('');
    if (value.length > 0) {
      props.writeMessage(value);
    } else alert('Field is empty, write something before send');
  };

  return (
    <section className="chat--writing-area">
      <input value={value} onChange={e => setValue(e.target.value)} />
      <Button onClick={sendMessage} label="Send" color="primary" />
    </section>
  );
};
