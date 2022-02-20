import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="whole">
            <div className="intro-text">
              <h1 className="title">Welcome to notes app</h1>
              <p className="subtitle">The best place to write all your notes</p>
            </div>
            <div className="buttoncontainer">
              <a href="/login">
                <Button size="lg" className="langingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="langingbutton"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
