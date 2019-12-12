import React from 'react';
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import useValidatedInput from 'react-use-validated-input/validatejs';

const ValidateJSExample = () => {
  const [email, inputProps, feedback, invalid] =
      useValidatedInput('', { presence: true, email: true });
  const [age, ageProps, ageFeedback, ageInvalid] = useValidatedInput('',
    { presence: true,
      numericality: {
        onlyInteger: true,
        greaterThan: 12,
        message: 'You need to be at least 13 years old'
      }
    });
  const formInvalid = invalid || ageInvalid;
  const handleSubmit = (e) => {
    alert(`Form sent with: ${email}, ${age}`);
    e.preventDefault();
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="email" sm={3}>
          Email
        </Label>
        <Col sm={9}>
          <Input autoFocus id="email" {...inputProps} invalid={invalid} />
          {invalid && <FormFeedback>Email {feedback}</FormFeedback>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="age" sm={3}>
          Age
        </Label>
        <Col sm={9}>
          <Input id="age" {...ageProps} invalid={ageInvalid} />
          {ageInvalid && <FormFeedback>{ageFeedback}</FormFeedback>}
        </Col>
      </FormGroup>
      <Button
        color="primary"
        type="submit"
        disabled={formInvalid}
      >
        Sign Up
      </Button>
    </Form>
  );
};

export default ValidateJSExample;
