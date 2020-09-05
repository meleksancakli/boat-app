import React, { Component } from 'react';
import Control from '../src/components/Control';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard'
import Welcome from './components/Welcome'
import { Container } from 'reactstrap'
import { Provider } from 'react-redux';
import store from '../src/store';
import { loadUser } from '../src/components/redux/actions/authActions'
import BoatComponent from './components/boats/BoatComponent'
import CustomerComponent from './components/users/customers/CustomerComponent'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Container>
        <Control/>
        <div className="App">
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/boats" component={BoatComponent} />
          <Route path="/customers" component={CustomerComponent} />
        </div>
        </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
