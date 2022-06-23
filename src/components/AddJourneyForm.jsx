import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Geocode from "react-geocode";

const onSubmit = (event) => {
  event.preventDefault();
  console.log("onSubmit called.");

  const originTextValue = event.target.originText.value;
  const destinationTextValue = event.target.destinationText.value;

  const googleMapsApiKey = "AIzaSyB-xg1DsX-xgi4ZmKAef_j93QRb7VJ0Bqw";

  Geocode.setApiKey(googleMapsApiKey);
  Geocode.setLanguage("en");
  Geocode.setRegion("uk");
  Geocode.setLocationType("ROOFTOP");

  Geocode.fromAddress(originTextValue).then(
    (response) => {
      const location = response.results[0].geometry.location;
      console.log(location.lat);

      //event.target.originLat.value = location;

      //setInputValue(latId, location.lat);
      //setInputValue(lngId, location.lng);
    },
    (error) => {
      //setInputValue(latId, "");
      //setInputValue(lngId, "");
      console.error(error);
    }
  );
}


const AddJourneyForm = () => {
  const [originLat, setOriginLat] = useState();
  const [originLng, setOriginLng] = useState();
  const [destinationLat, setDestinationLat] = useState();
  const [destinationLng, setDestinationLng] = useState();
  


  return (
    <div>
      <Form onSubmit={onSubmit}>
      <FormGroup className="mb-2">
            <Label>Journey start</Label>
            <Input id="originText" type="text" placeholder="e.g. Postcode, Street Name" />
            <Input id="originLat" type="text" placeholder="[HIDDEN] Latitude" 
              onChange={(e) => {console.log(e); setOriginLat(e.target.value)} } />
            <Input id="originLng" type="text" placeholder="[HIDDEN] Longitude" />
          </FormGroup>

          <FormGroup className="mb-2">
            <Label>Destination</Label>
            <Input id="destinationText" type="text" placeholder="e.g. Postcode, Street Name" />
            <Input id="destinationLat" type="text" placeholder="[HIDDEN] Latitude"  />
            <Input id="destinationLng" type="text" placeholder="[HIDDEN] Longitude" />
          </FormGroup>

          <FormGroup className="mb-2">
            <Label>Departure Date</Label>
            <Input id="departureDateTime" type="text" placeholder="e.g. 24 Jun 2022, 08:00" />
          </FormGroup>

          <FormGroup className="mb-2">
            <Label>Return Date</Label>
            <Input id="returnDateTime" type="text" placeholder="e.g. 24 Jun 2022, 18:00" />
          </FormGroup>

          <Button variant="primary" >
            Submit
          </Button>


        {/* <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
      </Form>
    </div>
  );
}

export default AddJourneyForm;