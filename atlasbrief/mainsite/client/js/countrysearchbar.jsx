import React from "react";

import SuggestionDropdown from "./suggestiondropdown.jsx";

import "../scss/main.scss";

const goToCountryPage = (e, name) => {
  e.preventDefault();

  document.dispatchEvent(
    new CustomEvent(`countryClicked`, {
      detail: { name }
    })
  );
};

class CountrySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => goToCountryPage(e, this.state.value)}>
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
            <span
              onClick={e => goToCountryPage(e, this.state.value)}
              className="icon is-medium"
            >
              <i className="fas fa-search" />{" "}
            </span>
          </span>
        </form>

        <SuggestionDropdown
          searchbarValue={this.state.value}
          goToCountryPageFunc={goToCountryPage}
        />
      </div>
    );
  }
}
export default CountrySearchBar;
