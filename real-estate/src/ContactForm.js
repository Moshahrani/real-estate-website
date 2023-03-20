import { Form, Col, Button } from "react-bootstrap";
import "./ContactForm.css";
import bayarea from "./bayarea.jpg";

const ContactForm = () => {
  return (
    <div>
    <div
          className="background-image"
          style={{ backgroundImage: `url(${bayarea})`,
          backgroundSize: "cover" }}
        /><div>
       <Form className="contactForm">
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Name*</Form.Label>
          <Form.Control name="name" type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name="phone" placeholder="" />
        </Form.Group>
        <Form.Group as={Col} id="formMessage">
          <Form.Label>Message*</Form.Label>
          <Form.Control name="message" as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      </div>
  );
};

export default ContactForm;
