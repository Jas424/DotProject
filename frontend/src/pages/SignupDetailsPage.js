import React, { useRef, useState } from "react";
import { Card, Form } from "react-bootstrap";
import IdentityEditor from "../components/ProfileEditors/IdentityEditor";
import LocationEditor from "../components/ProfileEditors/LocationEditor";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";

function SignupDetailsPage() {
  const { currentUser } = useAuth();
  // const [gender, setGender] = useState("");
  // const firstnameRef = useRef();
  // const lastnameRef = useRef();
  // const bioProfileRef = useRef();
  // const ageRef = useRef();
  const favBookRef = useRef();
  // const genderRef = useRef();
  // const ethnicityRef = useRef();
  const religionRef = useRef();
  const favMovieRef = useRef();

  const [loading, setLoading] = useState(false);

  // function handleRadio(event) {
  //   setGender(event.target.value);
  // }

  // function handleIdentitySubmit(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   db.collection("users").doc(currentUser.uid).update({
  //     firstname: firstnameRef.current.value,
  //     lastname: lastnameRef.current.value,
  //     gender: gender,
  //   });
  //   setLoading(false);
  // }

  function handlePersonalSubmit(e) {
    e.preventDefault();
    setLoading(true);
    db.collection("users").doc(currentUser.uid).update({
      religion: religionRef.current.value,
      favbook: favBookRef.current.value,
      favmovie: favMovieRef.current.value,
    });
    setLoading(false);
  }

  return (
    <div className="flexbox-container">
      <div>
        {/* <Form onSubmit={handleIdentitySubmit}>
          <Card>
            <Card.Header as="h4">
              <center>IDENTITY</center>
            </Card.Header>
            <Form.Group id="firstname" controlId="formFirstname">
              <Form.Label>WHAT IS YOUR FIRST NAME?</Form.Label>
              <Form.Control type="text" ref={firstnameRef} required />
            </Form.Group>

            <Form.Group id="lastname" controlId="formLastname">
              <Form.Label>WHAT IS YOUR LAST NAME?</Form.Label>
              <Form.Control type="text" ref={lastnameRef} required />
            </Form.Group>

            <Form.Group id="ethnicity" controlId="formEthnicity">
              <Form.Label>WHAT IS YOUR ETHNICITY?</Form.Label>
              <Form.Control type="text" ref={ethnicityRef} />
            </Form.Group>

            <Form.Group id="age" controlId="formAge">
              <Form.Label>HOW OLD ARE YOU?</Form.Label>
              <Form.Control type="text" ref={ageRef} required />
            </Form.Group>

            <Form.Group id="gender" controlId="formGender">
              <Form.Label>WHAT GENDER DO YOU IDENTIFY AS?</Form.Label>
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
          </Card>
        </Form> */}
        <IdentityEditor />
      </div>

      <div>
        <LocationEditor />
      </div>

      <div>
        <Card>
          <Card.Header as="h4">
            <center>PERSONALITY</center>
          </Card.Header>
          <Form onSubmit={handlePersonalSubmit}>
            <Form.Group id="religion" controlId="formReligion">
              <Form.Label>WHAT IS YOUR RELIGION?</Form.Label>
              <Form.Control type="text" ref={religionRef} required />
            </Form.Group>

            <Form.Group id="book" controlId="formBook">
              <Form.Label>WHAT IS YOUR FAVORITE BOOK?</Form.Label>
              <Form.Control
                type="text"
                ref={favBookRef}
                placeholder="(OPTIONAL)"
              />
            </Form.Group>

            <Form.Group id="movie" controlId="formMovie">
              <Form.Label>WHAT IS YOUR FAVORITE MOVIE?</Form.Label>
              <Form.Control
                type="text"
                ref={favMovieRef}
                placeholder="(OPTIONAL)"
              />
            </Form.Group>
          </Form>
        </Card>
      </div>

      {/* <div className="d-grid gap-2">
            <Button
              variant="primary"
              disabled={loading}
              type="submit"
              size="lg"
            >
              SIGN UP
            </Button>
          </div>
        </Form> */}
    </div>
  );
}

export default SignupDetailsPage;
