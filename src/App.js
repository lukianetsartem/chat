import './App.scss';
import { Header } from './components/Header/Header';
import { Chat } from './components/Chat/Chat';
import { Register } from './components/Register/Register';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { checkAuth } from './managers/CheckAuthManager';
import { useEffect } from 'react';

function App() {
  const isAuth = false;
  useEffect(() => {
      checkAuth(isAuth);
  });

  return (
    <section className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/register" children={<Register />} />
          <Route path="/chat" children={<Chat />} />
          <Route path="">
            <Redirect to="/chat" />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
