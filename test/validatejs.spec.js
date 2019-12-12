import React from 'react';
import { render, cleanup, fireEvent, getByTestId, queryByTestId } from '@testing-library/react';
import useValidatedInput from '../src/validatejs';

afterEach(cleanup);

const SimpleWrapper = () => {
  const [, inputProps, feedback, invalid] = useValidatedInput('oogah', {}, false, true);
  return (
    <>
      <input {...inputProps} />
      {invalid && <div data-testid="msg">{feedback}</div>}
    </>
  );
}

const ValidationWrapper = ({ email, validate = false, touchOnChange = true }) => {
  const constraints = {
    presence: true,
    email: true
  }
  const [, inputProps, feedback, invalid] = useValidatedInput(email, constraints, validate, touchOnChange);
  return (
    <>
      <input {...inputProps} />
      {invalid && <div data-testid="msg">{feedback}</div>}
    </>
  );
}

test('useValidatedInput should return specified state value', () => {
  const { container } = render(<SimpleWrapper />);
  const input = container.firstChild;
  expect(input.value).toBe('oogah');
});

test('useValidatedInput should allow updating the state value', () => {
  const { container } = render(<SimpleWrapper />);
  const input = container.firstChild;
  fireEvent.change(input, { target: { value: 'chakah' } });
  expect(input.value).toBe('chakah');
});

test('useValidatedInput should validate specified value', () => {
  const { container } = render(<ValidationWrapper email="arsars@" />);
  const input = container.firstChild;
  expect(input.value).toBe('arsars@');
});

test('useValidatedInput should skip validation on initial state', () => {
  const { container } = render(<ValidationWrapper />)
  const wrapper = <ValidationWrapper email="badValue" />
  render(wrapper);
  expect(queryByTestId(container, 'msg')).toBeNull();
});

test('useValidatedInput should validate on initial state if specified', () => {
  const { container } = render(<ValidationWrapper email="badValue" validate />);
  const msg = getByTestId(container, 'msg');
  expect(msg.textContent).toBe('is not a valid email');
});

test('useValidatedInput should validate on state change', () => {
  const wrapper = <ValidationWrapper email="a@b.com"/>;
  const { container, rerender } = render(wrapper)
  expect(queryByTestId(container, 'msg')).toBeNull();

  const input = container.firstChild;
  fireEvent.change(input, { target: { value: 'xxxxx' } });
  rerender(wrapper);

  const msg = getByTestId(container, 'msg');
  expect(msg.textContent).toBe('is not a valid email');
});


