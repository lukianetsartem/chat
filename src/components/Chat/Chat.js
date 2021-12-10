import { Messages } from './Messages';
import { WritingArea } from './WritingArea';
import { useDispatch, useSelector } from 'react-redux';
import './Chat.scss';
import {writeMessageAC} from "../../actions/actions";

export const Chat = () => {
  const user = useSelector(state => state.user);
  const messages = useSelector(state => state.chat);
  const dispatch = useDispatch();

  const writeMessage = text => {
    dispatch(writeMessageAC(text, user))
  };

  return (
    <div className="chat">
      <Messages messages={messages} />
      <WritingArea writeMessage={writeMessage} />
    </div>
  );
};
