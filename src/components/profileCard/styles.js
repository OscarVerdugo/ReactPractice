import { makeStyles } from "@material-ui/styles";

export default makeStyles({
    // card:{
    //     height:"200px"
    // },
    infoContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    infoBadge:{
        alignSelf:"flex-end",
    },
    title:{
        // marginTop:"-20px",
    },
    subtitle:{
        marginTop:"-10px",
        paddingLeft:"5px",
        color:"#9e9e9e"
    },
    scoreContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    score:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    scoreSubtitle:{
        marginRight:"5px"
    },
    expInfo:{
        fontSize:"0.9em",
        color:"#9e9e9e"
    },
    photoContainer:{
        display:"flex",
        alignItems:"center"
    },
    fab:{
        float:"right",
        top:-60,
        left:25
    }
});