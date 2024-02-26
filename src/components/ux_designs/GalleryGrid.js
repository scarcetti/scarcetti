
import React, { useState } from "react";
import { Container, Typography, useMediaQuery, Card, CardMedia, CardContent, Grid } from "@mui/material";
import style from "../../styles/style";
import BackgroundImage from "../../images/ux_designs/royalty.png";
import BackgroundImage1 from "../../images/ux_designs/foyo.jpg";
import BackgroundImage2 from "../../images/ux_designs/mint_magic.png";
import BackgroundImage3 from "../../images/artworks/scarcetti.png";
import { navigate } from "gatsby";

const GalleryGrid = () => {
    const { globalStyles, galleryStyles } = style;
    
    const xsWidth = useMediaQuery('(max-width:899px)');
    const getResponsiveFontSize = () => (xsWidth ? "5px" : "2rem");
    const [artworks, ] = useState([BackgroundImage, BackgroundImage1, BackgroundImage2, BackgroundImage3,]);

    return (
        <Container maxWidth={false} sx={{ minHeight: "100vh", marginTop: "var(--drawer-width)" }}>
            <Typography variant="h6" color="white" align="center" aria-label="Artworks heading">
                UX/UI Designs
            </Typography>
            <Grid container spacing={1}>
                {artworks.map((image, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={2} justifyContent="center" sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card sx={{ ...galleryStyles.card, backgroundImage: `url(${image})` }} onClick={() => navigate(`/ux_designs/details`)}>
                            <CardContent sx={galleryStyles.title}>
                                <Typography variant="body2" color="white">
                                    TEST
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default GalleryGrid;
