import React from "react";

const Article = ({ title, date, length, snippet }) => {
  const dateFormatted = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{dateFormatted}</span>
        <span>{`${length} min read`}</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
