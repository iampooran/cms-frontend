import { useState, FC, useEffect } from "react";
import "./style.scss";
import { validateInput } from "../../utils/validators/Validators";
import { TextFieldProps, Grid, FormHelperText, Typography, FormControl } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import { FormValidators } from "../Form";
import FileUpload from "react-material-file-upload";
// import DescriptionIcon from '@mui/icons-material/Description';
// import { CloudDownloadOutlined } from "@mui/icons-material";

interface OwnProps {
    inputValue?: [] | undefined;
    field?: string;
    typeValue?: any;
    textChange?: (
        value: string,
        field: string,
        error?: { error: boolean; message: string },
        deleted?:any
    ) => void;
    validators?: FormValidators[];
    hasError?: boolean;
    fieldError?: boolean | string;
    multiline?: boolean;
    deleteImages?: [];
    sx?: any,
    handledeleteImage?: (id: number) => void
}


// understand syntax
const Upload: FC<OwnProps & TextFieldProps> = ({
    hasError,
    validators,
    textChange,
    field,
    // handledeleteImage,
    inputValue,
    fieldError,
    label,
    sx,
    multiline = false,
}) => {
    const [error, setError] = useState<{
        error: boolean;
        message: string;
    } | null>(null);
    const [files, setFiles] = useState<File[]>(inputValue as any);
    const handleChange = (value: any, deleted?: any) => {
        const inputError = validateInput(validators as FormValidators[], value);
        setError(inputError);
        setFiles(value)
        if (textChange) {
            textChange(value, field as string, inputError, deleted as any);
        }
    };
    useEffect(()=>{
        setFiles(inputValue as any)
    },[inputValue])
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mt: 0, mb: 2 }}>
                <Typography variant="subtitle1">{label}</Typography>
                <FileUpload
                    multiple={multiline}
                    sx={{ border: "2px dashed", minHeight: "194px", ...sx }}
                    value={files as any}
                    onChange={handleChange as any}
                    buttonProps={{ sx: { color: "#ffffff" } }}
                    buttonText={"Choose Files"}
                />
                <FormControl
                    error={!!((error && error.error) || (!error && hasError && fieldError))}>
                    <FormHelperText>
                        {error && error.error
                            ? error.message
                            : !error && hasError && fieldError
                                ? "This field is required"
                                : ""}
                    </FormHelperText>
                </FormControl>
            </Grid>
                {/* {inputValue && inputValue?.length > 0 && (
                    <Grid item xs={4} sx={{ mt: 0, mb: 2 }}>
                        {inputValue?.map((fileData: any, index: number) => (
                            <Grid
                                key={index}
                                spacing={2}
                                sx={{
                                    px: 2,
                                    position: 'relative',
                                    minHeight: 150,
                                    alignItems: 'center',
                                    border: "1px solid #1ca7b1",
                                    justifyContent: 'center',
                                    borderRadius: "10px",
                                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)",
                                    my: 1,
                                    ml: 0,
                                    width: "calc(100% - 15px)",
                                }}
                            >

                                <IconButton
                                    aria-label="delete"
                                    color={"primary"}
                                    sx={{ position: 'absolute', bottom: 0, right: 10 }}
                                >
                                    <a rel="noreferrer" href={fileData.preview} target="_blank" className="download" download>
                                        <CloudDownloadOutlined

                                        />
                                    </a>
                                </IconButton>
                            
                                <DescriptionIcon sx={{ fontSize: "50px" }} />
                                <Typography variant="caption">{fileData.name}</Typography> 
                                <IconButton
                                    sx={{ position: 'absolute', top: 0, right: 10, fontSize: '10px' }}
                                    aria-label="delete"
                                    color={"error"}
                                    // disabled={deleteImages && deleteImages.indexOf(fileData.id) > -1}
                                    onClick={() => handledeleteImage && handledeleteImage(fileData)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        ))}
                    </Grid>
                )} */}
        </Grid>
    );
};
export default Upload;
