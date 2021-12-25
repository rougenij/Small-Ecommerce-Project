import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Pages/Homepage/HomePage";
import GameDisplayPage from "./components/Pages/Item/GameDisplayPage";
// import GameDetailsPage from "./components/Pages/Item/GameDetailsPage";
// import Cart from "./components/Pages/Cart/Cart";
// import NotFound from "./components/Pages/NotFound/NotFound";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/games" exact component={GameDisplayPage} />
            {/* <Route path="/games/:id" exact component={GameDetailsPage} /> */}
            {/* <Route path="/cart" exact component={Cart} /> */}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
