import React from 'react';
import useValidatedInput from 'react-use-validated-input';

const BootstrapExample = () => {
  const regex = /[^@]+@[^\.]+\..+/;
  const isEmail = value => !value.match(regex) && 'Please type a valid email address';
  const [email, inputProps, feedback, invalid] = useValidatedInput('', isEmail);

  return (
    <>
      <input
        autoFocus
        type="text"
        className={`form-control ${invalid ? 'is-invalid' : ''}`}
        {...inputProps}
      />
      {invalid && <div className="invalid-feedback">{feedback}</div>}
    </>
  );
};

export default BootstrapExample;
