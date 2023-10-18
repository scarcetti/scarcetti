import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Form and Data Handling
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";

// import { useLoginUserMutation } from "../../app/services/authApi";
// import { setCredentials } from "../../../app/persists/authSlice";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const emailPersist = useSelector((state) => state.register.email);

  //Schema: Rules for inputs
  const schema1 = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  //For react hook form
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema1),
  });

  //STATES
  const [email, setEmail] = useState(
    emailPersist === null ? "" : emailPersist === undefined ? "" : emailPersist
  );
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  //   const [login] = useLoginUserMutation();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
          {/* <Box sx={{ width: 290, height: 100, mb: 4, mt: mobile ? 0 : 5 }}>
            <img
              src={LogoIcon}
              alt={"imotor_logo"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box> */}

          <Typography
            variant="h5"
            sx={{ fontFamily: "Objective Bold", color: "#0a5ca8", mb: 3 }}
          >
            {"USER LOGIN"}
          </Typography>

          {warning !== "" ? (
            <Typography
              variant="body2"
              sx={{ fontFamily: "Objective thin", color: "orange", mb: 1 }}
            >
              {warning}
            </Typography>
          ) : (
            <div />
          )}

          <TextField
            {...register("email")}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            variant="outlined"
            label="Email"
            sx={{ width: "90%" }}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            {...register("password")}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            variant="outlined"
            label="Password"
            sx={{ width: "90%", mt: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Stack direction="row" sx={{ width: "90%" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              type="button"
              sx={{
                textTransform: "none",
                fontFamily: "Raleway",
                border: "none",
                color: "black",
                p: 0,
                mt: 1,
                backgroundColor: "transparent",
                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              Forgot password?
            </Button>
          </Stack>

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "90%",
              height: 40,
              mt: 3,
              borderRadius: 25,
              textTransform: "none",
              fontFamily: "Lexend Peta",
              letterSpacing: "-1.5px",
            }}
          >
            {"Login"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
