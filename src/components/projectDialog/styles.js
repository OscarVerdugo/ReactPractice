import {makeStyles} from "@material-ui/core/styles";

const styles = (props) => makeStyles(theme =>({
    dialogContent:{
        display:"flex",
        flexDirection:"column",
        width:"80%",
        justifyContent:"center"
    },
    dialogContentHeader:{
        display:"flex",
        flexDirection:"row",
        margin:"10px 0px"
    },
    dialogHeaderAvatar:{
        minWidth:"200px",
        maxWidth:"200px",
        height:"200px",
        borderRadius:"10px"
    },
    dialogHeaderText:{
        margin:"15px 15px",
        display:"flex",
        flexDirection:"column"
    },
    dialogHeaderClientName:{
        fontSize:"1.2em",
        padding:"0px",
        margin:"0px"
    },
    dialogHeaderDeliveryDate:{
        fontSize:"0.9em",
        color:"rgba(0,0,0,0.5)",
        paddingBottom:"5px"
    },
    dialogHeaderDescription:{
        fontSize:"0.8em",
        color:"rgba(0,0,0,0.5)",
        textAlign:"justify"
    },
    dialogTechnologies:{
        display:"flex",
        flexDirection:"row",
        "& *":{
            padding:"0px 5px",
            color:"rgba(0,0,0,0.5)"
        }

    }
}))();

export default styles;