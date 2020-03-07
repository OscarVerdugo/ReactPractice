import React from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core";

const styles = theme => ({
  root: {}
});

class NewProjectDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Dialog
          className={classes.dialog}
          open={this.props.open}
          onClose={this.props.onClose}
          fullWidth={true}
          maxWidth={"sm"}
        >
          <DialogTitle>New project</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default compose(withStyles(styles))(NewProjectDialog);
