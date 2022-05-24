import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

function PersonalityEditorCard() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [personalityFeedback, setPersonalityFeedback] = useState("");

  const favBookRef = useRef();
  const favMovieRef = useRef();
  const religionRef = useRef();

  function handlePersonalitySubmit(e) {
    e.preventDefault();
    setLoading(true);
    db.collection("users").doc(currentUser.uid).update({
      religion: religionRef.current.value,
      favbook: favBookRef.current.value,
      favmovie: favMovieRef.current.value,
    });
    setLoading(false);
    setPersonalityFeedback("CHANGES SAVED!");
    setTimeout(() => {
      setPersonalityFeedback("");
    }, 5000);
  }

  return (
    <Card>
      <Card.Header as="h4">
        <center>PERSONALITY</center>
      </Card.Header>
      <Form onSubmit={handlePersonalitySubmit}>
        <Form.Group id="religion" controlId="formReligion">
          <Form.Label>WHAT IS YOUR RELIGION?</Form.Label>
          <Form.Control type="text" ref={religionRef} required />
        </Form.Group>

        <Form.Group id="book" controlId="formBook">
          <Form.Label>WHAT IS YOUR FAVORITE BOOK?</Form.Label>
          <Form.Control type="text" ref={favBookRef} placeholder="(OPTIONAL)" />
        </Form.Group>

        <Form.Group id="movie" controlId="formMovie">
          <Form.Label>WHAT IS YOUR FAVORITE MOVIE?</Form.Label>
          <Form.Control
            type="text"
            ref={favMovieRef}
            placeholder="(OPTIONAL)"
          />
        </Form.Group>
        <p />
        <Button disabled={loading} type="submit">
          SUBMIT
        </Button>
        <p />
        {personalityFeedback && (
          <Alert>
            <center>{personalityFeedback}</center>
          </Alert>
        )}
      </Form>
    </Card>
  );
}

export default PersonalityEditorCard;
