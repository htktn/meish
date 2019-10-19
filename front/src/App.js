import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import Index from './containers/Index';
import New from './containers/New';
import Complete from './containers/Complete';
import Show from './containers/Show';
import Edit from './containers/Edit';

//TODO functional componentに置き換える
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Index} />
            <Route path="card/new" component={New} />
            <Route path="card/:id" component={Show} />
            <Route path="card/:id/edit" component={Edit} />
            <Route path="card/complete" component={Complete} />
          </Switch>
        </Router>
      </div>
    );
  }
}
