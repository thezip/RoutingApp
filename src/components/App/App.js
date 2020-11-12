import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Other from '../Other/Other';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home page</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contacts' component={Contacts} />
          <Route component={Other} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
