import React from 'react'
import Styles from "./styles";
import {TableBody, Table, TableContainer, TableHead, TableCell, TableRow, Paper} from "@material-ui/core";
import ButtonMenu from "../../components/buttonMenu/buttonMenu.js";
export const ProjectDetailPage = (props) => {
    const classes = Styles();
    return (
        <div className={classes.root}>
            <h2>{`${props.project.name} - details`}</h2>
            <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" stickyHeaders>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">Name</TableCell>
                    <TableCell align="right" padding="checkbox">Job title</TableCell>
                    <TableCell align="center" padding="checkbox">Tasks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.project.lstCollaborators.map(row => (
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
    )
}
