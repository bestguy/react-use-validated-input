import React from 'react';
import Example from './Example';
import Basic from './Basic';
import basicSource from '!!raw-loader!./Basic';
import Bootstrap from './Bootstrap';
import bootstrapSource from '!!raw-loader!./Bootstrap';
import Form from './Form';
import formSource from '!!raw-loader!./Form';
import OnLoad from './OnLoad';
import onLoadSource from '!!raw-loader!./OnLoad';
import Reactstrap from './Reactstrap';
import reactstrapSource from '!!raw-loader!./Reactstrap';
import ValidateJS from './ValidateJS';
import validateJsSource from '!!raw-loader!./ValidateJS';

export default {
  title: 'useValidatedInput',
};

const Story = ({ children, description, source, title }) => (
  <>
    <div className="mb-4 border-bottom">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
    <div className="row">
      <div className="col">
        {children}
      </div>
      {source && (
        <div className="col">
          <Example code={source} />
        </div>
      )}
    </div>
  </>
);

export const Introduction = () => (
  <>
    <p>
      <code>useValidatedInput</code> is a hook for simplifying state and validation usage with input fields,
      and is meant to be used in place of React's <code>useState</code> hook.<br />
    </p>
    <p>
      You call the hook with the initial value, a validation callback, and optionally whether to immediately validate the input value.<br />
      The object properties are named so that you can spread the object directly onto an input.<br />
      It returns an array with the current value, an object which you can bind to an input's value, onChange, and onBlur props to automatically manage the validation status.
      It also returns any validation feedback message returned by the validation callback, and whether the field is invalid.<br />
    </p>

    <h2>Usage</h2>
    <Example
      title="Usage"
      code={`
        import useValidatedInput from 'react-use-validated-input';

        const [
          value,    // T
          inputProps: {
            onBlur,   // () => void;
            onChange, // (e: ChangeEvent) => void
            value,    // T
          }
          invalid,  // boolean;
          feedback, // ReactNode;
        ] = useValidatedInput(
          initialValue, // T
          validator, // (value: T) => string | undefined,
          validateImmediately = false, // boolean
          validateOnChange = false, // boolean
        );

        return (
          <div>
            <input {...inputProps} /> {feedback}
          </div>
        );
      `}
    />

    <h3>Parameters</h3>
    <b>defaultValue</b> is the initial value of the input.<br />
    <b>validator</b> is a callback function that is passed the value of the input on change,
    and returns a feedback string or JSX if the value is invalid, otherwise returns undefined.<br />
    <b>validateImmediately</b> is an optional boolean value whether to validate the initial
    value of the input (useful for validating after a page load or server-side call.)
    <b>validateOnChange</b> is an optional boolean value whether to validate the value of
    the input as you type <em>before you've blurred at least once.</em>

    <h3 className="mt-3">Returns</h3>
    The hook returns an array with the following values:<br />
    <b>value</b> is the current value of the input.<br />
    <b>inputProps</b> is an object that can be spread onto an input, with the following properties:<br />
    <ul>
      <li>
        <b>onBlur</b> is used to determine when the input loses focus to trigger validation.
      </li>
      <li>
        <b>onChange</b> is used to set the current value and trigger validation.
      </li>
      <li>
        <b>value</b> is the current value of the input.
      </li>
    </ul>
    <b>invalid</b> returns true if the value does not pass validation.<br />
    <b>feedback</b> returns a feedback string or JSX if the value is invalid.<br />
  </>
);

export const BasicExample = () => (
  <Story
    title="Basic usage"
    description="This shows validation on blur."
    source={basicSource}
  >
    <Basic />
  </Story>
);

export const OnLoadExample = () => (
  <Story
    title="Validate on load"
    description="This shows validation on load, before any user interaction."
    source={onLoadSource}
  >
    <OnLoad />
  </Story>
);

export const FormExample = () => (
  <Story
    title="Form Example"
    description="This shows a form example, with interdependent validations between fields."
    source={formSource}
  >
    <Form />
  </Story>
);

export const BootstrapExample = () => (
  <Story 
    title="Bootstrap 4"
    description={<>This example demos usage with <a href="https://getbootstrap.com/docs/4.4/components/forms/#server-side" target="_blank">Bootstrap 4's validation classes</a>.</>}
    source={bootstrapSource}
  >
    <Bootstrap />
  </Story>
);

export const ReactstrapExample = () => (
  <Story 
    title="Reactstrap"
    description={<><a href="https://reactstrap.github.io" target="_blank">Reactstrap</a> is a Bootstrap 4 component library for React.</>}
    source={reactstrapSource}
  >
    <Reactstrap />
  </Story>
);

export const ValidateJSExample = () => (
  <Story 
    title="ValidateJS"
    source={validateJsSource}
  >
    <ValidateJS />
  </Story>
);

