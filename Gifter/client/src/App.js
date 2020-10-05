import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

//display our list of post
function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;