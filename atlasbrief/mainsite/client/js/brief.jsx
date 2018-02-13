import React from "react";

const timeStampToReadable = timestamp => {
  const d = new Date(timestamp);
  return `${d.toLocaleString()}`;
};

const Brief = props => (
  <article>
    <h3>{props.content.title}</h3>
    <p>{props.content.author}</p>
    <p>Updated {timeStampToReadable(props.content.timestamp)}</p>
    <p>{props.content.content}</p>
  </article>
);

export default Brief;
