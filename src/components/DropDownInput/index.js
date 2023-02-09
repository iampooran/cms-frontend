import { useState } from "react";
import "./styles.css";
import { validateInput } from "../../utils/validators/Validators";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Stack,
} from "@mui/material";

const DropDownInput = ({
  hasError,
  validators,
  onChange,
  field,
  inputValue,
  options,
  fieldError,
  inputProps,
  disabled,
  className,
  id,
  labelId,
  label,
  style,
  placeholder,
  size,
}) => {
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    const { value } = event.target;
    const inputError = validateInput(validators, value);
    setError(inputError);
    onChange(value, field, inputError);
  };

  return (
    <Stack sx={{ '&.inline-row .dropdown': { width: 'auto' }, '&.inline-row': { gap: '20px', alignItems: 'center' } }} direction={className === 'inline-row' ? 'row' : 'column'} className={className}>
      <FormControl
        size={size}
        error={!!((error && error.error) || (!error && hasError && fieldError))}
        className={`dropdown`}
        fullWidth
        sx={{ '.MuiSelect-select': {background: '#ffffff' } }}
      >
        <InputLabel id={label}>{label}</InputLabel>
        <Select

          style={style}
          inputProps={inputProps}
          disabled={disabled}
          labelId={labelId}
          id={id}
          value={inputValue}
          label={label}
          placeholder={placeholder}
          onChange={(value) => {
            handleChange(value);
          }}
        >
          {options.map((item, i) => (
            <MenuItem key={i} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          {error && error.error
            ? error.message
            : !error && hasError && fieldError
              ? "This field is required"
              : ""}
        </FormHelperText>
      </FormControl>
    </Stack>
  );
};
export default DropDownInput;
