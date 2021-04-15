import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
      console.log("errorMessage", errorMessage);
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  // console.log(formState);
  // JSX
  return (
    <Form>
      <h2>Contact me</h2>
      <Form.Group id="contact-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            type="text"
            defaultValue={formState.name}
            onBlur={handleChange}
            name="name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email address:</Form.Label>
          <Form.Control
            type="email"
            defaultValue={formState.email}
            onBlur={handleChange}
            name="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="message">Message:</Form.Label>
          <Form.Control
            as="textarea"
            defaultValue={formState.message}
            onBlur={handleChange}
            rows="5"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}

export default Contact;
