import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Cardapio from './Cardapio';
import Reservas from './Reservas';
import Cliente from './Cliente';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Cliente">
          <Cliente/>
        </Route>
        <Route path="/Reservas">
          <Reservas />
        </Route>
        <Route path="/Cardapio">
          <Cardapio />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
