import React from "react";
import { Container, Typography, useMediaQuery, Card, CardContent, Grid } from "@mui/material";
import style from "../../styles/style";
import BackgroundImage from "../../images/ux_designs/royalty.png";
import BackgroundImage1 from "../../images/artworks/tree1.gif";
import BackgroundImage2 from "../../images/artworks/drenks.png";
import BackgroundImage3 from "../../images/artworks/prj1.jpg";
import BackgroundImage4 from "../../images/artworks/frog_under_the_tree.png";
import { navigate } from "gatsby";

const GalleryGrid = () => {
  const globalStyle = style.globalStyles;
  const galleryStyles = style.galleryStyles;

  const xsWidth = useMediaQuery('(max-width:600px)');
  const smWidth = useMediaQuery('(max-width:899px)');
  const mdWidth = useMediaQuery('(max-width:1279px)');
  const lgWidth = useMediaQuery('(max-width:1919px)');
  const fontSize = xsWidth ? "1.5rem" : "1.8rem";
  let cardHeight;

  if (xsWidth) {
    cardHeight = "18vh";
  } else if (mdWidth) {
    cardHeight = "24vh";
  } else {
    cardHeight = "34vh";
  }

  const artworks = [
    { title: "Clouds", year:"2021", image: BackgroundImage },
    { title: "Tree", year:"2021", image: BackgroundImage1 },
    { title: "Cozy Drink", year:"2021", image: BackgroundImage2 },
    { title: "Grass Field", year:"2021", image: BackgroundImage3 },
    { title: "Cozy Frog", year:"2021", image: BackgroundImage4 },
  ];

  return (
    <Container maxWidth="false" sx={{ minHeight: "100vh", marginTop: "var(--drawer-width)" , }}>
      <Typography variant="h2" color="white" align="center">
        UX/UI Designs
      </Typography>
      <Container maxWidth="false" style={{ ...globalStyle.scrollbars, maxHeight: '92vh', overflowY: 'auto' ,}}>
        <Grid container spacing={1} >
          {artworks.map((artwork, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} 
              sx={{ 
                display: { xs: 'none', sm: 'none', md: 'flex' }, 
                justifyContent: 'left',
                
              }}>
                <Card sx={{background:'transparent', boxShadow:'none'}}>
                  <CardContent>
                  <Typography variant="h4" color="white">
                  {artwork.title}
                </Typography>
                <Typography variant="body2" color="white">
                  {artwork.year}
                </Typography>
                  </CardContent>
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} justifyContent="center" 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                
              }}>
                <Card sx={{ ...galleryStyles.cardList, backgroundImage: `url(${artwork.image})`, height: cardHeight }} onClick={() => navigate("/artworks/details/")}>
                  <CardContent sx={{ ...galleryStyles.titleList }}>
                    {smWidth && (
                      <React.Fragment>
                        <Typography variant="h4" color="white" sx={{ fontSize: fontSize }}>
                          {artwork.title}
                        </Typography>
                        <Typography color="white" sx={{ ...galleryStyles.dateStyle }}>
                          2023
                        </Typography>
                      </React.Fragment>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default GalleryGrid;


// xs (Extra Small): This is the breakpoint for screens smaller than 600px.
// sm (Small): This is the breakpoint for screens larger than or equal to 600px.
// md (Medium): This is the breakpoint for screens larger than or equal to 960px.
// lg (Large): This is the breakpoint for screens larger than or equal to 1280px.
// xl (Extra Large): This is the breakpoint for screens larger than or equal to 1920px.

