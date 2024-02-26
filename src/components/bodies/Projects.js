import React from "react";
import { Container, Typography, useMediaQuery, Card, CardMedia, CardContent, Grid, Box, Button } from "@mui/material";
import style from "../../styles/style";
import ArtsImage from "../../images/artworks/scarcetti.png";
import UXImage from "../../images/ux_cover.png";
import imgWebsiteBlue from "../../images/website_blue.png";
import { navigate } from "gatsby";

// import ocraext from '../../fonts/OCRAEXT.otf';
// import BackgroundImage from "../../images/test.jpg";

const Projects = () => {
    const bluePalette = style.BluePalette;
    const sunsetPalette = style.sunsetPalette;
    const globalStyle = style.globalStyles;
    const projectsStyles = style.projectsStyles;

    const xsWidth = useMediaQuery('(max-width:899px)');
    const fontSize = xsWidth ? "5px" : "2rem";

    

    return (
        <Container maxWidth="false" sx={{ minHeight: "100vh", marginTop: "var(--drawer-width)" }}>
            <Container sx={globalStyle.container} maxWidth="md">
                <code align="center" style={bluePalette.codeStyles}>/Projects</code>
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
                            <Card 
                                sx={{ ...projectsStyles.card, backgroundImage: `url(${ArtsImage})` }} 
                                onClick={() => navigate("/artworks/gallery/")}
                            >
                                <CardContent sx={{ ...projectsStyles.title, }}>
                                    <Typography variant="body2" color="white">
                                        Artworks
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} justifyContent="center" sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Card 
                                sx={{ ...projectsStyles.card, backgroundImage: `url(${UXImage})` }} 
                                onClick={() => navigate("/ux_designs/gallery/")}
                            >
                                <CardContent sx={{ ...projectsStyles.title, }}>
                                    <Typography variant="body2" color="white">
                                        UX/UI Designs
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} justifyContent="center" sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Card 
                                sx={{ ...projectsStyles.card, backgroundImage: `url(${imgWebsiteBlue})` }} 
                                onClick={() => navigate("/artworks/gallery/")}
                            >
                                <CardContent sx={{ ...projectsStyles.title, }}>
                                    <Typography variant="body2" color="white">
                                        Websites
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

export default Projects;
