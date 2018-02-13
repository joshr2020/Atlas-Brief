import React from "react";

const Brief = props => (
  <div>
    <h3>{props.content.title}</h3>
    <p>{props.content.author}</p>
    <p>{props.content.content}</p>
  </div>
);

export default Brief;
