import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Signup, Home} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact>{Home}</Route>
          <Route path="/login">{Login}</Route>
          <Route path="/register" >{Signup}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
