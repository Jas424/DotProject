import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

function IdentityEditor() {
  const { currentUser } = useAuth();
  const [gender, setGender] = useState("");
  const [identityFeedback, setIdentityFeedback] = useState("");
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const ethnicityRef = useRef();
  const jobRef = useRef();

  const [loading, setLoading] = useState(false);

  function handleIdentitySubmit(e) {
    e.preventDefault();
    setLoading(true);
    db.collection("users").doc(currentUser.uid).update({
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      age: ageRef.current.value,
      ethnicity: ethnicityRef.current.value,
      job: jobRef.current.value,
      gender: gender,
    });
    setLoading(false);
    setIdentityFeedback("CHANGES SAVED!");
  }

  function handleRadio(event) {
    setGender(event.target.value);
  }

  return (
    <Form onSubmit={handleIdentitySubmit}>
      <Card>
        <Card.Header as="h4">
          <center>IDENTITY</center>
        </Card.Header>
        <Form.Group id="firstname" controlId="formFirstname">
          <Form.Label>WHAT IS YOUR FIRST NAME?</Form.Label>
          <Form.Control type="text" ref={firstnameRef} />
        </Form.Group>

        <Form.Group id="lastname" controlId="formLastname">
          <Form.Label>WHAT IS YOUR LAST NAME?</Form.Label>
          <Form.Control type="text" ref={lastnameRef} />
        </Form.Group>

        <Form.Group id="age" controlId="formAge">
          <Form.Label>HOW OLD ARE YOU?</Form.Label>
          <Form.Control type="text" ref={ageRef} />
        </Form.Group>

        <Form.Group id="ethnicity" controlId="formEthnicity">
          <Form.Label>WHAT IS YOUR ETHNICITY?</Form.Label>
          <Form.Control type="text" ref={ethnicityRef} />
        </Form.Group>

        <Form.Group id="job" controlId="formJob">
          <Form.Label>WHAT DO YOU DO FOR A LIVING?</Form.Label>
          <Form.Control type="text" ref={jobRef} />
        </Form.Group>

        <p />

        <Form.Group id="gender" controlId="formGender">
          <Form.Label>
            <h5>WHAT GENDER DO YOU IDENTIFY AS?</h5>
          </Form.Label>
          {/* <Form.Control ref={genderRef} required /> */}
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                name="gender"
                inline
                label="Male"
                ref={genderRef}
                type={type}
                id={`inline-${type}-3`}
                value="Male"
                onChange={handleRadio}
              />
              <Form.Check
                name="gender"
                inline
                label="Female"
                ref={genderRef}
                type={type}
                id={`inline-${type}-4`}
                onChange={handleRadio}
              />
              <Form.Check
                name="gender"
                inline
                label="Other"
                ref={genderRef}
                type={type}
                id={`inline-${type}-5`}
                onChange={handleRadio}
              />
            </div>
          ))}
        </Form.Group>

        <p />
        <Button disabled={loading} type="submit">
          SUBMIT
        </Button>
        <p />
        {identityFeedback && (
          <Alert>
            <center>{identityFeedback}</center>
          </Alert>
        )}
      </Card>
    </Form>
  );
}

export default IdentityEditor;
