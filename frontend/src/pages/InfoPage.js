import React, { useState } from "react";
import { Card } from "react-bootstrap";

import MapPicker from "react-google-map-picker";

function InfoPage() {
  const DefaultLocation = { lat: 10, lng: 106 };
  const DefaultZoom = 10;

  const App = () => {
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {
      setLocation({ lat: lat, lng: lng });
    }

    function handleChangeZoom(newZoom) {
      setZoom(newZoom);
    }

    function handleResetLocation() {
      setDefaultLocation({ ...DefaultLocation });
      setZoom(DefaultZoom);
    }

    return (
      <>
        <button onClick={handleResetLocation}>Reset Location</button>
        <label>Latitute:</label>
        <input type="text" value={location.lat} disabled />
        <label>Longitute:</label>
        <input type="text" value={location.lng} disabled />
        <label>Zoom:</label>
        <input type="text" value={zoom} disabled />

        <MapPicker
          defaultLocation={defaultLocation}
          zoom={zoom}
          mapTypeId="roadmap"
          style={{ height: "700px" }}
          onChangeLocation={handleChangeLocation}
          onChangeZoom={handleChangeZoom}
          apiKey="AIzaSyBgshsmpaP3bj7cYY0Ma4dtlsstiv7FkOQ"
        />
      </>
    );
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">HOMETOWN</h2>

          <label for="cities">CHOOSE A CITY: </label>
          <MapPicker />
        </Card.Body>
      </Card>
    </>
  );
}

export default InfoPage;
