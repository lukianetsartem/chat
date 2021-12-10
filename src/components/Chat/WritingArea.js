import React, { useState } from 'react';
import { Button } from '../Button/Button';

export const WritingArea = props => {
  const [value, setValue] = useState("");

  const sendMessage = () => {
      setValue("")
      props.writeMessage(value)
  }

  return (
    <section className="chat--writing-area">
      <input value={value} onChange={e => setValue(e.target.value)} />
      <Button
        onClick={sendMessage}
        label="Send"
        color="primary"
      />
    </section>
  );
};
