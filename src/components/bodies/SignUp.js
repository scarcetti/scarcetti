import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { navigate } from "gatsby";
import SignUpForm from "../forms/create/SignUpForm";

//For Responsivity
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const SignUp = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  return (
    <Box
      sx={{
        p: 3,
        pt: 0,
        pb: 3,
        width: mobile ? "100%" : 500,
        height: 580,
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
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: "Objective Bold",
            color: "#0a5ca8",
            mb: 4,
            width: "100%",
          }}
        >
          {"Sign Up"}
        </Typography>

        <SignUpForm />

        <Stack
          direction="row"
          alignItems="center"
          sx={{ position: "absolute", bottom: 0 }}
        >
          <Typography variant="body2" sx={{ fontFamily: "Raleway" }}>
            Already have an account?
          </Typography>
          <Button
            type="button"
            onClick={() => navigate("/")}
            sx={{
              textTransform: "none",
              fontFamily: "Raleway",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            Login here.
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUp;
