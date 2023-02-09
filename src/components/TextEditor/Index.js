import { FormControl, FormHelperText, Typography } from '@mui/material';
import React, { useState } from 'react';
import CKEditor from 'react-ckeditor-component';
import { validateInput } from "../../utils/validators/Validators";


const TextEditor = ({ value, label, field, onChange, validators, hasError, fieldError }) => {
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    const newContent = event.editor.getData();
    const inputError = validateInput(validators, newContent);
    setError(setError);
    onChange(newContent, field, inputError);
  };
  const editSource = mode => {
    const editor = mode.editor;
    if (editor.mode === 'source') {
      const editable = editor._.editable;
      editable.attachListener(editable, 'input', e => {
        handleChange(mode);
      });
    }
  };
  return (
    <FormControl
      error={!!((error && error.error) || (!error && hasError && fieldError))}
      className={`dropdown`}
      fullWidth
    >
      {label && <Typography variant='h6' mb={2}>{label}</Typography>}
      <CKEditor
        type="classic"
        activeClass="p10"
        content={value}
        events={{
          change: handleChange,
          mode: editSource,
        }}
        config={{
          allowedContent: true,
        }}
      />
      <FormHelperText>
        {error && error.error
          ? error.message
          : !error && hasError && fieldError
            ? "This field is required"
            : ""}
      </FormHelperText>
    </FormControl>)
}
export default TextEditor;
