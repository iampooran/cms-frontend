import { FC, useEffect, useState } from "react";
import "./styles.css";
import { validateInput } from "../../utils/validators/Validators";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import {
  FormHelperText,
  Stack,
  FormControlProps,
  Button,
} from "@mui/material";
import { FormValidators } from "../Form";


interface OwnProps {
  field?: string;
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  typeValue?: string;
  validators?: FormValidators[];
  hasError?: boolean;
  fieldError?: string | boolean;
  label?: string;
  defaultValue?: any,
  labelId?: string,
  options?: [],
}

const RadioInput: FC<OwnProps & FormControlProps<any, any>> = ({
  hasError,
  validators,
  onChange,
  field,
  inputValue,
  options,
  fieldError,
  inputProps,
  className,
  label,
  style,
  defaultValue,
  size,
  disabled,
  labelId,
  ...rest
}) => {
  const [error, setError] = useState<{ error: String, message: String }>();
  const [selectedValue, setSelectedValue] = useState(inputValue as any || '');
  useEffect(() => {
    setSelectedValue(selectedValue);
  }, [selectedValue]);
  const handleChange = (item: any) => {
    console.log(item)
    const inputError = validateInput(validators, item.value);
    setError(inputError);
    onChange(item.value, field, inputError);
  };
  return (
    <div>
    <Stack direction="row" spacing={2}>
      {options?.length > 0 && options?.map((item: any, index:number) => (
        <Button key={index} {...rest} color={item.value === inputValue?'primary':'inherit'} onClick={() => handleChange(item)} variant="text" startIcon={item.value === inputValue ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}>
          {item.label}
        </Button>
      ))}
    </Stack>
    <FormHelperText>
        {error && error.error
          ? error.message
          : !error && hasError && fieldError
            ? "This field is required"
            : ""}
      </FormHelperText>
    </div>
  );
};
export default RadioInput;
