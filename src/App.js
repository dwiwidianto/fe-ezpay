import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Signup, History, PLN, PDAM, BPJS } from "./pages";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="bg">
          <Route path="/" component={PLN} exact />
          <Route path="/history" component={History} />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Signup} exact />
          <Route path="/products/pln" component={PLN} exact />
          <Route path="/products/pdam" component={PDAM} exact />
          <Route path="/products/bpjs" component={BPJS} exact />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
