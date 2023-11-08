import React from "react";
import { Container, Typography, useMediaQuery, Card, CardMedia, CardContent, Grid } from "@mui/material";
import style from "../../styles/style";
import BackgroundImage from "../../images/test.jpg";
import BackgroundImage1 from "../../images/scarcetti.png";

const Gallery = () => {
    const bluePalette = style.BluePalette;
    const sunsetPalette = style.sunsetPalette;
    const globalStyle = style.globalStyles;
    const galleryStyles = style.galleryStyles;

    const xsWidth = useMediaQuery('(max-width:899px)');
    const fontSize = xsWidth ? "5px" : "2rem";


    return (
        <Container maxWidth="false" sx={{ minHeight: "100vh", marginTop: "var(--drawer-width)" }}>
            <Container sx={globalStyle.container} maxWidth="md">
                <Container
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px',
                    }}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={4} justifyContent="center" sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Card sx={{ ...galleryStyles.card, backgroundImage: `url(${BackgroundImage})` }}>
                                <CardMedia
                                        component="img"
                                        height="194"
                                        image={BackgroundImage}
                                        alt="Image"
                                        // sx={galleryStyles.card}
                                    />
                                <CardContent sx={{ ...globalStyle.title, }}>
                                    <Typography variant="body2" color="white">
                                        TEST
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ ...galleryStyles.card, backgroundImage: `url(${BackgroundImage1})` }}>
                                <CardContent sx={{ ...globalStyle.title, }}>
                                    <Typography variant="body2" color="white">
                                        TEST
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ ...galleryStyles.card, backgroundImage: `url(${BackgroundImage1})` }}>
                                <CardContent sx={{ ...globalStyle.title, }}>
                                    <Typography variant="body2" color="white">
                                        WTF
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Container>
    );
};

export default Gallery;
