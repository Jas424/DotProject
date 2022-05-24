import React from "react";
import { Alert, Card } from "react-bootstrap";

//import images

let avatars = [
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2Fironman.jpg?alt=media&token=255b1ffd-49e7-4bf6-844e-afcccdac9865",
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2Fgamora.png?alt=media&token=bd5c8858-5493-40b4-a534-8790ad345684",
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2Fcaptainamerica.jpg?alt=media&token=14e6b637-1ac4-4c82-91d2-449d5268c4ec",
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2Fspiderman.png?alt=media&token=5203de70-24ac-4a35-be71-80968dc41e95",
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2Fblackwidow.jpg?alt=media&token=ab26d7b9-5c88-4152-a1c6-d8a5d9a285c3",
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2Fhulk.jpg?alt=media&token=bc775d03-0c32-4c0b-98df-d7a47ff00a63",
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2Fdot-small-logo.png?alt=media&token=d90c0c0e-fd1f-4fe3-82ce-4b2e76ca5cee",
];

function AboutUsPage() {
  return (
    <div className="d-grid gap-2">
      <Alert>
        <img className="dotAnimation" src={avatars[6]} alt="dot-small-logo" />

        <center>
          <h1>Meet The Dot Team</h1>
        </center>
      </Alert>

      {/* wrap all the cards in a flexbox container */}
      <div className="flexbox-container">
        {/* Agenor's Card */}
        <div className="card1">
          <Card>
            <Card.Img variant="top" src={avatars[0]} />
            <Card.Body></Card.Body>
            <Card.Footer as="h3">
              <center>Agenor Rodriguez</center>
            </Card.Footer>
          </Card>
        </div>

        {/* Jas's Card */}
        <div className="card3">
          <Card>
            <Card.Header as="h3">
              <center>Jaspreet Singh</center>
            </Card.Header>
            <Card.Img variant="bottom" src={avatars[2]} />
            <Card.Body></Card.Body>
          </Card>
        </div>

        {/* Jonathan's Card */}
        <div className="card4">
          <Card>
            <Card.Img variant="top" src={avatars[3]} />
            <Card.Body></Card.Body>
            <Card.Footer as="h3">
              <center>Jonathan Yanez</center>
            </Card.Footer>
          </Card>
        </div>

        {/* Jade's Card */}
        <div className="card5">
          <Card>
            <Card.Header as="h3">
              <center>Jade Wing Ki Au</center>
            </Card.Header>
            <Card.Img variant="bottom" src={avatars[1]} />
            <Card.Body></Card.Body>
          </Card>
        </div>

        {/* Varsha's Card */}
        <div className="card2">
          <Card>
            <Card.Img variant="top" src={avatars[4]} />
            <Card.Body></Card.Body>
            <Card.Footer as="h3">
              <center>Varsha Singh</center>
            </Card.Footer>
          </Card>
        </div>

        {/* Jiten's Card */}
        <div className="card6">
          <Card>
            <Card.Header as="h3">
              <center>Jiten Lama</center>
            </Card.Header>
            <Card.Img variant="bottom" src={avatars[5]} />
            <Card.Body></Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
