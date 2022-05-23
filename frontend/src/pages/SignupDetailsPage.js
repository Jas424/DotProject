import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext";

function SignupDetailsPage() {
  //   const { currentUser } = useAuth();
  //   const uid = currentUser.uid;
  //   console.log(uid); // const avatarRef = useRef();
  const locationRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  // const bioProfileRef = useRef();
  const ageRef = useRef();
  const favBookRef = useRef();
  const genderRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();
  const ethnicityRef = useRef();
  const religionRef = useRef();
  const favMovieRef = useRef();

  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Card>
          <Card.Header as="h4">IDENTITY</Card.Header>
          <Form.Group id="firstname" controlId="formFirstname">
            <Form.Label>WHAT IS YOUR FIRST NAME?</Form.Label>
            <Form.Control type="text" ref={firstnameRef} required />
          </Form.Group>

          <Form.Group id="lastname" controlId="formLastname">
            <Form.Label>WHAT IS YOUR LAST NAME?</Form.Label>
            <Form.Control type="text" ref={lastnameRef} required />
          </Form.Group>

          <Form.Group id="gender" controlId="formGender">
            <Form.Label>WHAT GENDER DO YOU IDENTIFY AS?</Form.Label>
            <Form.Control type="text" ref={genderRef} required />
          </Form.Group>

          <Form.Group id="age" controlId="formAge">
            <Form.Label>HOW OLD ARE YOU?</Form.Label>
            <Form.Control type="text" ref={ageRef} required />
          </Form.Group>
        </Card>

        <Card>
          <Card.Header as="h4">APPEARANCE</Card.Header>
          <Form.Group id="height" controlId="formHeight">
            <Form.Label>HOW TALL ARE YOU?</Form.Label> INCHES
            <Form.Control
              type="text"
              ref={heightRef}
              placeholder="YOU MAY CHOOSE NOT TO ANSWER"
            />
          </Form.Group>

          <Form.Group id="weight" controlId="formWeight">
            <Form.Label>HOW MUCH DO YOU WEIGH?</Form.Label> POUNDS
            <Form.Control
              type="text"
              ref={weightRef}
              placeholder="YOU MAY CHOOSE NOT TO ANSWER"
            />
          </Form.Group>

          <Form.Group id="ethnicity" controlId="formEthnicity">
            <Form.Label>WHAT IS YOUR ETHNICITY?</Form.Label>
            <Form.Control
              type="text"
              ref={ethnicityRef}
              placeholder="YOU MAY CHOOSE NOT TO ANSWER"
            />
          </Form.Group>
        </Card>

        <Form.Group id="location" controlId="formLocation">
          <Form.Label>WHAT CITY DO YOU LIVE IN?</Form.Label>
          <Form.Control type="text" ref={locationRef} required />
        </Form.Group>

        <Form.Group id="religion" controlId="formReligion">
          <Form.Label>WHAT IS YOUR RELIGION?</Form.Label>
          <Form.Control type="text" ref={religionRef} required />
        </Form.Group>

        <Form.Group id="book" controlId="formBook">
          <Form.Label>WHAT IS YOUR FAVORITE BOOK?</Form.Label>
          <Form.Control
            type="text"
            ref={favBookRef}
            placeholder="YOU MAY CHOOSE NOT TO ANSWER"
          />
        </Form.Group>

        <Form.Group id="movie" controlId="formMovie">
          <Form.Label>WHAT IS YOUR FAVORITE MOVIE?</Form.Label>
          <Form.Control
            type="text"
            ref={favMovieRef}
            placeholder="YOU MAY CHOOSE NOT TO ANSWER"
          />
        </Form.Group>

        <p></p>
        <div className="d-grid gap-2">
          {/* if form is loading, we dont want to be able to resubmit the form, so we add a "disabled" state to the submit button"  */}
          <Button variant="primary" disabled={loading} type="submit" size="lg">
            SIGN UP
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default SignupDetailsPage;
