import React, { useState } from "react";
import { Box, TextField, Stack } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepConnector, stepConnectorClasses } from "@mui/material";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Check } from "@mui/icons-material";

// Form and Data Handling
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//For Responsivity
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

//Schema: Rules for inputs
const schema = yup.object({
  first_name: yup.string(),
  middle_name: yup.string(),
  last_name: yup.string(),
  address: yup.string(),
  contact: yup.string(),
  email: yup.string().email(),
  username: yup.string(),
  password_confirmation: yup.string(),
  password: yup
    .string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      {
        message:
          "Password must contain at least 8 characters, one uppercase, one number and one special case character",
        excludeEmptyString: true,
      }
    ),
  //,
});

const steps = ["Personal", "Contact", "Account"];

export default function SignUpForm() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const small = useMediaQuery(theme.breakpoints.down(900));

  const [activeStep, setActiveStep] = React.useState(0);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //For react hook form
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  //   const handleNext = () => {
  //     let newSkipped = skipped;
  //     if (isStepSkipped(activeStep)) {
  //       newSkipped = new Set(newSkipped.values());
  //       newSkipped.delete(activeStep);
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped(newSkipped);
  //   };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = () => {
    console.log("lol");
    setActiveStep(activeStep + 1);
  };

  const onSubmit2 = () => {
    setActiveStep(0);
    setActiveStep(activeStep + 1);
  };

  const onSubmit3 = (data) => {
    console.log(data);
    setActiveStep(activeStep + 1);
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      marginLeft: 3,
      marginRight: 3,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      border: "1.5px solid", // Customize the circle color as needed
      borderColor: "#E5E5E5",
      borderRadius: 5,
    },
  }));

  const QontoStepIconRoot = styled("div")(({ theme }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    "& .QontoStepIcon-completedIcon": {
      color: "white",
      zIndex: 1,
      fontSize: mobile ? 15 : small ? 20 : 25,
    },
    "& .QontoStepIcon-circle": {
      width:  small ? 25 : 30,
      height:  small ? 25 : 30,
      borderRadius: "50%",
      border: "2px solid",
      borderColor: theme.palette.primary.main,
      backgroundColor: "white",
      color: theme.palette.primary.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .QontoStepIcon-circle-completed": {
      width:  small ? 25 : 30,
      height:  small ? 25 : 30,
      borderRadius: "50%",
      border: "2px solid",
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .QontoStepIcon-circle-inactive": {
      width: mobile ? 30 : small ? 30 : 35,
      height: mobile ? 30 : small ? 30 : 35,
      borderRadius: "50%",
      backgroundColor: "#9E9E9E",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className, index } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <div className="QontoStepIcon-circle-completed">
            <Check className="QontoStepIcon-completedIcon" />
          </div>
        ) : !active ? (
          <div className="QontoStepIcon-circle-inactive">
            <Typography
              variant={small ? "body2" : "body1"}
              sx={{
                pt: 0.5,
                fontFamily: "Objective Bold",
              }}
            >
              {index + 1}
            </Typography>
          </div>
        ) : (
          <div className="QontoStepIcon-circle">
            <Typography
              variant={small ? "body2" : "body1"}
              sx={{
                pt: 0.5,
                fontFamily: "Objective Bold",
              }}
            >
              {index + 1}
            </Typography>
          </div>
        )}
      </QontoStepIconRoot>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<QontoConnector />}
      >
        {steps.map((label, index) => {
          const stepProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                StepIconComponent={() => (
                  <QontoStepIcon
                    index={index}
                    active={activeStep === index}
                    completed={activeStep > index}
                  />
                )}
              >
                <Typography variant={mobile ? "body2" : small ? "body1" : "h6"}>
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : activeStep === 0 ? (
        <form
          style={{ width: "100%", marginTop: 10 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction="column" sx={{ width: "100%" }}>
            <TextField
              {...register("first_name")}
              type="text"
              required
              value={firstName}
              label="First name"
              size="regular"
              inputProps={{ style: { fontFamily: "raleway" } }}
              variant="outlined"
              sx={{ width: "100%", mt: 2.5 }}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />

            <TextField
              {...register("middle_name")}
              value={middleName}
              type="text"
              label="Middle name"
              size="regular"
              inputProps={{ style: { fontFamily: "raleway" } }}
              variant="outlined"
              sx={{ width: "100%", mt: 2.5 }}
              onChange={(event) => {
                setMiddleName(event.target.value);
              }}
            />

            <TextField
              {...register("last_name")}
              value={lastName}
              type="text"
              required
              label="Last name"
              size="regular"
              inputProps={{ style: { fontFamily: "raleway" } }}
              variant="outlined"
              sx={{ width: "100%", mt: 2.5 }}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, textTransform:"none", bgcolor:'transparent', color: theme.palette.primary.main, border:"1px solid", borderColor:activeStep === 0 ? "#e5e5e5":theme.palette.primary.main, width:100, fontSize:13, height:35, borderRadius:5}}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button type={"submit"} sx={{ bgcolor: theme.palette.primary.main,  textTransform:"none", color:"white", width:100, fontSize:13, height:35, borderRadius:5}} variant={"contained"}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </form>
      ) : activeStep === 1 ? (
        <React.Fragment>
          <form
            style={{ width: "100%", marginTop: 10 }}
            onSubmit={handleSubmit(onSubmit2)}
          >
            <Stack direction="column" sx={{ width: "100%" }}>
              <TextField
                {...register("address")}
                value={address}
                type="text"
                required
                label="Address"
                size="regular"
                inputProps={{ style: { fontFamily: "raleway" } }}
                variant="outlined"
                sx={{ width: "100%", mt: 2.5 }}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />

              <TextField
                {...register("contact")}
                value={contact}
                type="text"
                required
                label="Contact"
                size="regular"
                inputProps={{ style: { fontFamily: "raleway" } }}
                variant="outlined"
                sx={{ width: "100%", mt: 2.5 }}
                onChange={(event) => {
                  setContact(event.target.value);
                }}
              />

              <TextField
                {...register("email")}
                value={email}
                required
                type="email"
                label="Email"
                size="regular"
                inputProps={{ style: { fontFamily: "raleway" } }}
                variant="outlined"
                sx={{ width: "100%", mt: 2.5 }}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Stack>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, textTransform:"none", bgcolor:'transparent', color: theme.palette.primary.main, border:"1px solid", borderColor:theme.palette.primary.main, width:100, fontSize:13, height:35, borderRadius:5}}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button type={"submit"} sx={{mr: 1, bgcolor: theme.palette.primary.main,  textTransform:"none", color:"white", width:100, fontSize:13, height:35, borderRadius:5}} variant={"contained"}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </form>
        </React.Fragment>
      ) : (
        <React.Fragment>
        <form
          style={{ width: "100%", marginTop: 10 }}
          onSubmit={handleSubmit(onSubmit3)}
        >
          <Stack direction="column" sx={{ width: "100%" }}>
            <TextField
              {...register("username")}
              value={username}
              type="text"
              required
              label="Username"
              size="regular"
              inputProps={{ style: { fontFamily: "raleway" } }}
              variant="outlined"
              sx={{ width: "100%", mt: 2.5 }}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />

            <TextField
              {...register("password")}
              value={password}
              type="password"
              label="Password"
              size="regular"
              inputProps={{ style: { fontFamily: "raleway" } }}
              variant="outlined"
              sx={{ width: "100%", mt: 2.5 }}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />

            <TextField
              {...register("password_confirmation")}
              value={confirmPassword}
              type="password"
              label="Confirm password"
              required
              size="regular"
              inputProps={{ style: { fontFamily: "raleway" } }}
              variant="outlined"
              sx={{ width: "100%", mt: 2.5 }}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={() => {
                if (password === "") {
                  setActiveStep((prevActiveStep) => prevActiveStep - 1)
                } else {
                  if (validatePassword(password)) {
                    setActiveStep((prevActiveStep) => prevActiveStep - 1)
                  } else {
                    console.log(
                      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                    );
                  }
                }
              }}
              sx={{ mr: 1, textTransform:"none", bgcolor:'transparent', color: theme.palette.primary.main, border:"1px solid", borderColor:theme.palette.primary.main, width:100, fontSize:13, height:35, borderRadius:5}}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button type={"submit"} sx={{mr: 1, bgcolor: theme.palette.primary.main,  textTransform:"none", color:"white", width:100, fontSize:13, height:35, borderRadius:5}} variant={"contained"}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </form>
        </React.Fragment>
      )}
    </Box>
  );
}
