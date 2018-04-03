import React from "react";

import "../scss/main.scss";

class StatsAccordion extends React.Component {
  render() {
    const c = JSON.parse(this.props.content);
    return (
      <section className="accordions">
        <article className="accordion is-active">
          <div className="accordion-header toggle">
            <p>Population</p>
          </div>
          <div className="accordion-body">
            <div className="accordion-content">
              <ul>
                <li>Population: {c["People and Society"].Population.text}</li>
                <li>
                  Ethnic Groups: {c["People and Society"]["Ethnic groups"].text}
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="accordion">
          <div className="accordion-header">
            <p>Hello World</p>
            <button className="toggle" aria-label="toggle" />
          </div>
          <div className="accordion-body">
            <div className="accordion-content">content</div>
          </div>
        </article>
      </section>
    );
  }
}

export default StatsAccordion;
