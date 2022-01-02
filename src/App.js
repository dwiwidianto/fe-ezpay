import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Signup, Home } from "./pages";

const bg = {
  "background-color": "black",
  "display": "flex",
  "min-height": "100vh",
  "color": "white",
  "flex-direction": "column",
  "align-items": "center",
  "justify-content": "center",
}

const App = () => {
  return (
    <div style={bg}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>{Home}</Route>
          <Route path="/login">{Login}</Route>
          <Route path="/register">{Signup}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
