import React from "react";
import { Alert, Card } from "react-bootstrap";

//import online images
let images = [
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2Fdot-small-logo.png?alt=media&token=d90c0c0e-fd1f-4fe3-82ce-4b2e76ca5cee", //small dot logo
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2Fdot-homepage-image.jpg?alt=media&token=845e83c7-8364-49c3-8be8-6bcd9bd1cb4c", //bg image
];

function HomePage() {
  return (
    <div className="homepageDiv">
      <div className="d-grid gap-2">
        <Alert>
          <img className="dotAnimation" src={images[0]} alt="dot-small-logo" />
          <center>
            <h1>WELCOME TO THE DOT DATING APP!</h1>
          </center>
        </Alert>
        <h2>
          <center>
            <p>
              Sign up now and meet thousands of other people just like you that
              are looking for their perfect match!
            </p>
          </center>
        </h2>
      </div>

      <center>
        <Alert>
          <Card style={{ width: "800px" }}>
            <Card.Img src={images[1]} width="50px" />
            <Card.Body>
              <Card.Title>FIND YOUR PERFECT MATCH TODAY!</Card.Title>
              <Card.Text>
                Sign up for Dot quickly and easily with just an email address
                and password. You never know, your soul mate may just be there
                waiting for you!
              </Card.Text>
            </Card.Body>
          </Card>
        </Alert>
      </center>
    </div>
  );
}

export default HomePage;
