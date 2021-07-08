import React from "react";

const Posts = ({ post }) => {
  return (
    <>
      <div className="card">
        <div className="presentation">
          <h3>{post.title}</h3>
          <strong>{post.id}</strong>
        </div>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default Posts;
