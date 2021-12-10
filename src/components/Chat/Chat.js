import { Messages } from './Messages';
import { WritingArea } from './WritingArea';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './Chat.scss';
import {writeMessageAC} from "../../actions/actions";

export const Chat = () => {
  const user = useSelector(state => state.user);
  const messages = useSelector(state => state.chat);
  const dispatch = useDispatch();

  const writeMessage = text => {
    const newMessage = {
      id: uuidv4(),
      text,
      letter: user[0],
    };

    dispatch(writeMessageAC(newMessage))
  };

  return (
    <div className="chat">
      <Messages messages={messages} />
      <WritingArea writeMessage={writeMessage} />
    </div>
  );
};
