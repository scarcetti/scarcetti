import React from "react";
import { Container, Typography, Paper, Stack, Box, Grid } from "@mui/material";
import homeStyles from "../../styles/homeStyles";
import BackgroundImage from "../../images/test.jpg";
// import BackgroundImage from "../../images/prj1.jpg";
// import BackgroundImage from "../../images/prj2.png";

const Projects = () => {
    const classes = homeStyles;

    return (
        <Container maxWidth="false" sx={{ marginTop: "var(--drawer-width)" }}>
            <Container sx={classes.container} maxWidth="md">
                <Typography align="justify" variant="subtitle2" sx={classes.normalText}>
                    Projects
                </Typography>
                <Grid container spacing={2}>
                    {Array.from({ length: 1 }, (item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{background: 'red', }}  >
                            <Paper align="center"
                                sx={{
                                    position: 'relative',
                                    padding: '10px',
                                    height: '350px',
                                    backgroundImage: `url(${BackgroundImage})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    borderRadius: '7px',
                                    border: '2px solid rgba(255, 255, 255, 0.7)',
                                    "&:hover": {
                                        color: "transparent",
                                        backgroundImage: `url(${BackgroundImage})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        border: '5px solid rgba(255, 255, 255, 0.7)',
                                    },
                                }}
                            >
                                <Paper
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.45)',
                                        borderRadius: 'inherit',
                                    }}
                                >
                                    <Stack direction="column" alignItems="center" sx={{ width: '100%', zIndex: 1 }}>
                                        <Typography variant="h3" align="center"
                                            sx={{
                                                mt: 3, ...classes.prjTitle,
                                                fontSize: '2rem',
                                            }}>
                                            Magic Numbers Project
                                        </Typography>
                                        <Box sx={{
                                            background: 'rgba(0, 0, 0, 0.7)',
                                            position: 'absolute',
                                            bottom: 0,
                                            width: '100%',
                                            height: '50%',
                                            borderBottomLeftRadius: '7px',
                                            borderBottomRightRadius: '7px',
                                            padding: '10px',
                                        }}>
                                            <Typography variant="caption" align="center"
                                                sx={{
                                                    ...classes.normalText,
                                                    mt: 0.5,
                                                }}>
                                                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default Projects;
