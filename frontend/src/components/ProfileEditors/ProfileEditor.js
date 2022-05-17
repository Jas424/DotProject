import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProfileEditor() {
  return (
    <Card>
      <Card.Header as="h3">
        <center>ACCOUNT SETTINGS</center>
      </Card.Header>
      <Card.Body>
        <Link to="/editprofile">
          <h4>
            <center>EDIT EMAIL / PASSWORD</center>
          </h4>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default ProfileEditor;
