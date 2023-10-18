import React from "react";
import { Container, Typography, Button, Grid, SvgIcon, TextField, Box, useMediaQuery } from "@mui/material";
import homeStyles from "../../styles/homeStyles";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const LeftContent = () => {
    const classes = homeStyles;
    const test = useMediaQuery('(max-width:899px)');
    return (
        <Box>
            {test ? (
                <Typography variant="h3" align="justify" sx={{ fontSize: '2.5rem', mt: 2.5, }}>
                    <span style={classes.textTitle}> Do you have any </span>
                    <span style={classes.textWithBackground}>questions?</span>
                </Typography>
            ) : (
                <Typography variant="h3" align="justify" sx={{ fontSize: '3rem', mt: 3, }}>
                    <span style={classes.textTitle}> Do you have any </span>
                    <span style={classes.textWithBackground}>questions?</span>
                </Typography>
            )}

            <Typography justifyContent="center" alignItems="center" variant="caption">
                <span style={classes.normalText}>
                    We're always here to help you. Alternatively, you can contact
                    us through our social media below.
                </span>
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
                    <Grid item xs={2.2} sm={1.2} md={1.5} justifyContent="center">
                        <Button>
                            <SvgIcon component={FacebookIcon} sx={{ fontSize: '40px', color: 'white' }} />
                        </Button>
                    </Grid>
                    <Grid item xs={2.2} sm={1.2} md={1.5} justifyContent="center">
                        <Button>
                            <SvgIcon component={InstagramIcon} sx={{ fontSize: '40px', color: 'white' }} />
                        </Button>
                    </Grid>
                    <Grid item xs={2.2} sm={1.2} md={1.5} justifyContent="center">
                        <Button>
                            <SvgIcon component={TwitterIcon} sx={{ fontSize: '40px', color: 'white' }} />
                        </Button>
                    </Grid>
                    {/* <Grid item xs={2.2} sm={1.2} md={1.5} justifyContent="center">
                        <Button>
                            <SvgIcon component={GoogleIcon} sx={{ fontSize: '40px', color: 'white' }} />
                        </Button>
                    </Grid> */}
                    <Grid item xs={2.2} sm={1.2} md={1.5} justifyContent="center">
                        <Button>
                            <SvgIcon component={GitHubIcon} sx={{ fontSize: '40px', color: 'white' }} />
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
const RightContent = () => {
    const classes = homeStyles;

    return (
        <Box sx={{ padding: '20px', borderRadius: '4px', }}>
            <Grid container justifyContent="center"  >
                <Grid xs={12} md={10} >
                    <TextField
                        placeholder="Your name"
                        sx={{
                            backgroundColor: "rgba(232, 210, 255, 0.1)",
                            "& input": {
                                color: "white",
                            },
                            margin: "5px 0",
                            width: "100%",
                            borderRadius: '3.5px'
                        }}
                    />
                </Grid>
                <Grid xs={12} md={10}>
                    <TextField
                        placeholder="Email address"
                        sx={{
                            backgroundColor: "rgba(232, 210, 255, 0.1)",
                            "& input": {
                                color: "white",
                            },
                            margin: "5px 0",
                            width: "100%",
                            borderRadius: '3.5px'
                        }}
                    />
                </Grid>
                <Grid xs={12} md={10}>
                    <TextField
                        placeholder="Your message"
                        rows={4}
                        multiline
                        sx={{
                            backgroundColor: "rgba(232, 210, 255, 0.1)",
                            "& input": {
                                color: "white",
                            },
                            margin: "5px 0",
                            width: "100%",
                            borderRadius: '3.5px'
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
const ContactUs = () => {
    const classes = homeStyles;
    const isXs = useMediaQuery('(max-width:899px)');

    return (
        isXs ? (
            <Grid container sx={{ maxWidth: "false", marginTop: "var(--drawer-width)" }}>
                <Grid justifyContent="center" alignItems="center" item xs={12} md={6}>
                    <Container
                        sx={{
                            ...classes.container,
                            maxWidth: "100%",
                        }}
                    >
                        <LeftContent />
                        <RightContent />
                    </Container>
                </Grid>
            </Grid>
        ) : (
            <Grid container sx={{ maxWidth: "false", marginTop: "var(--drawer-width)" }}>
                <Grid justifyContent="center" alignItems="center" item xs={12} md={6}>
                    <Container
                        sx={{
                            ...classes.container,
                            maxWidth: "100%",
                        }}
                    >
                        <LeftContent />
                    </Container>
                </Grid>

                <Grid justifyContent="center" alignItems="center" item xs={12} md={6}>
                    <Container
                        sx={{
                            ...classes.container,
                            maxWidth: "100%",
                        }}
                    >
                        <RightContent />
                    </Container>
                </Grid>
            </Grid>

        )

    );
};

export default ContactUs;
