import React from "react";
import { Container, Typography, Button } from "@mui/material";
import homeStyles from "../../styles/homeStyles";

const Home = () => {
    const classes = homeStyles;

    return (
        <Container maxWidth="false" sx={{ minHeight: "100vh", marginTop: "var(--drawer-width)" }}>
            <Container sx={{ ...classes.container, maxWidth: "md" }}>
            <Typography variant="h1" align="center">
                    <span style={classes.textTitle}> Home </span>
                    <span style={classes.textWithBackground}>Page</span>
                </Typography>
                <Typography align="center" variant="caption" sx={classes.normalText}>
                    Lorem ipsum dolor sit amet consectetur.
                </Typography>
                <Button variant="outlined" sx={{ ...classes.outline,  marginTop: '20px', display: 'block', margin: '0 auto' }}>
                    <Typography variant="body1" sx={classes.buttonText}>
                        EXPLORE
                    </Typography>
                </Button>
            </Container>
        </Container>
    );
};

export default Home;
