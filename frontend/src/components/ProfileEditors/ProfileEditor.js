import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProfileEditor() {
  return (
    <Card>
      <Card.Body>
        <Link to="/editprofile">
          <h2 className="text-center mb-4">EDIT PROFILE</h2>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default ProfileEditor;
