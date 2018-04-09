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
    this.state = { value: "", focused: false };

    this.handleChange = this.handleChange.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  handleChange(e) {
    const newState = this.state;
    newState.value = e.target.value;
    this.setState(newState);
  }

  toggleDropdown(e) {
    const newState = this.state;
    newState.focused = !this.state.focused;
    this.setState(newState);
  }

  render() {
    let maybeDropdrown = null;
    if (this.state.focused) {
      maybeDropdrown = (
        <SuggestionDropdown
          searchbarValue={this.state.value}
          goToCountryPageFunc={goToCountryPage}
        />
      );
    }

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
            onFocus={this.toggleDropdown}
            onBlur={this.toggleDropdown}
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

        {maybeDropdrown}
      </div>
    );
  }
}
export default CountrySearchBar;
