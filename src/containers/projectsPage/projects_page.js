import React from "react";
import { useMediaQuery } from "react-responsive";


import { Grid, Fab } from "@material-ui/core";

import { Styles } from "./styles.js";
import AddIcon from "@material-ui/icons/Add";
import CardButton from "../../components/cardButton/cardButton.js";
import ProjectDialog from "../../components/projectDialog/projectDialog.js";


let projects = [
  {
    id: 1,
    name: "Project 1",
    img: process.env.PUBLIC_URL + "/images/example.jpg"
  },
  {
    id: 2,
    name: "Project 2",
    img: process.env.PUBLIC_URL + "/images/example2.png"
  },
  {
    id: 10,
    name: "Project 2",
    img: process.env.PUBLIC_URL + "/images/example2.png"
  },
  {
    id: 11,
    name: "Project 2",
    img: process.env.PUBLIC_URL + "/images/example2.png"
  },
  {
    id: 12,
    name: "Project 2",
    img: process.env.PUBLIC_URL + "/images/example2.png"
  },
  {
    id: 13,
    name: "Project 2",
    img: process.env.PUBLIC_URL + "/images/example2.png"
  },
  {
    id: 14,
    name: "Project 2",
    img: process.env.PUBLIC_URL + "/images/example2.png"
  },
  {
    id: 3,
    name: "Example Project",
    img: process.env.PUBLIC_URL + "/images/no_image.png"
  },
  {
    id: 4,
    name: "React",
    img: process.env.PUBLIC_URL + "/images/react_logo.png"
  },
  {
    id: 5,
    name: "Fermat",
    img: "none"
  }
];

const ProjectPage = props => {
  const classes = Styles(props);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  
  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    console.log("close dialog");
    setOpen(false);
  };
  return (
    <div>
      <div className={classes.root}>
      <Grid container direction="row" spacing={10} justify="center">
        {projects.map(p => (
          <Grid item key={p.id} className={classes.item} onClick={handleOpenDialog}>
            <CardButton
              width={200}
              height={200}
              labelText={p.name}
              imageUrl={p.img}
              key={p.id}
            ></CardButton>
          </Grid>
        ))}
      </Grid>
      <Fab
        variant={isTabletOrMobile ? "round" : "extended"}
        size="large"
        color="primary"
        className={classes.fabButton}
      >
        <AddIcon />
        {isTabletOrMobile ? null : "New project"}
      </Fab>
    </div>
    <ProjectDialog open={open} onClose={handleCloseDialog}></ProjectDialog>
    </div>
  );
};

export default ProjectPage;
