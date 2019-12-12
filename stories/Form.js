import React from 'react';
import useValidatedInput from 'react-use-validated-input';

const FormExample = () => {
  const regex = /[^@]+@[^\.]+\..+/;
  const isEmail = value => !value.match(regex) && 'Please type a valid email address';
  const isRequired = value => value.length === 0 && 'This field is required';

  const [email, emailProps, emailFeedback, emailInvalid] = useValidatedInput('', isEmail);
  const [pwd, pwdProps, pwdFeedback, pwdInvalid] = useValidatedInput('', isRequired);
  const [pwd2, pwd2Props, pwd2Feedback, pwd2Invalid] =
      useValidatedInput('', value => value !== pwd && 'Passwords do not match');

  const formInvalid = emailInvalid || pwdInvalid || pwd2Invalid;

  const handleSubmit = (e) => {
    alert(`Form sent with: ${email}, ${pwd}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} method="get">
      <div>
        <label htmlFor="email">Email</label>
        <input
          autoFocus
          id="email"
          type="text"
          className={`form-control ${emailInvalid ? 'is-invalid' : ''}`}
          {...emailProps}
        />
        {emailInvalid && <div className="invalid-feedback">{emailFeedback}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className={`form-control ${pwdInvalid ? 'is-invalid' : ''}`}
          {...pwdProps}
        />
        {pwdInvalid && <div className="invalid-feedback">{pwdFeedback}</div>}
      </div>
      <div>
        <label htmlFor="password">Repeat Password</label>
        <input
          id="password2"
          type="password"
          className={`form-control ${pwd2Invalid ? 'is-invalid' : ''}`}
          {...pwd2Props}
        />
        {pwd2Invalid && <div className="invalid-feedback">{pwd2Feedback}</div>}
      </div>
      <div className="pt-3">
        <input
          className="btn btn-primary"
          type="submit"
          disabled={formInvalid}
          value="Sign Up"
        />
      </div>
    </form>
  );
};

export default FormExample;
