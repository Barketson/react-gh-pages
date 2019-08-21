import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Search from "./routers/search.js";
import Favorite from "./routers/favorite.js";
import CityCard from "./routers/cityCard.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header>
            <nav>
              <div className="nav">
                <Link to="/">Search</Link>
                <Link to="/favorite">Favorite</Link>
              </div>
            </nav>
          </header>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/citycard/:id" component={CityCard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
