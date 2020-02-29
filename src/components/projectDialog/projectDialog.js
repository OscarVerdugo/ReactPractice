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
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import {TableBody, Table, TableContainer, TableHead, TableCell, TableRow, Paper} from "@material-ui/core";

import IconLaptop from "@material-ui/icons/Laptop";
import IconPhone from "@material-ui/icons/PhoneAndroid";

import ButtonMenu from "../buttonMenu/buttonMenu.js";

const lstWeb = [
  {
    name: "angular",
    description: "AngularJS"
  },
  {
    name: "loopback",
    description: "LoopbackJS"
  }
];
const lstMovile = [
  {
    name: "apple",
    description: "IOS"
  },
  {
    name: "android",
    description: "Android OS"
  }
];

const lstCollaborators = [
  {
    name: "Elizabeth Olsen",
    jobTitle: "dev",
    tasks: [
      {
        id: 1,
        desc: "A4-1",
        status:1
      },
      {
        id: 2,
        desc: "B6-2",
        status:2
      }
    ]
  },
  {
    name: "Elizabeth Olsen",
    jobTitle: "dev",
    tasks: [
      {
        id: 1,
        desc: "A4-1",
        status:1
      },
      {
        id: 2,
        desc: "B6-2",
        status:2
      }
    ]
  },
  {
    name: "Elizabeth Olsen",
    jobTitle: "dev",
    tasks: [
      {
        id: 1,
        desc: "A4-1",
        status:1
      },
      {
        id: 2,
        desc: "B6-2",
        status:2
      }
    ]
  },
  {
    name: "Elizabeth Olsen",
    jobTitle: "dev",
    tasks: [
      {
        id: 1,
        desc: "A4-1",
        status:1
      },
      {
        id: 2,
        desc: "B6-2",
        status:2
      }
    ]
  },{
    name: "Elizabeth Olsen",
    jobTitle: "dev",
    tasks: [
      {
        id: 1,
        desc: "A4-1",
        status:1
      },
      {
        id: 2,
        desc: "B6-2",
        status:2
      }
    ]
  },
  {
    name: "Elizabeth Olsen",
    jobTitle: "dev",
    tasks: [
      {
        id: 1,
        desc: "A4-1",
        status:1
      },
      {
        id: 2,
        desc: "B6-2",
        status:2
      },
      {
        id: 2,
        desc: "B6-2",
        status:2
      }
    ]
  },
  {
    name: "Elizabeth Olsen",
    jobTitle: "dev",
    tasks: [
      {
        id: 1,
        desc: "A4-1",
        status:1
      },
      {
        id: 2,
        desc: "B6-2",
        status:2
      },
      {
        id: 2,
        desc: "B6-2",
        status:2
      },
      {
        id: 2,
        desc: "B6-2",
        status:2
      }
    ]
  }
];

const ProjectDialog = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popText, setPopText] = React.useState("");

  const handlePopoverOpen = (txt, event) => {
    console.log("mouse enter");
    setPopText(txt);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    console.log("mouse leave");
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const classes = Styles(props);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth={true}
      maxWidth={"sm"}
      className={classes.dialog}
    >
      <DialogTitle className={classes.dialogTitle}>{"Example app"}</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <div className={classes.dialogContentHeader}>
          <img
            className={classes.dialogHeaderAvatar}
            alt="avatar"
            src="/images/coppel.png"
          />
          <span className={classes.dialogHeaderText}>
            <h3 className={classes.dialogHeaderClientName}>Coppel</h3>
            <span className={classes.dialogHeaderDeliveryDate}>
              Delivery 27/07/1999
            </span>
            <span className={classes.dialogHeaderDescription}>
              i am a description of the project. i am a description of the
              project. i am a description of the project. i am a description of
              the project. i am a description of the project. i am a description
              of the project. i am a description of the project. i am a
              description of the project.
            </span>
          </span>
        </div>
        {/* <div className={classes.dialogTechnologies}>
          {lstWeb.length > 0 ? (
            <span>
              <IconLaptop style={{ fontSize: "25px" }} />
              {lstWeb.map(icon => (
                <img
                  src={`/icons/${icon.name}-logo.png`}
                  alt={icon.name}
                  className={classes.tecLogo}
                  onMouseEnter={handlePopoverOpen.bind(this, icon.description)}
                  onMouseLeave={handlePopoverClose}
                />
              ))}
            </span>
          ) : null}
          {lstMovile.length > 0 ? (
            <span>
              <IconPhone style={{ fontSize: "25px" }} />
              {lstMovile.map(icon => (
                <img
                  src={`/icons/${icon.name}-logo.png`}
                  alt={icon.name}
                  className={classes.tecLogo}
                  onMouseEnter={handlePopoverOpen.bind(this, icon.description)}
                  onMouseLeave={handlePopoverClose}
                />
              ))}
            </span>
          ) : null}
           <IconPhone style={{ fontSize: "25px" }}/>
            <img src="/svg/apple-icon.svg" alt="reactlogo" width="25px" height="25px"></img>
        </div> */}
        <div className={classes.dialogCollaborators}>
          <span className={classes.dialogCollaboratorsTitle}>
            Collaborators
          </span>
          <div className={classes.dialogCollaboratorsList}>
            <TableContainer component={Paper} elevation={0}>
              <Table className={classes.table} size="small" stickyHeaders>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">Name</TableCell>
                    <TableCell align="right" padding="checkbox">Job title</TableCell>
                    <TableCell align="center" padding="checkbox">Tasks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lstCollaborators.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.jobTitle}</TableCell>
                      <TableCell align="center"><ButtonMenu tasks={row.tasks}/></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Close</Button>
      </DialogActions>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography variant="body1">{popText}</Typography>
      </Popover>
    </Dialog>
  );
};

ProjectDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

export default ProjectDialog;
