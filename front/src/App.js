import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lp from './containers/Lp';
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
            <Route exact path="/" component={Lp} />
            <Route exact path="/cards" component={Index} />
            <Route path="/cards/new" component={New} />
            <Route path="/cards/:id" component={Show} />
            <Route path="/cards/:id/edit" component={Edit} />
            <Route path="/cards/complete" component={Complete} />
          </Switch>
        </Router>
      </div>
    );
  }
}
