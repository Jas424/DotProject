import React from "react";
import { Alert, Card } from "react-bootstrap";

//images
import dotSmallLogo from "../components/layout/dot-small-logo.png";
import ironman from "../components/images/ironman.jpg";
import blackwidow from "../components/images/blackwidow.jpg";
import captainamerica from "../components/images/captainamerica.jpg";
import spiderman from "../components/images/spiderman.png";
import hulk from "../components/images/hulk.jpg";
import gamora from "../components/images/gamora.png";

function AboutUsPage() {
  return (
    <div className="d-grid gap-2">
      <Alert>
        <img className="dotAnimation" src={dotSmallLogo} alt="dot-small-logo" />

        <center>
          <h1>Meet The Dot Team</h1>
        </center>
      </Alert>
      <div className="flexbox-container">
        {/* <div className="card1">
          <TeamMemberCard
            fullName="Agenor Rodriguez"
            teamPhoto={genericMalePhoto}
          />
        </div> */}

        <div className="card1">
          <Card>
            <Card.Img variant="top" src={ironman} />
            <Card.Body></Card.Body>
            <Card.Footer as="h3">Agenor Rodriguez</Card.Footer>
          </Card>
        </div>

        <div className="card2">
          <Card>
            <Card.Header as="h3">Jade Wing Ki Au</Card.Header>
            <Card.Img variant="bottom" src={blackwidow} />
            <Card.Body></Card.Body>
          </Card>
        </div>

        <div className="card3">
          <Card>
            <Card.Img variant="top" src={captainamerica} />
            <Card.Body></Card.Body>
            <Card.Footer as="h3">Jaspreet Singh</Card.Footer>
          </Card>
        </div>

        <div className="card4">
          <Card>
            <Card.Img variant="top" src={spiderman} />
            <Card.Body></Card.Body>
            <Card.Footer as="h3">Jonathan Yanez</Card.Footer>
          </Card>
        </div>

        <div className="card5">
          <Card>
            <Card.Header as="h3">Jiten Lama</Card.Header>
            <Card.Img variant="bottom" src={hulk} />
            <Card.Body></Card.Body>
          </Card>
        </div>

        <div className="card6">
          <Card>
            <Card.Img variant="top" src={gamora} />
            <Card.Body></Card.Body>
            <Card.Footer as="h3">Varsha Singh</Card.Footer>
          </Card>
        </div>

        {/* <div className="card2">
          <TeamMemberCard
            fullName="Jade Wing Ki Au"
            teamPhoto={genericFemalePhoto}
          />
        </div>

        <div className="card3">
          <TeamMemberCard
            fullName="Jaspreet Singh"
            teamPhoto={genericMalePhoto}
          />
        </div> */}

        {/* <div>
          <TeamMemberCard
            fullName="Jonathan Yanez"
            teamPhoto={genericMalePhoto}
          />
        </div>

        <div>
          <TeamMemberCard fullName="Jiten Lama" teamPhoto={genericMalePhoto} />
        </div>

        <div>
          <TeamMemberCard
            fullName="Varsha Singh"
            teamPhoto={genericFemalePhoto}
          />
        </div> */}
      </div>
    </div>
  );
}

export default AboutUsPage;
