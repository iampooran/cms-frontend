import { FormValidators } from "../Form";

import { validateInput } from "../../utils/validators/Validators";
import { TextField, IconButton, TextFieldProps, Stack } from "@mui/material";
import React, { useState, FC, MouseEvent, ChangeEvent } from "react";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";


import Box from '@mui/material/Box';


interface OwnProps {
  validators?: FormValidators[];
  onChangeData: (value: string) => void
}


export const InputField: FC<OwnProps & TextFieldProps> = ({
  validators,     // this is propx coming like Validate.email 
  sx,
  autoComplete,
  required,
  fullWidth,
  label,
  variant,
  style,
  type,
  onChangeData   
}) => {


  const [inputError, setError] = useState<{ error: boolean; message: string; } | null>(null);
  const [pass, setPass] = useState(false);

  const handleChange = (value: string) => {
    const inputerror = validateInput(validators as FormValidators[], value);
    setError(inputerror);
    onChangeData(value as any)
    // console.log("ERROR IN INPUT : ", inputerror);
  };
console.log(sx);
  return (

    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            sx = {sx}
            autoComplete = {autoComplete}
            required = {required}
            fullWidth = {fullWidth}
            label = {label}
            variant = {variant}
            style = {style}
            type = {type}

            error={inputError?.error}
            id="outlined-error-helper-text"
            defaultValue=""
            helperText={inputError?.message}

            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleChange(e.target.value)
            }
            }
          />
        </div>


      </Box>

    </>
  );
};
export default InputField;

