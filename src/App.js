import React, { Component } from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import { Switch, Route } from "react-router-dom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import SingleRoom from "./pages/SingleRoom";
import "./App.css";

class App extends Component {

  render() {
    return (

      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>

      </>

    );
  }
}

export default App;