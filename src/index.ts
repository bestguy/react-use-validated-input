import { ChangeEvent, ReactNode, useState } from 'react';

type InputProps<T> = {
  value: T;
  onBlur: () => void;
  onChange: (e: ChangeEvent) => void;
  // TODO? type property would allow checkboxes and radios
}

type Validator<T> = (value: T) => string | undefined;

const isFalsy = (value: any) => {
  return (value === false) || (value === 0) || (value === '') || (value === null) || (value === undefined);
}

function useValidatedInput<T>(defaultValue: T, validator: Validator<T>, validateImmediately = false, validateOnChange = false): [T, InputProps<T>, ReactNode, boolean] {
  const [value, setValue] = useState(defaultValue);
  const [touched, setTouched] = useState(validateImmediately);
  const feedback = touched && validator(value);
  const onChange = (newValue: T) => {
    if (validateOnChange) setTouched(true);
    setValue(newValue);
  }

  return [
    value,
    {
      value,
      onBlur: () => setTouched(true),
      onChange: event => onChange((event.target as any).value),
    },
    feedback,
    (touched && !isFalsy(feedback)), // TODO? support async/promise
  ];
};

export default useValidatedInput;
