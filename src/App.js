import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
// import { Navbar, Footer } from "./components";
// coba

const bg = {
  "background-color": "black",
  display: "flex",
  "min-height": "100vh",
  color: "white",
  "flex-direction": "column",
  "align-items": "center",
  "justify-content": "center",
};

const App = () => {
  return (
    <div style={bg}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Signup} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
