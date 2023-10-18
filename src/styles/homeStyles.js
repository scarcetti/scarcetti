import BackgroundImage from "../images/3.jpg";
const homeStyles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
    },
    textWithBackground: {
        position: "relative",
        zIndex: 1,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    normalText: {
        color: "#ffffff",
        fontFamily:'Segoe UI',
        "&:hover": {
            color:"red"
        },
    },
    titles: {
        color: "#ffffff",
        fontFamily:'Segoe UI',
        "&:hover": {
            color:"red"
        },
    },
    buttonText: {
        color: "#ffffff",
        fontFamily:'Segoe UI',
        "&:hover": {
            color:"red",
            fontWeight:'bold',
            position: "relative",
            zIndex: 1,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundImage: `url(${BackgroundImage})`,
           /*  backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "2px",
            border: "2px solid transparent",
            borderImage: "linear-gradient(to left, #b8e4ff, #905fdd)", */
        },
    },
    prjTitle: {
        color: "#ffffff",
        fontFamily:'Segoe UI',
       /*  "&:hover": {
            fontWeight:'bold',
        }, */
    },
    textTitle: {
        backgroundImage: "linear-gradient(to top, #725ce0,#b564d9, #ee609c )",
        zIndex: 1,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
    },
    outline: {
        borderRadius: "2px",
        background: "none",
        zIndex: 1,
        color: "white",
        border: "2px solid transparent",
        padding: "10px 50px",
        cursor: "pointer",
        borderImage: "linear-gradient(to left, #242c5d, #d062bc)",
        borderImageSlice: "1",
        transition: "border-color .5s ease",
        "&:hover": {
            borderRadius: "2px",
            border: "2px solid transparent",
            borderImage: "linear-gradient(to left, #b8e4ff, #905fdd)",
            // borderImage: "linear-gradient(to top, rgb(161, 67, 161), rgb(178, 216, 255))",
            borderImageSlice: "1",
        },
        "&:active": {
            // borderColor: "linear-gradient(to top,  #0E051C, #0D051B)",
            border: "2px solid linear-gradient(to top,  #0E051C, #0D051B)",
            // borderImage: "linear-gradient(to top,  #0E051C, #0D051B)",
        },
    },
    activeStyle: {
        borderImage: "linear-gradient(to top, red, #FF5733) 1",
    },
    boxShadow: 24,
};
const testStyle = {
    normalText: {
        color: "green",
    },
}

export default homeStyles;
