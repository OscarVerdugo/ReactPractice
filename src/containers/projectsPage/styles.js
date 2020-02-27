import {makeStyles} from "@material-ui/core/styles";


export const Styles = props =>
  makeStyles(theme => ({
    root: {
        padding: "3em 1em"
    },
    item:{
        margin:"10px"
    }
  }))();
