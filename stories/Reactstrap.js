import React from 'react';
import useValidatedInput from 'react-use-validated-input';
import { Col, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

const ReactstrapExample = () => {
  const regex = /[^@]+@[^\.]+\..+/;
  const isEmail = value => !value.match(regex) && 'Please type a valid email address';
  const [value, inputProps, feedback, invalid] = useValidatedInput('', isEmail);

  return (
    <Form>
      <FormGroup row>
        <Label for="email" sm={3}>
          Email
        </Label>
        <Col sm={9}>
          <Input autoFocus id="email" {...inputProps} invalid={invalid} />
          <FormFeedback>{feedback}</FormFeedback>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default ReactstrapExample;
