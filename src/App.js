import React from 'react';
import './App.css';


import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import London from './components/london/london';
import Paris from './components/paris/paris';
import Rome from './components/rome/rome';



function App() {
  return (

    <Router>
      <div className='App'>
        <div>
          <nav>
            <ul>
              <Link to='/london'> <li>London</li></Link>
              <Link to='/paris'> <li>Paris</li></Link>
              <Link to='/rome'> <li>Rome</li></Link>
            </ul>
          </nav>

        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/london" />}
          />
          <Route path="/london" component={London} />
          <Route path='/paris' component={Paris} />
          <Route path='/rome' component={Rome} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
