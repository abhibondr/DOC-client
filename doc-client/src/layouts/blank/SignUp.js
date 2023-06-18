import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { addUser } from "../../app/slice/AuthSlice";
import { successToast } from "../../ui/toast/Toast";
import { useNavigate } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import FormControl from "@mui/material/FormControl";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup"; // npm i @hookform/resolvers

import * as yup from "yup"; //npm i yup
import InputLabel from "@mui/material/InputLabel";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Doctors Appointment
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const userSchema = yup.object({
  name: yup.object({
    first: yup.string().min(3, "Too Short").max(25, "Too Long"),
    last: yup.string().min(3, "Too Short").max(25, "Too Long"),
  }),
  mobile: yup.string().matches(/^[0-9]{10}$/, "Enter 10 digits only"),
  email: yup.string().email("Enter valid email address"),
});

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const SignUp = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      name: {
        first: "",
        last: "",
      },
      mobile: "",
      email: "",
      password: "",
      role: "",
      status: "",
    },
    resolver: yupResolver(userSchema),
  });

  const handleUser = (user) => {
    const fd = new FormData();

    if (user?.name?.first) fd.append("name.first", user?.name?.first);
    if (user?.name?.last) fd.append("name.last", user?.name?.last);
    if (user?.mobile) fd.append("mobile", user?.mobile);
    if (user?.email) fd.append("email", user?.email);
    if (user?.password) fd.append("password", user?.password);
    if (user?.role) fd.append("role", user?.role);
    if (user?.status) fd.append("status", user?.status);

    UserService.createUser(user)
      .then((response) => {
        dispatch(addUser(response?.data));
        successToast("User Created...");
        navigate("/login");
        console.log(response?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xl">
        <Card sx={{ padding: 1, marginTop: 4 }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 500,
              margin: "auto",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(handleUser)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="First Name"
                    autoFocus
                    {...register("name.first")}
                    error={
                      touchedFields?.name?.first && errors?.name?.first
                        ? true
                        : false
                    }
                    helperText={
                      touchedFields?.name?.first && errors?.name?.first
                        ? errors?.name?.first.message
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    {...register("name.last")}
                    error={
                      touchedFields?.name?.first && errors?.name?.last
                        ? true
                        : false
                    }
                    helperText={
                      touchedFields?.name?.first && errors?.name?.last
                        ? errors?.name?.last.message
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Mobile"
                    {...register("mobile")}
                    error={
                      touchedFields?.mobile && errors?.mobile ? true : false
                    }
                    helperText={
                      touchedFields?.mobile && errors?.mobile
                        ? errors?.mobile.message
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    {...register("email")}
                    error={touchedFields?.email && errors?.email ? true : false}
                    helperText={
                      touchedFields?.email && errors?.email
                        ? errors?.email.message
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    {...register("password")}
                    error={
                      touchedFields?.password && errors?.password ? true : false
                    }
                    helperText={
                      touchedFields?.password && errors?.password
                        ? errors?.password.message
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="role">Role</InputLabel>

                    <Controller
                      name="role"
                      control={control}
                      label="Roles"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select labelId="role" label="Role" {...field}>
                          <MenuItem value="admin">Admin</MenuItem>
                          <MenuItem value="patient">Patient</MenuItem>
                        </Select>
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive information regarding medicine, doctors avalability and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 4 }} />
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
