import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:9000/api/posts").then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .delete(`http://localhost:9000/api/posts/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <Container>
        <Row>
          {this.state.posts.map(post => (
            <Col xs="6" key={post.id}>
              <Row>ID: {post.id}</Row>
              <Row>Title: {post.title}</Row>
              <Row>Comment: {post.contents}</Row>
            </Col>
          ))}
        </Row>
        <form onSubmit={this.handleSubmit}>
          <label>
            Post ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>

          <Button color="danger" type="submit">
            {" "}
            Delete
          </Button>
        </form>
      </Container>
    );
  }
}

export default Posts;
