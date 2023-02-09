import { FC, useState } from "react";
import { validateInput } from "../../utils/validators/Validators";
import {
  FormControl,
  FormHelperText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FormValidators } from "../Form";
import Select from "react-select";
import './styles.scss'

interface OwnProps {
  field?: string;
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  typeValue?: string;
  onChange: (
    value: string,
    field: string,
    error?: { error: boolean; message: string }
  ) => void;
  validators?: FormValidators[];
  hasError?: boolean;
  fieldError?: string | boolean;
  label?: string;
  disableFuture?: boolean;
  labelId?: string;
  inputValue: any;
  options?: { label: string; value: string | boolean }[];
  inputProps?: any,
  className?: string,
  style?: any,
  isMulti?: boolean,
  id: any
}
const MultiSelect: FC<OwnProps> = ({
  hasError,
  validators,
  onChange,
  field,
  inputValue,
  options,
  fieldError,
  disabled,
  className,
  label,
  id,
  style,
  placeholder,
  isMulti,
}) => {
  const theme = useTheme();
  const [error, setError] = useState<{
    error: boolean;
    message: string;
  } | null>(null);
  const handleChange = (selectedOption: any) => {
    const inputError = validateInput(validators as FormValidators[], selectedOption);
    setError(inputError);
    onChange(selectedOption, field as string, inputError);
  };
  return (
    <Stack sx={{ '&.inline-row .select': { width: 'auto' }, '&.inline-row': { gap: '20px', alignItems: 'center' } }} direction={className === 'inline-row' ? 'row' : 'column'} className={className}>
      {/* <Typography variant="body2" mb={1}>{label}</Typography> */}
      <FormControl
        sx={{
          '.select': {
            fontFamily: theme.typography.fontFamily,
          },
          '.label':{
            backgroundColor:theme.palette.secondary.light
          }
        }}
        error={!!((error && error.error) || (!error && hasError && fieldError))}
        className={`dropdown ${((error && error.error) || (!error && hasError && fieldError) ? 'mainError' : '')}`}
        fullWidth
      >
        {(isMulti ? inputValue.length > 0 : inputValue !== '') && <Typography variant="body2" className="label">{label}</Typography>}
        <Select
          className="select"
          options={options}
          styles={style}
          isMulti={isMulti}
          isDisabled={disabled}
          isSearchable
          id={id}
          isClearable
          value={inputValue}
          placeholder={placeholder}
          onChange={(value) => {
            handleChange(value);
          }}
        />
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
export default MultiSelect;
