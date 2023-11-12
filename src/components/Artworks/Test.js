import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container, Button,  } from '@mui/material';
// import Paper from '@mui/material/Paper';
import { KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';

import style from "../../styles/style";

import BackgroundImage from "../../images/artworks/test.jpg";
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

function Details() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const containerWidth = 100 / maxSteps;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Container maxWidth="false" sx={{ minHeight: "100vh", marginTop: "var(--drawer-width)", justifyContent: 'center', alignItems: 'center' }} >

      <div
        style={{
          height: '95vh',
          maxWidth: '100%',
          overflow: 'hidden',
          display: 'flex',
          // background: 'red'
        }}
      >
        <div
          style={{
            display: 'flex',
            transition: 'margin-left 0.5s ease',
            marginLeft: `-${activeStep * 100}vw`,
            width: `${maxSteps * 100}vw`,
            objectFit: 'contain',
          }}
        >

          <img
            src={BackgroundImage1}
            alt='Test'
            style={{ objectFit: 'scale-down', width: '90vw', height: '90vh', alignItems: 'center', justifyContent: 'center' }}
          />
          <img
            src={BackgroundImage4}
            alt='Test'
            style={{ objectFit: 'scale-down', width: '90vw', height: '90vh', alignItems: 'center', justifyContent: 'center' }}
          />

        </div>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      </Box>
    </Container>
  );

}

export default Details;