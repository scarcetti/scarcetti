import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container, Button, Typography, Grid } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import style from "../../styles/style";

import BackgroundImage1 from "../../images/artworks/tree1.gif";
import BackgroundImage2 from "../../images/artworks/drenks.png";
import BackgroundImage3 from "../../images/artworks/prj1.jpg";
import BackgroundImage4 from "../../images/artworks/frog_under_the_tree.png";

const images = [
  {
    label: 'Test',
    imgPath: BackgroundImage1
  },
  {
    label: 'Cozy Drink',
    imgPath: BackgroundImage2
  },
  {
    label: 'Grass Field',
    imgPath: BackgroundImage3
  },
  {
    label: 'Cozy Frog',
    imgPath: BackgroundImage4
  },
];

const Details = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const containerWidth = 100 / maxSteps;
  const galleryStyles = style.galleryStyles;
  const prev = activeStep - 1;
  const next = activeStep + 1;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Container maxWidth="false" sx={{ minHeight: "100vh", marginTop: "var(--drawer-width)", }} >
      <div
        style={{
          height: '95vh',
          maxWidth: '95wh',
          overflow: 'hidden',
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          // background: 'red'
        }}
      >
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} >

          {/* Left container */}
          <Grid item xs={2} sm={2} md={2} xl={2} lg={2}
            sx={{
              ...galleryStyles.leftContainer,
              background: 'blue',
            }}>
            <img
              src={BackgroundImage4}
              style={{
                ...galleryStyles.prevImage
              }}
            />
          </Grid>

          {/* center image */}
          <Grid item xs={8} sm={8} md={8} xl={8} lg={8}
            sx={{
              ...galleryStyles.container,
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              // background: 'red'

            }}>
            <img
              src={BackgroundImage3}
              style={{
                ...galleryStyles.imgDetails,
                backgroundSize: 'contain',
              }}
            />
          </Grid>

          {/* right image */}
          <Grid item xs={2} sm={2} md={2} xl={2} lg={2}
            sx={{
              background: 'blue',
              display: 'flex',
              ...galleryStyles.rightContainer, ...galleryStyles.container, alignItems: 'center'
            }}>
             <img
              src={BackgroundImage2}
              style={{
                ...galleryStyles.prevImage,
                position: 'relative',
                background: 'rgba(0, 0, 0, 0.001)' ,
              }}
            />
          </Grid>
        </Grid>

      </div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
        <Typography>Active Step: {activeStep}</Typography>
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      </Box>
    </Container>
  );
}

export default Details;
{/* {images.map((step, index) => {
          const distance = index - activeStep;
          const isVisible = Math.abs(distance) <= 1;
          let zIndex = isVisible ? (index === activeStep ? 1 : 0.5) : -1;

          if (distance === 1 && activeStep === maxSteps - 1) {
            zIndex = 0.5;
          }

          return (
            <div
              key={step.label}
              style={{
                flex: `0 0 ${containerWidth}vw`,
                position: 'absolute',
                left: `calc(50% - ${containerWidth / 2}vw + ${distance * containerWidth}vw)`,
                opacity: isVisible ? (index === activeStep ? 1 : 0.5) : 0,
                transform: isVisible ? 'scale(0.8)' : 'scale(0)',
                zIndex,
              }}
            >
              <img
                src={step.imgPath}
                alt={step.label}
                style={{ ...galleryStyles.imgDetails }}
              />
            </div>
          );
        })} */}