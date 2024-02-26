import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container, Button, Typography, Grid, Card, useMediaQuery } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import style from "../../styles/style";

import { navigate } from "gatsby";

import BackgroundImage1 from "../../images/artworks/tree1.gif";
import BackgroundImage2 from "../../images/artworks/drenks.png";
import BackgroundImage3 from "../../images/artworks/prj1.jpg";
import BackgroundImage4 from "../../images/artworks/frog_under_the_tree.png";
import BackgroundImage5 from "../../images/artworks/test.jpg";

const images = [
  {
    label: 'Sunset',
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
  {
    label: 'Clouds',
    imgPath: BackgroundImage5
  },
];

const Details = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const containerWidth = 100 / maxSteps;
  const galleryStyles = style.galleryStyles;
  const prev = (activeStep - 1 + maxSteps) % maxSteps;
  const next = (activeStep + 1) % maxSteps;

  const isMediumOrSmallScreen = useMediaQuery(theme => theme.breakpoints.down('xl'));

  const handleNext = () => {
    setActiveStep(next);
  };

  const handleBack = () => {
    setActiveStep(prev);
  };

  return (
    <Container maxWidth="false" sx={{ minHeight: "100vh", marginTop: "var(--drawer-width)", }} >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent:'middle', paddingTop:'10px',minHeight: '2vh',}}>
        <Button size="small" sx={{color:'white',  alignItems:'center', backgroundColor:'black'}} onClick={() => navigate(`/artworks/gallery`)}  >
          <KeyboardArrowLeft />Return
        </Button>
      </Box>
      <div
        style={{
          height: '90vh',
          maxWidth: '100vw',
          overflow: 'hidden',
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} >
          {/* LEFT IMAGE */}
          {!isMediumOrSmallScreen &&(
          <Grid item xl={2} lg={2}
            sx={{
              ...galleryStyles.leftContainer,
            }}>
              
              {/* {{next} ==1 &&( */}
                <img
                  src={images[prev].imgPath}
                  style={{
                    ...galleryStyles.prevImage
                  }}
                />
            {/* )} */}
          </Grid>
          )}
          {/* CENTER IMAGE */}
          <Grid item xs={12} md={12} xl={8} lg={8}
            sx={{
              ...galleryStyles.container,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <img
              src={images[activeStep].imgPath}
              style={{
                ...galleryStyles.imgDetails,
                marginBottom: '10px',
              }}
            />
          </Grid>

          {/* RIGHT IMAGE */}
          {!isMediumOrSmallScreen && (
          <Grid item xl={2} lg={2}
            sx={{
              background: 'blue',
              display: 'flex',
              ...galleryStyles.rightContainer, ...galleryStyles.container, alignItems: 'center'
            }}>
            <img
              src={images[next].imgPath}
              style={{
                ...galleryStyles.prevImage,
                position: 'relative',
              }}
            />
          </Grid>
          )}
        </Grid>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2,  }}>
        <Button size="small" sx={{color:'white'}} onClick={handleBack}  >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Previous
        </Button>
        {!isMediumOrSmallScreen && (
        <Typography variant="h4" color="white" >
              {images[activeStep].label} {next}
            </Typography>
        )}
        {isMediumOrSmallScreen && (
        <Typography variant="h5" color="white" >
              {images[activeStep].label}
            </Typography>
        )}
        <Button size="small" sx={{color:'white'}} onClick={handleNext}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      </Box>
    </Container>
  );
}

export default Details;
