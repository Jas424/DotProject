import React from "react";
import { Card } from "react-bootstrap";

function InfoPage() {
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">HOMETOWN</h2>
          <label for="cities">CHOOSE A CITY: </label>
        </Card.Body>
      </Card>
    </div>
  );
}

export default InfoPage;
