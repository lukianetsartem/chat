import './App.scss';
import { Header } from './components/Header/Header';
import { Register } from './components/Register/Register';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initializeAppAC } from './actions/actions';

function App() {
  const user = useSelector(state => state?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAppAC());
  }, [dispatch]);

  return (
    <section className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/register" children={<Register user={user} />} />
          {!user && <Redirect to="/register" />}
          <Route path="">
            <Redirect to="/register" />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
