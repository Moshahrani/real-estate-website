import React, { useState, useRef } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "../css/ContactForm.css";
import bayarea from "../media/bayarea.jpg";
import emailjs from "@emailjs/browser";

const ContactForm = ({ handleModalClose, selectedHouse, style }) => {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if form is valid
    if (formIsValid()) {
      // Submit form
      console.log(formValues);
      emailjs
        .sendForm(
          "service_qungzev",
          "template_16a8kcp",
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      handleModalClose();

      // Reset form values
      setFormValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  // const formIsValid = () => {
  //   // Check if all required fields are filled
  //   const requiredFields = ['name', 'email', 'message'];
  //   const errors = {};
  //   let isValid = true;
  //   requiredFields.forEach((field) => {
  //     if (!formValues[field]) {
  //       errors[field] = 'This field is required.';
  //       isValid = false;
  //     }
  //   });

  //   // Check if email is valid
  //   if (formValues.email && !/\S+@\S+\.\S+/.test(formValues.email)) {
  //     errors.email = 'Invalid email address.';
  //     isValid = false;
  //   }

  //   // Set errors
  //   setFormErrors(errors);

  //   return isValid;
  // };

  const formIsValid = () => {
    let isValid = true;
    const errors = {};

    // Check if required fields are filled
    if (!formValues.name.trim()) {
      errors.name = "This field is required.";
      isValid = false;
    }

    if (!formValues.email.trim()) {
      errors.email = "This field is required.";
      isValid = false;
    }

    if (!formValues.message.trim()) {
      errors.message = "This field is required.";
      isValid = false;
    }

    // Check if email is valid
    if (formValues.email.trim() && !/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Invalid email address.";
      isValid = false;
    }

    // Set errors
    setFormErrors(errors);

    return isValid;
  };

  return (
    // <div className="background-image" style={{
    //   backgroundImage: `url(${bayarea})`,

    // }}>
    <div>
      <Form ref={form} className="myForm">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name*</Form.Label>
          <Form.Control
            name="name"
            type="name"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            isInvalid={!!formErrors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            isInvalid={!!formErrors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridphone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            placeholder="(012)-345-6789"
            value={formValues.phone}
            onChange={(e) =>
              setFormValues({ ...formValues, phone: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group as={Col} id="formGridmessage">
          <Form.Label>Message*</Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            style={{ height: "100px" }}
            placeholder="Hi,
            I'm interested in the house listed at [address]. I have a few questions regarding the property, such as [specific inquiries]. Could you please provide me with more information about the house?
            Thank you."
            rows={3}
            value={formValues.message}
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
            isInvalid={!!formErrors.message}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.message}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="address" style={style} >
          <Form.Label>Address: {selectedHouse}</Form.Label>
        </div>
        <Button className="submit-button" style={{ marginTop: "20px", border: "none", borderRadius: "6px" }} variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
