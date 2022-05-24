import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

function PersonalityEditorCard() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [personalityFeedback, setPersonalityFeedback] = useState("");
  const [lookingFor, setLookingFor] = useState();

  const lookingForRef = useRef();
  const favBookRef = useRef();
  const favMovieRef = useRef();

  function handlePersonalitySubmit(e) {
    e.preventDefault();
    setLoading(true);
    db.collection("users").doc(currentUser.uid).update({
      lookingFor: lookingFor,
      favbook: favBookRef.current.value,
      favmovie: favMovieRef.current.value,
    });
    setLoading(false);
    setPersonalityFeedback("CHANGES SAVED!");
    setTimeout(() => {
      setPersonalityFeedback("");
    }, 5000);
  }

  function handleRadio(event) {
    setLookingFor(event.target.value);
  }

  return (
    <Card>
      <Card.Header as="h4">
        <center>PERSONALITY</center>
      </Card.Header>
      <Form onSubmit={handlePersonalitySubmit}>
        <Form.Group id="lookingFor" controlId="formLookingFor">
          <Form.Label>
            <h5>WHAT KIND OF RELATIONSHIP ARE YOU LOOKING FOR?</h5>
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                name="lookingFor"
                inline
                label="Friendship"
                ref={lookingForRef}
                type={type}
                id={`inline-${type}-3`}
                value="Friendship"
                onChange={handleRadio}
              />
              <Form.Check
                name="lookingFor"
                inline
                label="Flirting"
                ref={lookingForRef}
                type={type}
                id={`inline-${type}-4`}
                value="Flirting"
                onChange={handleRadio}
              />
              <Form.Check
                name="lookingFor"
                inline
                label="Serious Relationship"
                ref={lookingForRef}
                type={type}
                id={`inline-${type}-5`}
                value="Serious Relationship"
                onChange={handleRadio}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group id="book" controlId="formBook">
          <Form.Label>WHAT IS YOUR FAVORITE BOOK?</Form.Label>
          <Form.Control type="text" ref={favBookRef} />
        </Form.Group>

        <Form.Group id="movie" controlId="formMovie">
          <Form.Label>WHAT IS YOUR FAVORITE MOVIE?</Form.Label>
          <Form.Control type="text" ref={favMovieRef} />
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
