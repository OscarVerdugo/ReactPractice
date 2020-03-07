import { makeStyles }   from "@material-ui/core/styles";

export const Styles = props =>
  makeStyles(theme => ({
      root:{
        padding: "3em 1em",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center"
      },
      container:{
        display:"flex",
        flexDirection:"column",
        padding:"1.5em"
      },
      header:{
        display:"flex",
        flexDirection:"row",
        alignContent:"center",
        "& *":{
          // marginRight:"0.5em"
        }
      }

   }))();