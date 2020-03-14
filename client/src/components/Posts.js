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

  render() {
    return (
      <Container>
        <Row>
          {this.state.posts.map(post => (
            <Col xs="6" key={post.id}>
              <Row>Title: {post.title}</Row>
              <Row>Comment: {post.contents}</Row>
              <Button color="danger">Delete</Button>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Posts;
