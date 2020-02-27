import React from "react";
import "./styles.css";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  LinearProgress,
  // Fab,
  Badge
} from "@material-ui/core";
import { lighten, withStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
import styles from "./styles.js";

export default () => {
  const classes = styles();

  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten("#616161", 0.5)
    },
    bar: {
      borderRadius: 20,
      backgroundColor: "#616161"
    }
  })(LinearProgress);

  const InfoSection = (media) => {
    console.log(media);
    return (
      <div>
        <Grid container direction="column" className={classes.infoContainer}>
          <Grid item className={classes.infoBadge}>
            <Chip color="secondary" label="ADMIN" />
          </Grid>

          <Grid item>
            <Typography variant="h3" className={classes.title}>
              Robert
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.subtitle}>Developer</Typography>
          </Grid>
          <Grid item className={classes.scoreContainer}>
            <div className={classes.score}>
              <Typography variant="body1" className={classes.scoreSubtitle}>
                LV
              </Typography>
              <Typography variant="h6">
                99
              </Typography>
            </div>
            <div className={classes.score}>
              <Typography variant="body1" className={classes.scoreSubtitle}>
                PTS
              </Typography>
              <Typography variant="h6" >
                231
              </Typography>
            </div>
          </Grid>
          <div>
            <Typography variant="body1">Exp.</Typography>
            <BorderLinearProgress
              variant="determinate"
              color="secondary"
              value={50}
            />
            <Typography variant="body1" className={classes.expInfo}>
              250/500
            </Typography>
          </div>
        </Grid>
      </div>
    );
  };

  return (
    <div>
<Card className={classes.card}>
        <CardContent>
          <Grid container direction="row" spacing={0}>
            <Grid item xs={4} className={classes.photoContainer}>
              <Badge
                color="secondary"
                overlap="circle"
                badgeContent=" "
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
              >
                <img
                  className="photo"
                  src="https://cf.shopee.ph/file/e97a587ca0109d1d077f2683a82576da"
                  alt="profilePhoto"
                />
              </Badge>
            </Grid>
            <Grid item xs={8}>
              <InfoSection />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      
      {/* <Fab
        color="secondary"
        aria-label="logout"
        size="medium"
        className={classes.fab}
      >
        <Icon>exit_to_app</Icon>
      </Fab> */}
    </div>
  );
};
