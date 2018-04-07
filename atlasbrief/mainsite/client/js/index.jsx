import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MapPage from "./mappage.jsx";
import CountryPage from "./countrypage.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = { redirectTo: null };
  }

  componentDidMount() {
    this.countryClicked = this.countryClicked.bind(this);
    document.addEventListener(`countryClicked`, this.countryClicked);
  }

  componentWillUnmount() {
    document.removeEventListener(`countryClicked`, this.countryClicked);
  }

  countryClicked(e) {
    this.setState({ redirectTo: e.detail.name });
  }

  render() {
    if (this.state.redirectTo) {
      this.setState({ redirectTo: null });
      return <Redirect push to={`/country/${this.state.redirectTo}`} />;
    }

    return (
      <Switch>
        <Route exact path="/" component={MapPage} />
        <Route path="/country/:name" component={CountryPage} />
      </Switch>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById(`root`)
);
