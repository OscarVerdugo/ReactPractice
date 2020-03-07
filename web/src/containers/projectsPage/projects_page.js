import React from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import { Grid, Fab } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import CardButton from "../../components/cardButton/cardButton.js";
import ProjectDialog from "../../components/projectDialog/projectDialog.js";
import NewProjectDialog from "../../components/newProjectDialog.js";

const styles = theme => ({
  root: {
    padding: "3em 1em"
  },
  item: {
    margin: "10px",
    cursor: "pointer"
  },
  fabButton: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: 10
  }
});

export class Projects extends React.Component {
  history;
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: {},
      openProjectDetailModal: false,
      openNewProjectModal: false
    };
    this.history = this.props.history;
  }

  handleOpenProjectDetailDialog = p => {
    this.setState({ selectedProject: p });
    this.setState({ openProjectDetailModal: true });
  };
  handleOpenNewProjectDialog = () => {
    this.setState({ openNewProjectModal: true });
  };

  handleCloseProjectDetailDialog = () => {
    this.setState({ openProjectDetailModal: false });
  };
  handleCloseNewProjectDialog = () => {
    this.setState({ openNewProjectModal: false });
  };

  Navigate = id => {
    this.history.push(`/project/${id}/asd`);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <Grid container direction="row" spacing={10} justify="center">
            {this.props.projects.map(p => (
              <Grid
                item
                key={p.id}
                className={classes.item}
                onClick={() => {
                  this.handleOpenProjectDetailDialog(p);
                }}
              >
                <CardButton
                  subButtonIcon={<MenuIcon style={{ color: "#fff" }} />}
                  subButtonRoute="/home"
                  width={200}
                  height={200}
                  labelText={p.name}
                  imageUrl={p.img}
                  subButtonOnClick={() => {
                    this.Navigate(p.id);
                  }}
                  key={p.id}
                ></CardButton>
              </Grid>
            ))}
          </Grid>
          <Fab
            variant={"extended"}
            size="large"
            color="primary"
            className={classes.fabButton}
            onClick={this.handleOpenNewProjectDialog}
          >
            <AddIcon />
            New project
          </Fab>
        </div>
        <ProjectDialog
          open={this.state.openProjectDetailModal}
          onClose={this.handleCloseProjectDetailDialog}
          project={this.state.selectedProject}
        ></ProjectDialog>
        <NewProjectDialog
          open={this.state.openNewProjectModal}
          onClose={this.handleCloseNewProjectDialog}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({});

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Projects);
