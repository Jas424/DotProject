import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

function BioCard() {
  const { currentUser } = useAuth();
  const yourMindRef = useRef();
  const [loading, setLoading] = useState(false);
  const [yourMindFeedback, setYourMindFeedback] = useState("");

  function handleYourMindSubmit(e) {
    e.preventDefault();
    setLoading(true);
    db.collection("users").doc(currentUser.uid).update({
      yourMind: yourMindRef.current.value,
    });
    setLoading(false);
    setYourMindFeedback("CHANGES SAVED!");
  }

  return (
    <Card>
      <Card.Header as="h3">
        <center>WHAT'S ON YOUR MIND?</center>
      </Card.Header>

      <Card.Body>
        <Form onSubmit={handleYourMindSubmit}>
          <Form.Group id="yourMind" controlId="formYourMind">
            {/* <Form.Label>
              <h4>MY STORY:</h4>
            </Form.Label> */}
            <Form.Control as="textarea" rows={6} ref={yourMindRef} />
            <p></p>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                disabled={loading}
                type="submit"
                size="lg"
              >
                SUBMIT
              </Button>
              <p />
              {yourMindFeedback && (
                <Alert>
                  <center>{yourMindFeedback}</center>
                </Alert>
              )}
            </div>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default BioCard;
