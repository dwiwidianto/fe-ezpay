import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Signup, Home } from "./pages";

const bg = {
  "background-color": "black",
  "display": "flex",
  "min-height": "100vh",
  "color": "white"
}

const App = () => {
  return (
    <div style={bg}>
      <BrowserRouter>
        <Switch>
          <Route path="/">{Home}</Route>
          <Route path="/login">{Login}</Route>
          <Route path="/register">{Signup}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
