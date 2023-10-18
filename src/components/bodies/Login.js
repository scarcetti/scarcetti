import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import LoginForm from "../forms/credentials/LoginForm";

//For Responsivity
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { navigate } from "gatsby";

const Login = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const smaller = useMediaQuery(theme.breakpoints.down(800));

  return (
    <Box
      sx={{
        width: mobile ? "100%" : smaller ? 600 : 800,
        height: 500,
        border: mobile ? null : "1px solid #E0E0E0",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: mobile ? null : "3.0px 6.0px  6.0px  hsl(0deg 0% 0% / 0.38)",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {smaller ? null : (
          <Box
            sx={{
              width: "55%",
              height: "100%",
              position: "relative",
              bgcolor: "#0a5ca8",
            }}
          >
            <Stack
              direction="column"
              align="center"
              sx={{
                width: "90%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography
                variant={"h4"}
                align="center"
                sx={{
                  width: "100%",
                  color: "white",
                  fontFamily: "objective bold",
                }}
              >
                {"WELCOME"}
              </Typography>
              <Typography
                variant={"body1"}
                align="center"
                sx={{
                  width: "100%",
                  mt: 1,
                  color: "white",
                  fontFamily: "Raleway",
                }}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
              </Typography>
            </Stack>
          </Box>
        )}
        <Box
          sx={{
            width: mobile ? "90%" : smaller ? "80%" : "45%",
            height: "100%",
            bgcolor: "white",
            p: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: "1px solid #E0E0E0 ",
          }}
        >
          <LoginForm />

          <Stack
            direction="row"
            alignItems="center"
            sx={{ position: "absolute", bottom: 20 }}
          >
            <Typography variant="body2" sx={{ fontFamily: "Raleway" }}>
              Don't have an account?
            </Typography>
            <Button
              type="button"
              onClick={() => navigate("/userRegistration")}
              sx={{
                textTransform: "none",
                fontFamily: "Raleway",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              Sign up here.
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
