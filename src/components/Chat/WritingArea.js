import React, {useState} from 'react';
import { Button } from '../Button/Button';

export const WritingArea = props => {
  const [value, setValue] = useState(null)

    return (
    <section className="chat--writing-area">
      <input onChange={e => setValue(e.target.value)}/>
      <Button onClick={() => props.writeMessage(value)} label="Start" color="primary" />
    </section>
  );
};
