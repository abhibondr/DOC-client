import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import FormControl from "@mui/material/FormControl";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup"; // npm i @hookform/resolvers

import * as yup from "yup"; //npm i yup
import InputLabel from "@mui/material/InputLabel";
import UserContext from "./UserContext";
import UserService from "../../../services/UserService";
import { errorToast, successToast } from "../../../ui/toast/Toast";
import { addUser } from "../../../app/slice/AuthSlice";

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

const UserForm = () => {
  const { open, operation, handleClose, initialUser, LoadUser } =
    React.useContext(UserContext);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      ...initialUser,
    },
    resolver: yupResolver(userSchema),
  });

  const handleUser = (user) => {
    const fd = new FormData();

    console.log("USer", user);

    if (user?.name?.first) fd.append("name.first", user?.name?.first);
    if (user?.name?.last) fd.append("name.last", user?.name?.last);
    if (user?.mobile) fd.append("mobile", user?.mobile);
    if (user?.email) fd.append("email", user?.email);
    if (user?.role) fd.append("role", user?.role);

    if (operation == "edit") {
      UserService?.updateUser(initialUser?._id, fd)
        .then((response) => {
          console.log(response);
          successToast("User Updated");
          handleClose();
          // LoadUser();
        })
        .catch((err) => {
          console.error(err);
          errorToast("User Not Updated");
        });
    } else {
      UserService.createUser(user)
        .then((response) => {
          dispatch(addUser(response?.data));
          successToast("User Created...");
          handleClose();
          console.log(response?.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xl">
        <Card sx={{ padding: 1, marginTop: 2 }}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 500,
              margin: "auto",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(handleUser)}
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
              </Grid>
              <Grid item xs={12} sx={{ p: 2 }}>
                <Button type="submit" variant="contained" fullWidth>
                  {operation == "edit" ? "Update" : "Create"}
                </Button>
              </Grid>
            </Box>
          </Box>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default UserForm;
