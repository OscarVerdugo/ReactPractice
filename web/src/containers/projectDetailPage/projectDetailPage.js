import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import { connect } from "react-redux";
import { Styles } from "./styles";
import {
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  Card,
  Button,
  Typography
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ButtonMenu from "../../components/buttonMenu/buttonMenu.js";
export const ProjectDetailPage = props => {
  const classes = Styles();
  const history = useHistory();
  const project = props.projects.find(x => x.id === +props.match.params.id);
  const [taskSelected, setTaskSelected] = useState(-1);

  return (
    <div className={classes.root}>
      <Card className={classes.container}>
      <div className={classes.header}>
      <Button size="small" onClick={()=>{history.goBack()}}>Back</Button>
        <Typography variant="h3">{`${project.name} > tasks`}</Typography>
      </div>
        <div>
          <TableContainer component={Paper} elevation={0}>
            <Table className={classes.table} size="small" stickyHeaders>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">Name</TableCell>
                  <TableCell align="right" padding="checkbox">
                    Job title
                  </TableCell>
                  <TableCell align="center" padding="checkbox">
                    Tasks
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {project.collaborators &&
                  project.collaborators.map(row => {
                    
                    return (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.jobTitle}</TableCell>
                        <TableCell align="center">
                          <ButtonMenu tasks={row.tasks} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailPage);
