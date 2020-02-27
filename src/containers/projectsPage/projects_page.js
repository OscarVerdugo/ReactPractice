import React from "react";
import { Grid } from "@material-ui/core";
import CardButton from "../../components/cardButton/cardButton.js";
import { Styles} from "./styles.js";

let projects = [{
    id:1,
    name:"Project 1",
    img:process.env.PUBLIC_URL + "/images/example.jpg"},
    {
      id:2,
      name:"Project 2",
      img:process.env.PUBLIC_URL + "/images/example2.png",
  },
  {
    id:10,
    name:"Project 2",
    img:process.env.PUBLIC_URL + "/images/example2.png",
},
{
  id:11,
  name:"Project 2",
  img:process.env.PUBLIC_URL + "/images/example2.png",
},
{
  id:12,
  name:"Project 2",
  img:process.env.PUBLIC_URL + "/images/example2.png",
},
{
  id:13,
  name:"Project 2",
  img:process.env.PUBLIC_URL + "/images/example2.png",
},
{
  id:14,
  name:"Project 2",
  img:process.env.PUBLIC_URL + "/images/example2.png",
},{
      id:3,
      name:"Example Project",
      img:process.env.PUBLIC_URL + "/images/no_image.png",
  },{
      id:4,
      name:"React",
      img:process.env.PUBLIC_URL + "/images/react_logo.png",
  },{
      id:5,
      name:"Fermat",
      img:"none",
  }
  ];

const ProjectPage = (props) => {
  const classes = Styles(props);
    
  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={10}  justify="center" alignItems="flex-start">
          {projects.map((p) =>
            (<Grid item key={p.id} className={classes.item}>
              <CardButton width={200} height={200} labelText={p.name} imageUrl={p.img} key={p.id}></CardButton>
              </Grid>)
          )}
      </Grid>
    </div>
  );
};

export default ProjectPage;






