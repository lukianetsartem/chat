import './App.scss';
import { Header } from './components/Header/Header';
import { Chat } from './components/Chat/Chat';
import { Register } from './components/Register/Register';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const isAuth = useSelector(state => state.user.username);

  useEffect(() => {
    if (isAuth) window.location.pathname = '/chat';
  }, [isAuth]);

  return (
    <section className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/register" children={<Register />} />
          <Route path="/chat" children={<Chat />} />
          <Route path="">
            <Redirect to="/register" />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
