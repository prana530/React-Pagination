import React from "react";
//racf for shortcut

//Destructuring the props parameter using {} simple
const PostsComponent = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading....</h1>;
  }

  //something as to be returned from return function always. empty will break word
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
           <span className="text-primary"> {post.id}. </span> {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostsComponent;
