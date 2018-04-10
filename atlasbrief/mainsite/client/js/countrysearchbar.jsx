import React from "react";

import { SuggestionDropdown, getMatchingNames } from "./suggestiondropdown.jsx";

import "../scss/main.scss";

class CountrySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ``, matching: [] };
    this.handleChange = this.handleChange.bind(this);
    this.goToCountryPage = this.goToCountryPage.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    getMatchingNames(value).then(matching => {
      this.setState({ value, matching });
    });
  }

  goToCountryPage(e) {
    e.preventDefault();

    // If matching names exist, select the first match, otherwise, just go to
    // the country the user typed in.
    const name =
      this.state.matching && this.state.matching[0]
        ? this.state.matching[0]
        : this.state.value;

    document.dispatchEvent(
      new CustomEvent(`countryClicked`, {
        detail: { name }
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
            onFocus={this.showDropdown}
          />
          <span className="container" style={{ marginLeft: "1vw" }}>
            <span onClick={this.goToCountryPage} className="icon is-medium">
              <i className="fas fa-search" />{" "}
            </span>
          </span>
        </form>

        <SuggestionDropdown
          searchbarValue={this.state.value}
          matchingNames={this.state.matching}
          goToCountryPageFunc={this.goToCountryPage}
        />
      </div>
    );
  }
}
export default CountrySearchBar;
