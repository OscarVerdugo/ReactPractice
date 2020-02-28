import React from "react";
import Styles from "./styles.js";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconLaptop from '@material-ui/icons/Laptop';
import IconPhone from '@material-ui/icons/PhoneAndroid';



const ProjectDialog = props => {
  const classes = Styles(props);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth={true}
      maxWidth={'sm'}
    >
      <DialogTitle className={classes.dialogTitle}>{"Example app"}</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <div className={classes.dialogContentHeader}>
          <img className={classes.dialogHeaderAvatar} alt="avatar" src="/images/coppel.png"/>
          <span className={classes.dialogHeaderText}>
            <h3 className={classes.dialogHeaderClientName}>Coppel</h3>
            <span className={classes.dialogHeaderDeliveryDate}>
            Delivery 27/07/1999
            </span>
            <span className={classes.dialogHeaderDescription}>
            i am a description of the project. i am a description of the project. i am a description of the project. i am a description of the project. i am a description of the project. i am a description of the project. i am a description of the project. i am a description of the project. 
            </span>
          </span>
        </div>
        <div className={classes.dialogTechnologies}>
            <IconLaptop style={{ fontSize: "30px" }}/>
            <img src="/svg/android-icon.svg" alt="reactlogo" width="30px" height="30px"></img>
            <IconPhone style={{ fontSize: "30px" }}/>
            <img src="/svg/apple-icon.svg" alt="reactlogo" width="30px" height="30px"></img>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

ProjectDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

export default ProjectDialog;
