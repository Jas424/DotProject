import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function BioCard() {
  const bioRef = useRef();
  const [editBio, setEditBio] = useState();

  const handleEdit = async (e) => {
    e.preventDefault();
    setEditBio(!editBio);
  };

  return (
    <Card>
      <Card.Header as="h3">
        <center>BIO AND INTERESTS</center>
      </Card.Header>

      <Card.Body>
        <Form onSubmit={handleEdit}>
          <Form.Group id="bio" controlId="formBio">
            {/* <Form.Label>
              <h4>MY STORY:</h4>
            </Form.Label> */}
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Please type a short introduction here."
              ref={bioRef}
            />
            <p></p>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                onClick={handleEdit}
                type="submit"
                size="lg"
              >
                SUBMIT
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default BioCard;
