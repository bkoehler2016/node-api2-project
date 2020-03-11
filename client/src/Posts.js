import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/posts")
      .then(res => res.json())
      .then(posts =>
        this.setState({ posts }, () => console.log("Posts fetched...", posts))
      );
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.posts.map(post => (
            <Col xs="6" key={post.id}>
              <Row>Title: {post.title}</Row>
              <Row>Comment: {post.contents}</Row>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Posts;
