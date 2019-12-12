import useValidatedInput from './index';
import validate from 'validate.js';

export default <T>(defaultValue: T, constraints = {}, validateImmediately = false, touchOnChange = false) => {
  const isInvalid = (value: T) => validate.single(value, constraints);
  return useValidatedInput(defaultValue, isInvalid, validateImmediately, touchOnChange)
};
