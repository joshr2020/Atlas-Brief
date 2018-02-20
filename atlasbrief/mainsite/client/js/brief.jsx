import React from "react";
import "../scss/main.scss";

const timeStampToReadable = timestamp => {
  const d = new Date(timestamp);
  return `${d.toLocaleString()}`;
};

const Brief = props => (
  <div class="box">
    <article class="media">
      <div>
        <h3>
          <strong>{props.content.title}</strong>
        </h3>
        <p>
          By {props.content.author} updated at  {timeStampToReadable(props.content.timestamp)}
        </p>
        <p>
          {props.content.content}
        </p>
      </div>
    </article>
  </div>
);

export default Brief;
