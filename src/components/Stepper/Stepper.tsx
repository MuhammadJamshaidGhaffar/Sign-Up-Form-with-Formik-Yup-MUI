import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Email } from "../Email/Email";
import { Password } from "../Password/Password";
import { Country } from "../Country/Country";

const steps = ["Enter your email", "Set Password", "Enter your Country"];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState({
    email: "",
    password: "",
    country: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(data);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent() {
    switch (activeStep) {
      case 0:
        return (
          <Email
            handleNext={handleNext}
            handleBack={handleBack}
            preValues={data}
            setData={setData}
          />
        );
      case 1:
        return (
          <Password
            handleNext={handleNext}
            handleBack={handleBack}
            preValues={data}
            setData={setData}
          />
        );
      case 2:
        return (
          <Country
            handleNext={handleNext}
            handleBack={handleBack}
            preValues={data}
            setData={setData}
          />
        );
    }
  }
  return (
    <Box sx={{ maxWidth: 400 }}>
      <h1>Registration Form</h1>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step} style={{ color: "red" }}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step}
            </StepLabel>
            <StepContent>{getStepContent()}</StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
