import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Join from "./Components/Join";
import Products from "./Components/Products";
import Water from "./Components/Water";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Site">
        <Navbar />
        <main className="Site-content">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/join" component={Join} />
            <Route path="/products" component={Products} />
            <Route path="/water" component={Water} />
            <Route path="/not-found" exact component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
