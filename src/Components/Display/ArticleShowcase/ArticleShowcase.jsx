import React from "react";
import "./ArticleShowcase.css";

function ArticleSummary({
  src,
  articleTitle,
  articleAuthor,
  articleSite,
  articleURL,
  video,
  children,
}) {
  const handleOnClick = () => {
    window.open(articleURL, "_blank");
  };

  return (
    <button className="article-showcase" onClick={handleOnClick}>
      <img src={src} alt={`${articleTitle} Thumbnail`} />
      <div className="article-summary">
        <div className="title">{articleTitle}</div>
        <div className="article-info">
          <span className="author">{articleAuthor}</span>
          <span className="site">{articleSite}</span>
        </div>
        <div className="summary">{children}</div>
        {video ? (
          <span className="read-more">Click to view the video...</span>
        ) : (
          <span className="read-more">Click to read the full article...</span>
        )}
      </div>
    </button>
  );
}

export default ArticleSummary;
