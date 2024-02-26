import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container, Button, Typography, Grid, Card, useMediaQuery, CardMedia, CardContent } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import style from "../../styles/style";

import { navigate } from "gatsby";

import BackgroundImage from "../../images/ux_designs/test.png";
import BackgroundImage1 from "../../images/ux_designs/test1.jpg";
import BackgroundImage2 from "../../images/ux_designs/test2.jpg";

const images = [
  {
    label: 'Sunset',
    imgPath: BackgroundImage
  },
  {
    label: 'Sunset',
    imgPath: BackgroundImage1
  },
  {
    label: 'Cozy Drink',
    imgPath: BackgroundImage2
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

  const xsWidth = useMediaQuery('(max-width:600px)');
  const mdWidth = useMediaQuery('(max-width:1279px)');
  const fontSize = xsWidth ? "1.5rem" : "3rem";


  const isMediumOrSmallScreen = useMediaQuery(theme => theme.breakpoints.down('xl'));

  const handleNext = () => {
    setActiveStep(next);
  };

  const handleBack = () => {
    setActiveStep(prev);
  };

  return (
    <Container maxWidth="false"
      sx={{
        minHeight: "100vh",
        marginTop: "var(--drawer-width)",
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'middle',
          paddingTop: '10px',
          minHeight: '2vh'
        }}>
        <Button size="small"
          sx={{
            color: 'white',
            alignItems: 'center',
            backgroundColor: 'black'
          }}
          onClick={() => navigate(`/ux_designs/gallery`)}  >
          <KeyboardArrowLeft />Return
        </Button>
      </Box>
      <Container
        style={{
          // maxHeight: '90vh',
          maxWidth: '100vw',
          overflowY: 'auto',
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          background: 'yellow'
        }}
      >
        <Card sx={{ width: '100%',height:'100%', background: 'blue' }}>
          <CardMedia
            sx={{
              maxWidth: '100%',
              width: '100%',
              height: '90vh',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            image={images[0].imgPath}
            title="Landing"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" color="white" component="div" sx={{ fontSize: fontSize, marginLeft:-2}}>
              Scarcetti
            </Typography>
          </CardContent>
        </Card>

        {/*    <img
          src={images[0].imgPath}
          style={{
            maxHeight: '90vh',
            width: 'auto',
            maxWidth: '100%', 
            borderRadius: '5px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <Box sx={{background:'red', width:'90vw',   position: 'relative', justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'}}>

       <Typography variant="h3" color="white" sx={{ fontSize: fontSize, background:'red', width:'auto', maxWidth: '100%',  }}>
        Artworks
      </Typography>
        </Box> */}

      </Container>
      {/*   <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2,  }}>
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
      </Box> */}
    </Container>
  );
}

export default Details;
