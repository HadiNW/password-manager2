import React, { Component } from "react";
import Home from "./Containers/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Store/Store'

// components
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="border" style={{ height: "1000px" }}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
