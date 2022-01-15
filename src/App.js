import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
        <div className="bg">
          <Route className="display-bg" path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Signup} exact />
        </div>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
