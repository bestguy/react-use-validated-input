import React from 'react';
import useValidatedInput from 'react-use-validated-input';

const BasicExample = () => {
  const isRequired = value => value.length === 0 && 'This field is required';
  const [value, inputProps, feedback] = useValidatedInput('', isRequired);

  return (
    <>
      <input {...inputProps} />
      <div>{feedback}</div>
      <hr />
      Current value: {value}
    </>
  );
};

export default BasicExample;
