import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function AccountEditorCard() {
  return (
    <Card>
      <Card.Header as="h3">
        <center>ACCOUNT SETTINGS</center>
      </Card.Header>
      <Card.Body>
        <Link to="/editprofile">
          <h4>EDIT EMAIL / PASSWORD</h4>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default AccountEditorCard;
