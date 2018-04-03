import React from "react";

import "../scss/main.scss";

class StatsAccordion extends React.Component {
  render() {
    const c = JSON.parse(this.props.content);
    return (
      <section className="accordions">
        <article className="accordion is-active">
          <div className="accordion-header toggle">
            <p>Demographics</p>
          </div>
          <div className="accordion-body">
            <div className="accordion-content">
              <ul className="alternating-colors">
                <li>
                  Population: {c["People and Society"].Population.text}
                </li>
                <li>
                  Ethnic Groups: {c["People and Society"]["Ethnic groups"].text}
                </li>
                <li>
                  Languages: {c["People and Society"].Languages.text}
                </li>
                <li>
                  Religion: {c["People and Society"].Religions.text}
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="accordion">
          <div className="accordion-header">
            <p>Politics</p>
            <button className="toggle" aria-label="toggle" />
          </div>
          <div className="accordion-body">
            <div className="accordion-content">
              <ul className="alternating-colors">
                <li>
                  Form of Government: {c["Government"]["Government type"].text}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default StatsAccordion;
