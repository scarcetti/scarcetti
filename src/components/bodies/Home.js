import React from "react";
import { Container, Typography, useMediaQuery, Grid, SvgIcon, Button } from "@mui/material";
import arrow from '@mui/icons-material/ArrowForwardIos';
import arrowExtended from '@mui/icons-material/ArrowForward';
import style from "../../styles/style";
import { navigate } from "gatsby";

const Home = () => {
    const xsWidth = useMediaQuery('(max-width:899px)');
    const bluePalette = style.BluePalette;
    const globalStyle = style.globalStyles;

    const typographyVariant = xsWidth ? "h5" : "h4";
    const typographyVariant1 = xsWidth ? "h4" : "h3";

    return (
        <Container maxWidth="false" sx={{ minHeight: "100vh", marginTop: "var(--drawer-width)" }}>
            <Container sx={{ ...globalStyle.container, maxWidth: "md" }}>
                <Typography align="center" variant={typographyVariant} sx={{ ...bluePalette.outlineText, transition: "font-size 0.3s" }}>
                    I'm
                </Typography>
                <Typography variant={typographyVariant1} align="center" style={bluePalette.textTitle}>
                    Rochen Virtucio
                </Typography>
                <Typography align="center" variant={typographyVariant} style={{ transition: "font-size 0.3s" }}>
                    <span style={bluePalette.outlineText}>but I go by </span>
                    <span style={bluePalette.textTitle}>Scarcetti </span>
                    <span style={bluePalette.outlineText}>on social media</span>
                </Typography>
                <Typography align="center" variant="subtitle1" sx={bluePalette.normalText} style={{ transition: "font-size 0.3s" }}>
                    I'm a digital artist, front-end developer, and a UX/UI designer
                </Typography>
                <Container
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px',
                    }}
                >
                <Grid container justifyContent="center" xs={12} sm={12} md={12}>
                    <Grid container item xs={6} sm={3} md={2} justifyContent="center">
                        <Button sx={bluePalette.normalText} type="button" onClick={() => navigate("/myProjects")}>
                            <SvgIcon component={arrow} sx={{ fontSize: '18px', color: '#0C6F9E' }} />
                            See my projects
                        </Button>
                    </Grid>
                    <Grid container item xs={6} sm={3} md={2} justifyContent="center">
                        <Button sx={bluePalette.normalText} >
                            <SvgIcon component={arrow} sx={{ fontSize: '18px', color: '#0C6F9E' }} />
                            More about me
                        </Button>
                    </Grid>
                </Grid>
                </Container>
            </Container>
        </Container>
    );
};

export default Home;
