import React from "react";
import { Container, Typography, useMediaQuery, Card, CardMedia, CardContent, Grid, Box, Button } from "@mui/material";
import style from "../../styles/style";
import ArtsImage from "../../images/scarcetti.png";
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
                            <Button type="button" onClick={() => navigate("/")}>
                                <Card sx={projectsStyles.card}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={ArtsImage}
                                        alt="arts"
                                        sx={projectsStyles.img}
                                    />
                                    <CardContent sx={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))' }}>
                                        <Typography variant="h6" color="white" align="center">
                                            Artworks
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} justifyContent="center" sx={{ display: 'flex', justifyContent: 'center' }} >
                        <Button type="button" onClick={() => navigate("/")}>
                            
                             <Card sx={projectsStyles.card}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={ArtsImage}
                                    alt="arts"
                                    sx={projectsStyles.img}
                                />
                                <CardContent sx={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))' }}>
                                    <Typography variant="h6" color="white" align="center">
                                        UX/UI Designs
                                    </Typography>
                                </CardContent>
                            </Card>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} justifyContent="center" sx={{ display: 'flex', justifyContent: 'center' }} >
                        <Button type="button" onClick={() => navigate("/")}>

                             <Card sx={projectsStyles.card}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={ArtsImage}
                                    alt="arts"
                                    sx={projectsStyles.img}
                                />
                                <CardContent sx={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))' }}>
                                    <Typography variant="h6" color="white" align="center">
                                        Websites
                                    </Typography>
                                </CardContent>
                            </Card>
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Container>
    );
};

export default Projects;
