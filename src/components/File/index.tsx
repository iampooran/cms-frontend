import React, { useState, FC, ChangeEvent, useEffect } from "react";
import { validateInput } from "../../utils/validators/Validators";
import { TextFieldProps, Typography, FormControl, FormHelperText, Stack } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { FormValidators } from "../Form";
// import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';

interface OwnProps {
  leftIcon?: string;
  inputValue?: any;
  field?: string;
  typeValue?: string;
  textChange?: (
    value: string,
    field: string,
    error?: { error: boolean; message: string }
  ) => void;
  validators?: FormValidators[];
  hasError?: boolean;
  fieldError?: boolean | string;
  accept?: string;
}

const File: FC<OwnProps & TextFieldProps> = ({
  hasError,
  validators,
  textChange,
  field,
  inputValue,
  fieldError,
  label,
  accept = '',
}) => {
  const [error, setError] = useState<{
    error: boolean;
    message: string;
  } | null>(null);
  useEffect(() => {
    setFileValue(inputValue)
  }, [inputValue])
  const [fileName, setFileValue] = useState<any>(inputValue && inputValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileValue(e.target.files[0])
      const inputError = validateInput(validators as FormValidators[], e.target.files[0] as any);
      setError(inputError);
      if (textChange) {
        textChange(e.target.files[0] as any, field as string, inputError);
      }
    }
  };
  return (
    <FormControl>
      {label && <Typography variant="body2" mb={1}>{label}</Typography>}
      <Stack direction='column'>
        <Button sx={{ width: 200 }} variant="contained" component="label" endIcon={<AttachFileIcon />}>
          {/* <IconButton sx={{ width: 40 }} color="primary" aria-label="upload picture" component="label"> */}
          <input multiple onChange={handleChange} hidden accept={accept} type="file" />
          Add attachment
        </Button>
        {(fileName?.name || fileName[0]?.fileName) && <Stack alignItems="center" direction='row'>
          {/* <Link download href={fileName} variant="body2"> */}
          <Stack my={2} minWidth='100%' sx={{border: '1px solid #ddd'}} p={1} direction='row'>
            <DescriptionIcon sx={{ mr: 1 }} /> {fileName?.name || fileName[0]?.fileName}
          </Stack>
          {/* </Link> */}
          {/* <IconButton onClick={() => setFileValue('')} aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" />
            </IconButton> */}
        </Stack>}
      </Stack>
      <FormHelperText>
        {error && error.error
          ? error.message
          : !error && hasError && fieldError
            ? "This field is required"
            : ""}
      </FormHelperText>
    </FormControl>
  );
};
export default File;
