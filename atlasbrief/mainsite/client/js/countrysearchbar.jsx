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
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  // Necessary so that dropdown will toggle when any part of the page is
  // clicked except CountrySearchBar and its children.
  componentDidMount() {
    document.addEventListener(`click`, this.hideDropdown);
  }

  componentWillUnmount() {
    document.removeEventListener(`click`, this.hideDropdown);
  }

  handleChange(e) {
    const newState = this.state;
    newState.value = e.target.value;
    this.setState(newState);
  }

  showDropdown(e) {
    const newState = this.state;
    newState.focused = true;
    this.setState(newState);
  }

  hideDropdown(e) {
    /*let clickedOnSelfOrChildren = true;

    if (!clickedOnSelfOrChildren) {
      const newState = this.state;
      newState.focused = true;
      this.setState(newState);
    }*/
  }

  render() {
    let maybeDropdrown = null;
    if (this.state.focused) {
      maybeDropdrown = (
        <SuggestionDropdown
          ref={el => {
            this.dropdown = el;
          }}
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
            onFocus={this.showDropdown}
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
