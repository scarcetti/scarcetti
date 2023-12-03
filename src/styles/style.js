
import BackgroundImage from "../images/bg.jpg";
import BackgroundImage1 from "../images/artworks/test.jpg";
import test from "../images/artworks/scarcetti.png";



const globalStyles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
    },
    item: {
        position: 'relative',
        // padding: '10px',
        height: '350px',
        backgroundImage: `url(${BackgroundImage1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: '7px',
        border: '2px solid rgba(255, 255, 255, 0.7)',
        "&:hover": {
            color: "transparent",
            // backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: '5px solid rgba(255, 255, 255, 0.7)',
            borderRadius: '7px',
        },
    },
    itemTitleCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.45)',
        borderRadius: 'inherit',
    },
    itemTitleText: {
        color: "#ffffff",
        // fontFamily: 'Poppins',
        /*  "&:hover": {
            fontWeight:'bold',
        
        }, */
    },
    card: {
        position: 'relative',
        height: '250px',
        backgroundImage: `url(${test})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: '7px',
        border: '2px solid rgba(255, 255, 255, 0.7)',
    },
    title: {
        // maxWidth: 345,
        background: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderBottomLeftRadius: '3px',
        borderBottomRightRadius: '3px',
        padding: '10px',
    },
    normalText: {
        color: "#ffffff",
        textTransform: "none",
    },
};
const projectsStyles = {
   /*  card: {
        maxWidth: 345, 
        minWidth: 150, 
        height:'300',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'rgba(255, 255, 255, 0)'
    }, */
    card: {
        position: 'relative',
        width: '100%',
        height:'300px',
        display: 'flex',
        // backgroundImage: `url(${test})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: '3px',
        border: '1px solid rgba(255, 255, 255, 0.7)',
    },
    img: {
        opacity: 4, 
        height: '100%', 
        width:'100%',
        objectFit: 'scale-down',
        display: 'block',
    },
    title: {
        maxWidth: 345,
        background: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderBottomLeftRadius: '3px',
        borderBottomRightRadius: '3px',
        padding: '10px',
        justifyContent:'center',
        alignItems:'center'
    }
}
const galleryStyles = {
    
    card: {
    
        position: 'relative',
        height: '250px',
        width: '100%',
        // backgroundImage: `url(${test})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: '3px',
        border: '1px solid rgba(255, 255, 255, 0.7)',
        transition: "opacity 0.5s ease", 
        "&:hover": {
            transform: 'scale(1.05)',  // Optional: Add a scaling effect on hover
            "& .title": {
                opacity: 1,
            },
        },
    },
    title: {
        background: 'linear-gradient(30deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))',
        position: 'absolute',
        bottom: 0,
        // height:'80%',
        width: '100%',
        borderBottomLeftRadius: '7px',
        borderBottomRightRadius: '7px',
        padding: '10px',
        opacity:0,
        "&:hover": {
            opacity:'100',
            transition: ".5s ease",
        }
    },
    
    itemTitleCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.45)',
        borderRadius: 'inherit',
    },
    cardList: {
    
        position: 'relative',
        // height: '250px',
        width: '98%',
        // backgroundImage: `url(${test})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // borderRadius: '3px',
        // border: '1px solid rgba(255, 255, 255, 0.7)',
        transition: "opacity 0.3s ease", 
        "&:hover": {
            backgroundSize: "contain",
            // background: 'linear-gradient(30deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
            // backgroundImage: `url(${test})`,
            // transform: 'scale(1.1)',
        }
     
    },
    titleList: {
        background: 'linear-gradient(30deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
        // background: 'linear-gradient(30deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
        position: 'absolute',
        bottom: 0,
        height:'100%',
        width: '100%',
        borderBottomLeftRadius: '3px',
        borderBottomRightRadius: '3px',
        padding: '10px',
        transition: "opacity 0.5s ease", 
        "&:hover": {
            opacity:0,
            backgroundImage: `url(${test})`,
            backgroundSize: "contain",
        }
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'flex-end',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between'
    },
    dateStyle : {
        // alignItems:'flex-end',
        // justifyContent:'flex-end',
        fontSize:'1.2vh',
        fontWeight:'100'
    },
    imgDetails: {
        objectFit: 'scale-down', 
        width: '100%', 
        height: '100%', 
        // alignItems: 'center', 
        // justifyContent: 'center' 
    },

    prevImage:{
        // width: '5vw',
       
        height: '100%', 
    },
    container:{
        height: '80%', 
        width:'80%',
        alignItems: 'center', 
    },
    leftContainer:{
        backgroundSize:'contan',
        justifyContent: 'right',
        
    },
    rightContainer:{
        backgroundSize:'contain',
        alignItems: 'center', 
        justifyContent: 'left',
        background:'red',
        
    },
};
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
    SkyBlue: {
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
        fontFamily: 'Poppins',
        "&:hover": {
            color: "red"
        },
    },
    titles: {
        color: "#ffffff",
        fontFamily: 'Poppins',
        "&:hover": {
            color: "red"
        },
    },
    buttonText: {
        color: "#ffffff",
        fontFamily: 'Poppins',
        "&:hover": {
            color: "red",
            fontWeight: 'bold',
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
        fontFamily: 'Poppins',
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
const BluePalette = {
    test: {
        fontFamily:"OCRAEXT",
        color:'red'
    },
    normalText: {
        color: "#0C6F9E",
        textTransform: "none",

        /*  "&:hover": {
             color: "transparent",
             background: "linear-gradient(to left, orange, red)",
             backgroundClip: "text",
             WebkitBackgroundClip: "text",
             // color:"linear-gradient(to left, #F1FBFC, #F1FBFC)",
         }, */
    },
    textTitle: {
        zIndex: 1,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "#0C6F9E",
        transition: "font-size 0.3s",
        "&:hover": {
            color: "red",
            background: "linear-gradient(to left, orange, red)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
        },
    },
    outlineText: {
        color: "rgba(255, 255, 255, 0)",
        WebkitTextFillColor: "transparent",
        WebkitTextStroke: "0.0625rem #0C6F9E",

    },
    codeStyles: {
        color: "#0C6F9E",
        padding: 4,
        backgroundColor: "#7acdf4",
        fontSize: "1.5rem",
        borderRadius: 4,
        minWidth: '100%',
        fontWeight: '100'
        // alignItems:'center'
    }
}
const sunsetPalette = {
    normalText: {
        color: "#ffffff",
        textTransform: "none",

        /*  "&:hover": {
             color: "transparent",
             background: "linear-gradient(to left, orange, red)",
             backgroundClip: "text",
             WebkitBackgroundClip: "text",
             // color:"linear-gradient(to left, #F1FBFC, #F1FBFC)",
         }, */
    },
    textTitle: {
        zIndex: 1,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "#ffffff",
        transition: "font-size 0.3s",
        "&:hover": {
            color: "red",
            background: "linear-gradient(to left, orange, red)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
        },
    },
    outlineText: {
        color: "rgba(255, 255, 255, 0)",
        WebkitTextFillColor: "transparent",
        WebkitTextStroke: "0.0625rem #ffffff",

    },
    codeStyles: {
        color: "#ffffff",
        padding: 4,
        backgroundColor: "#66676C",
        fontSize: "1.5rem",
        borderRadius: 4,
        minWidth: '100%',
        fontWeight: '100'
        // alignItems:'center'
    }
}

export default {
    globalStyles,
    projectsStyles,
    homeStyles,
    BluePalette,
    sunsetPalette,
    galleryStyles
};
// backgroundSizes:
// auto: The default value. The background image is displayed in its original size.

// cover: The background image is scaled to cover the entire container, maintaining its aspect ratio. Some parts of the image might be cropped.

// contain: The background image is scaled to fit within the container while maintaining its aspect ratio. The entire image is visible, but there might be empty space within the container.

// length values (e.g., px, %, etc.): You can use specific length values to set the width and height of the background image. For example, background-size: 50% 50%; will make the background image cover 50% of the container's width and 50% of its height.

// cover/contain with multiple values: You can also use two values to specify separate horizontal and vertical sizes. For example, background-size: 50% 100%; will make the background image cover 50% of the container's width and 100% of its height.
