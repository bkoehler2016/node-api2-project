import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

export default function PostsForm() {
  const [newPost, SetNewPost] = useState({});

  const handleChange = event => {
    SetNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    axios.post("https://localhost:9000/", newPost).then(res => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="title"
        id="title"
        value={newPost.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="contents"
        id="contents"
        value={newPost.contents}
        placeholder="Contents"
        onChange={handleChange}
      />
      <Button color="primary" type="submit"></Button>
    </form>
  );
}
