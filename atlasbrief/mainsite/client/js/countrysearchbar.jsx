import React from "react";

import SuggestionDropdown from "./suggestiondropdown.jsx";

import "../scss/main.scss";

class CountrySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.goToCountryPage = this.goToCountryPage.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  goToCountryPage(e) {
    e.preventDefault();

    document.dispatchEvent(
      new CustomEvent(`countryClicked`, {
        detail: { name: this.state.value }
      })
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.goToCountryPage}>
          <input
            type="search"
            id="country-search-bar"
            className="input is-rounded"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search for a country..."
            autoComplete="off"
          />
          <span className="container" style={{ marginLeft: "1vw" }}>
            <span onClick={this.goToCountryPage} className="icon is-medium">
              <i className="fas fa-search" />
            </span>
          </span>
        </form>

        <SuggestionDropdown searchbarValue={this.state.value} />
      </div>
    );
  }
}
export default CountrySearchBar;
