import {makeStyles} from "@material-ui/core/styles";


export const Styles = props =>
  makeStyles(theme => ({
    root: {
        padding: "3em 1em"
    },
    item:{
        margin:"10px",
        cursor:"pointer"
    },
    fabButton:{
      position:"fixed",
      bottom:"30px",
      right:"30px"
    }
  }))();
