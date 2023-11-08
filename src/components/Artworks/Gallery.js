

import React from "react";
import { Container, Typography, useMediaQuery, Card, CardMedia, CardContent, Grid } from "@mui/material";
import style from "../../styles/style";
import BackgroundImage from "../../images/test.jpg";
import BackgroundImage1 from "../../images/scarcetti.png";

const Gallery = () => {
    const globalStyle = style.globalStyles;
    const galleryStyles = style.galleryStyles;

    const xsWidth = useMediaQuery('(max-width:899px)');
    const fontSize = xsWidth ? "5px" : "2rem";

    return (
        <Container maxWidth="false" sx={{ minHeight: "100vh", marginTop: "var(--drawer-width)" ,}}>
            <Typography variant="h6" color="white" align="center">
                                            Artworks
                                        </Typography>
           {/*  <Container sx={globalStyle.container} maxWidth="md"> */}
              {/*   <Container
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        // padding: '10px',
                    }}
                > */}
                    <Grid container spacing={1}>
                        {[BackgroundImage, BackgroundImage1, BackgroundImage,BackgroundImage, BackgroundImage1, BackgroundImage,BackgroundImage, BackgroundImage1, BackgroundImage, ].map((image, index) => (
                            <Grid item xs={6} sm={3} md={2.4} lg={2} xl={1.5} key={index} justifyContent="center" sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Card sx={{ ...galleryStyles.card, backgroundImage: `url(${image})` }}>
                                    <CardContent sx={{ ...galleryStyles.title, }}>
                                        <Typography variant="body2" color="white">
                                            TEST
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                {/* </Container> */}
           {/*  </Container> */}
        </Container>
    );
};

export default Gallery;
