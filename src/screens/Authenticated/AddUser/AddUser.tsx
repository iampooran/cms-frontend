import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styledComponent from "styled-components";

const CustomTextField = styledComponent(TextField)`
  & label.Mui-focused {
    color: #BA9B37;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #BA9B37;
    }
  }
`;

const dropdownValue = [
  {
    value: "role1",
    label: "Select Role",
  },
];

const CancelButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#BA9B37",
  backgroundColor: "#EAE1C3",
  "&:hover": {
    backgroundColor: "#BA9B37",
    color: "#EAE1C3",
  },
}));

const AddUserButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#BA9B37",
  "&:hover": {
    backgroundColor: "#EAE1C3",
    color: "#BA9B37",
  },
}));

const AddUser = () => {
  return (
    <>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#BA9B37" }}>
          Add New User
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: "#8D8D8E" }} mt={3}>
              First Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: "#8D8D8E" }} mt={3}>
              Last Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: "#8D8D8E" }} mt={3}>
              Role
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomTextField
              sx={{ color: "red" }}
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Please Enter First Name"
              // autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomTextField
              required
              fullWidth
              id="lastName"
              label="Please Enter Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <CustomTextField
                id="outlined-select-currency"
                select
                defaultValue="role1"
              >
                {dropdownValue.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </CustomTextField>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={1} mt={1}>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: "#8D8D8E" }}>Address</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: "#8D8D8E" }}>Date of Birth</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: "#8D8D8E" }}>Email Id</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomTextField
              autoComplete="given-name"
              name="address"
              required
              fullWidth
              id="address"
              label="Please Enter User Address"
              // autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomTextField
              required
              fullWidth
              type="date"
              id="lastName"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomTextField
              autoComplete="given-name"
              name="email"
              required
              fullWidth
              id="email"
              label="Please Enter Email"
              // autoFocus
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} mt={1}>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: "#8D8D8E" }}>Contact No.</Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography sx={{ color: "#8D8D8E" }}>
              Comments (Optional)
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <CustomTextField
              autoComplete="given-name"
              name="phoneNumber"
              required
              fullWidth
              id="phoneNumber"
              label="Please Enter Phone Number"
              // autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CustomTextField
              required
              fullWidth
              id="additionalcomments"
              label="Additional Comments (Optional)"
              name="additionalcomments"
              autoComplete="family-name"
            />
          </Grid>

          <Grid item xs={12} sm={12} mt={2}>
            <Stack spacing={2} direction="row">
              <CancelButton variant="contained">Cancel</CancelButton>
              <AddUserButton variant="contained">Add User</AddUserButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddUser;
