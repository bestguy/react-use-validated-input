# react-use-validated-input

React hook for using input state with validation.  
Optionally exposes a [validate.js](https://validatejs.org/) helper.

----

## Syntax

```javascript
const [state, { onBlur, onChange, value }, validationMessage, isValid] =
       useValidatedInput(initialState, getValidationMessage, validateImmediately, validateOnChange]);
```
Returns a state value, an object you can spread to an input, a validation message (if invalid), and whether it's valid.


### Parameters

`initialState`
The initial state value.  During the initial render, the returned state is the same as this value.

`getValidationMessage`
Function that receives the current state value, and should return a validation string if invalid, otherwise should return `undefined`;

`validateImmediately`
Optional.  Boolean value whether to validate on initial render, otherwise will validate after first blur.

Default value:
`false`

`validateOnChange`
Optional.  Boolean value whether to validate on change (and before blur), otherwise will validate after first blur.

Default value:
`false`

### Return value

The return value is an array with the following values:

`state`
The current state value.

`inputProps`
An object with the following properties:

- `onBlur`
- `onChange`
- `value`

This can be spread onto an input to automatically manage state updates and validation.

`validationMessage`
A string describing the validation failures, if any.

`isValid`
A boolean value indicating if the state passes the validation.
Returns undefined if validation has not been been run. 

### Usage

```javascript
const regex = /[^@]+@[^\.]+\..+/;
const isEmail = value => !value.match(regex) && 'Please type a valid email address';
const isRequired = value => value.length === 0 && 'This field is required';
const [username, usernameProps, usernameFeedback, usernameInvalid] =
       useValidatedInput('', isEmail);
const [pwd, pwdProps, pwdFeedback, pwdInvalid] = useValidatedInput(password, isRequired);

return (
  <form
    onSubmit={() => alert(username, pwd)}
  >
    <div>
      <label>Username</label>
      <input {...usernameProps} />
      <div>{usernameFeedback}</div>
    </div>
    <div>
      <label>Password</label>
      <input
        type="password"
        {...pwdProps}
      />
      <div>{pwdFeedback}</div>
    </div>
    <input type="submit" disabled={usernameInvalid && pwdInvalid} value="Sign Up" />
  </form>
);
```
