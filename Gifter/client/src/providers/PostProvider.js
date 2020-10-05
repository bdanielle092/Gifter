import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  // this will store the post which is stored in state
  const [posts, setPosts] = useState([]);
// created this function. This will go to the api that we created and get our post
  const getAllPosts = () => {
    return fetch("/api/post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (post) => {
    return fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };
// will make the post available to the rest of the app
  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost }}>
      {props.children}
    </PostContext.Provider>
  );
};
