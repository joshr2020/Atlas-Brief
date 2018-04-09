import React from "react";

import "../scss/main.scss";

class SingleAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isActive: props.defaultVisible};
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(e) {
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    const visibilitySelector = this.state.isActive ? "is-active" : "";
    return (
      <article className={"accordion "+visibilitySelector}>
        <div className="accordion-header toggle">
          <p>{this.props.title}</p>
          <button onClick={this.toggleAccordion} className="toggle" aria-label="toggle" />
        </div>
        <div className="accordion-body">
          <div className="accordion-content">
            <ul className="alternating-colors">
              {this.props.facts.map((fact, i) => {
                const text = fact.text.split(`++`).map((t, j) =>
                  (<div key={j}>{t}</div>)
                );
                return (<li key={i}>{fact.title}: {text}</li>)
              })}
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

const StatsAccordion = props => {
  const c = JSON.parse(props.content);
  return (
    <section className="accordions">
      <SingleAccordion defaultVisible title="Demographics" facts={[
          {title: "Population", text: c["People and Society"].Population.text},
          {title: "Ethnic Groups", text: c["People and Society"]["Ethnic groups"].text},
          {title: "Languages", text: c["People and Society"]["Ethnic groups"].text},
          {title: "Religion", text: c["People and Society"].Religions.text},
        ]} />
      <SingleAccordion title="Politics" facts={[
          {title: "Form of Government", text: c["Government"]["Government type"].text},
          {title: "Head of Government", text: c["Government"]["Executive branch"]["head of government"].text},
          {title: "Head of state", text: c["Government"]["Executive branch"]["chief of state"].text},
          {title: "Capital", text: c["Government"]["Capital"].name.text},
          {title: "Main Parties", text: c["Government"]["Political parties and leaders"].text},
          {title: "Military Expenditure", text: c["Military and Security"]["Military expenditures"].text},
      ]} />
    <SingleAccordion title="Economics" facts={[
          {title: "Real Growth Rate Last Year", text: c["Economy"]["GDP - real growth rate"].text},
          {title: "GDP per capita (PPP)", text: c["Economy"]["GDP - per capita (PPP)"].text},
          {title: "GINI coefficient", text: c["Economy"]["Distribution of family income - Gini index"].text},
          {title: "Unemployment rate", text: c["Economy"]["Unemployment rate"].text},
          {title: "Population in Poverty", text: c["Economy"]["Population below poverty line"].text},
    ]} />
    <SingleAccordion title="Trade" facts={[
          {title: "Export partners, percentage", text: c["Economy"]["Exports - partners"].text},
          {title: "Import partners, percentage", text: c["Economy"]["Imports - partners"].text},
    ]} />
    </section>
  );
};

export default StatsAccordion;
