import React, { useState, FC, MouseEvent, ChangeEvent } from "react";
import "./input.css";
import { TextField, IconButton, TextFieldProps, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface OwnProps {
  leftIcon?: string;
  inputValue?: string;
  field?: string;
  typeValue?: string;
  textChange?: (
    value: string,
    field: string,
    error?: { error: boolean; message: string }
  ) => void;
  hasError?: boolean;
  fieldError?: boolean | string;
  multiline?: boolean;
  rows?: number | undefined | string;
}

const InputField: FC<OwnProps & TextFieldProps> = ({
  hasError,
  textChange,
  field,
  inputValue,
  placeholder,
  fieldError,
  inputProps,
  InputProps,
  variant,
  disabled,
  label,
  size = "medium",
  typeValue,
  style,
  autoFocus,
  sx,
  className,
  multiline = false,
  rows = 0,
  ...rest
}) => {
  const [error, setError] = useState<{
    error: boolean;
    message: string;
  } | null>(null);
  const [pass, setPass] = useState(false);

  
  const handleTogglePassword = () => {
    setPass(!pass);
  };

  const handleChange = () =>{

  }
 
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Stack sx={{ '&.inline-row .input-field': { width: 'auto' }, '&.inline-row': { gap: '20px', alignItems: 'center' } }} direction={className === 'inline-row' ? 'row' : 'column'} className={className}>
      {/* <Typography variant="body2" mb={1}>{label}</Typography> */}
      <TextField
        autoFocus={autoFocus}
        sx={{ ...sx,fontSize:'12px', '&.input-field': { background: '#ffffff' } }}
        size='medium'
        autoComplete="off"
        inputProps={inputProps}
        InputProps={
          typeValue === "password"
            ? {
              ...InputProps,
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {pass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }
            : InputProps
        }
        style={style}
        disabled={disabled}
        type={pass ? "text" : typeValue}
        helperText={error && error.error ? error.message : !error && (hasError && fieldError) ? 'This field is required' : ''}
        error={((error && error.error) || (!error && hasError && fieldError)) ? true : false}
        color="primary" fullWidth className={`input-field ${fieldError}`}
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          textChange ? handleChange() : e
        }
        placeholder={placeholder}
        label={label}
        variant={variant}
        {...rest}
        multiline={multiline}
        rows={rows}
      />
    </Stack>
  );
};
export default InputField;
