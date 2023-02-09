import React, { FC, useState } from "react";
import { DesktopDatePicker, DesktopDatePickerProps, LocalizationProvider } from "@mui/x-date-pickers";
import { validateInput } from "../../utils/validators/Validators";

import "./styles.scss";
import { Dayjs } from "dayjs";
import { identifiers } from "../../utils/constants/identifiers";
import { FormValidators } from "../Form";
import { Stack, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface OwnProps {
  field?: string;
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  typeValue?: string;
  textChange: (
    value: string,
    field: string,
    error?: { error: boolean; message: string }
  ) => void;
  validators?: FormValidators[];
  hasError?: boolean;
  fieldError?: string | boolean;
  label?: string;
  disableFuture?: boolean;
  size?: any;
  className?: string
}

const DateInput: FC<OwnProps & DesktopDatePickerProps<any, any>> = ({
  hasError,
  validators,
  textChange,
  className,
  field,
  value,
  placeholder,
  fieldError,
  disabled,
  disableFuture,
  label,
  typeValue,
  size,
  ...rest
}) => {
  const [error, setError] = useState<{
    error: boolean;
    message: string;
  } | null>(null);
  const handleChange = (value: Dayjs | null) => {
    if (value) {
      const inputError = validateInput(
        validators as FormValidators[],
        value.format(identifiers.date_input as string)
      );
      textChange(
        value.format(identifiers.date_input as string),
        field as string,
        inputError
      );
      setError(inputError);
    }
  };
  const onKeyDown = (e: any) => {
    e.preventDefault();
  };
  return (
    <Stack sx={{ '&.inline-row .input-field': { width: 'auto' }, '&.inline-row': { gap: '20px', alignItems: 'center' } }} direction={className === 'inline-row' ? 'row' : 'column'} className={className}>
      {/* <Typography variant="body2" mb={1}>{label}</Typography> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <Typography variant="body2" mb={1}>{label}</Typography> */}
        <DesktopDatePicker
          {...rest}
          label={label}
          inputFormat={identifiers.date_format as string}
          value={value}
          onChange={(newValue: Dayjs | null) => handleChange(newValue)}
          disabled={disabled}
          className={`input-field ${fieldError}`}
          OpenPickerButtonProps={{ color: "primary" }}
          disableFuture={disableFuture}
          renderInput={(params) => (
            <TextField onKeyDown={onKeyDown} {...params}
              sx={{ '&.input-field': { backgroundColor: '#fff' } }}
              size='medium'
              helperText={error && error.error ? error.message : !error && (hasError && fieldError) ? 'This field is required' : ''}
              error={((error && error.error) || (!error && hasError && fieldError)) ? true : false}
            />
          )}
        />
      </LocalizationProvider>
    </Stack>
  );
};

export default DateInput;
