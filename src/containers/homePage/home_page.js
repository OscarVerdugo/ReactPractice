import React from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";

import ProfileCard from "../../components/profileCard/profileCard.js";
import CustomCard from "../../components/cardButton/cardButton.js";
import Styles from "./styles.js";


const cards = [
  { 
    text :"Dashboard",
    url : process.env.PUBLIC_URL + "/images/store.jpg",
    width:350,
    height:225,
    route:"/dashboard"
  },
  {
    text :"Tasks",
    url : process.env.PUBLIC_URL + "/images/task.jpg",
    width:350,
    height:225,
    route:"/tasks"
  },
  {
    text :"Projects",
    url : process.env.PUBLIC_URL + "/images/project.jpg",
    width:350,
    height:225,
    route:"/projects"
  },
  {
    text :"Store",
    url : process.env.PUBLIC_URL + "/images/store.jpg",
    width:350,
    height:225,
    route:"/store"
  },
  {
    text :"Team",
    url : process.env.PUBLIC_URL + "/images/team.jpg",
    width:350,
    height:225,
    route:"/team"
  }
];


export default () => {
  const classes = Styles();
  const history = useHistory();

  const onNavigate = (route) =>{
    history.push(route);
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item md={6} sm={12}>
          <ProfileCard />
        </Grid>
        {cards.map(c =>(
          <Grid item md={6} sm={12} xs={12} key={c.text} onClick={()=>{onNavigate(c.route)}}>
          <CustomCard
            insideText={c.text}
            imageUrl={c.url}
            height={c.height}
            
            // width={c.width}
          />
        </Grid>
        ))}
      </Grid>
    </div>
  );
};
