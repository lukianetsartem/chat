import { Messages } from './Messages';
import { WritingArea } from './WritingArea';
import { useDispatch, useSelector } from 'react-redux';
import './Chat.scss';
import {updateChatAC, writeMessageAC} from '../../actions/actions';

export const Chat = () => {
  const user = useSelector(state => state?.user);
  const dispatch = useDispatch();

  // Checking if localstorage is changing from other documents
  window.onstorage = () => {
    dispatch(updateChatAC())
  };

  const writeMessage = text => {
    dispatch(writeMessageAC(text, user));
  };

  return (
    <div className="chat">
      <Messages userId={user.userId} />
      <WritingArea writeMessage={writeMessage} />
    </div>
  );
};
