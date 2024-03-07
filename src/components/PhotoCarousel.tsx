"use client";

import { makeStyles } from "@mui/styles";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "/photoCarousel/1.jpeg",
  },
  {
    label: "Bird",
    imgPath: "/photoCarousel/2.jpeg",
  },
  {
    label: "Image 3",
    imgPath: "/photoCarousel/3.jpeg",
  },
  {
    label: "Image 4",
    imgPath: "/photoCarousel/4.jpeg",
  },
  {
    label: "Image 5",
    imgPath: "/photoCarousel/5.jpeg",
  },
  {
    label: "Image 6",
    imgPath: "/photoCarousel/6.jpeg",
  },
  {
    label: "Image 7",
    imgPath: "/photoCarousel/7.jpeg",
  },
];

const useStyles = makeStyles({
  root: {
    // Your other styles for the MobileStepper
  },
  dot: {
    backgroundColor: "#EBF1F1", // Customize the color for inactive dots
  },
  dotActive: {
    backgroundColor: "#6C8282", // Customize the color for active dots
  },
});

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const classes = useStyles(); // Get the styles you defined

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, margin: "auto" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "#EBF1F1",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div
            key={step.imgPath}
            style={{ borderRadius: "8px 8px 0 0", overflow: "hidden" }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "block",
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        classes={{
          root: classes.root, // Overrides default styles related to MobileStepper root element
          dot: classes.dot, // Overrides default styles related to dot elements
          dotActive: classes.dotActive, // Overrides default styles related to active dots
        }}
        style={{ backgroundColor: "#96B4B5", borderRadius: "0 0 8px 8px" }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            style={{ color: "black" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </Button>
        }
        backButton={
          <Button
            style={{ color: "black" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronLeftIcon />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
