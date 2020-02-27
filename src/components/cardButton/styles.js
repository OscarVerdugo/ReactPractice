import { makeStyles } from "@material-ui/styles";

const buttton = {
  position: "relative",
  borderRadius: "5px !important",
  width: "100% !important",
  height: "100%",
  "&:hover": {}
  // zIndex:4
};

const insideText = {
  color: "#fff",
  zIndex: 1,
  fontWeight: 300
};

const labelText = {
  color: "#2d3436",
  textAlign:"center",
  fontWeight: 300,
  letterSpacing: 3
};
const insideButtonHover = textColor => ({
        color: textColor ? textColor : "rgba(0,0,0,0.8)",
        backgroundColor: "rgba(255,255,255,0.4)",
        borderRadius: "5px",
        padding:"5px",
        transition:"0.2s"
});

export const Styles = props =>
  makeStyles(theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      alignItems: "center",
      height: props.height ? `${props.height}px` : "auto",
      width: props.width ? `${props.width}px` : "auto"
    },
    buttonBase: {
      display: "flex",
      flexWrap: "wrap",
      borderRadius: "5px",
      width: "100%",
      backgroundColor: props.color ? props.color : "#000",
      "&:hover $imageSrc": {
        opacity: 3,
        transition: "0.2s"
      },
      "&:hover $insideTextLg": {
        ...insideButtonHover(props.textHoverColor),
        fontWeight: 500,
      },
      "&:hover $insideTextSm": {
        ...insideButtonHover(props.textHoverColor),
      }
    },  
    buttonLg: {
      ...buttton,
      height: props.height ? `${props.height}px` : "auto",
      maxWidth: props.width ? `${props.width}px` : "auto"
    },
    buttonSm: {
      ...buttton,
      height: props.height ?`${props.height / 1.5}px`: "auto",
      minWidth: props.width ? `${props.width / 1.5}px`: "auto"
    },
    insideTextSm: {
      ...insideText,
      fontSize: "3em"
    },
    insideTextLg: {
      ...insideText,
      fontSize: "6em"
    },
    imageSrc: {
      position: "absolute",
      borderRadius: "5px !important",
      opacity: 0.5,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    labelTextLg: {
      ...labelText,
      fontSize: "2em"
    },
    labelTextSm: {
      ...labelText,
      fontSize: "1.25em",
      fontWeight: 350
    }
  }))();

