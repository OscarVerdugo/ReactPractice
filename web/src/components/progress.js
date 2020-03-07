import React from "react";
import { withStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  root: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0,0,0,0.2)",
    borderRadius: "10px",
    width: "200px !important",
    height: "200px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "999"
  }
});

export class Progress extends React.Component {
  render() {
    const { classes } = this.props;
    return(
        <div className={classes.root}>
           <CircularProgress size={80} color="secondary"></CircularProgress>
         </div>
    );
  }
}

export default compose(withStyles(styles))(Progress);
