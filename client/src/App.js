import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostsForm from "./components/PostsForm";

function App() {
  return (
    <div className="App">
      <Posts />
      <PostsForm />
    </div>
  );
}

export default App;
