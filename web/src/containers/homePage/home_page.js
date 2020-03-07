import React from "react";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";
import compose from "recompose/compose";

import ProfileCard from "../../components/profileCard/profileCard.js";
import CustomCard from "../../components/cardButton/cardButton.js";
import Progress from "../../components/progress.js";

import { getDashboardButtons } from "../../api/web/build.js";

const styles = theme => ({
  root: {
    margin: "20px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      presentProgress: false
    };
  }

  componentDidMount() {
    this.setState({ presentProgress: true });
    getDashboardButtons(2).then(data => {
      this.setState({ cards: data });
      this.setState({ presentProgress: false });
    });
  }

  onNavigate = route => {
    const history = this.props.history;
    history.push(route);
  };

  render() {
    const { classes } = this.props;
    if(this.state.presentProgress){
      return (<Progress />);
    }else{

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
            {this.state.cards.map(c => (
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                key={c.text}
                onClick={() => {
                  this.onNavigate(c.route);
                }}
              >
                <CustomCard
                  insideText={c.inside_text}
                  imageUrl={c.image_route}
                  height={225}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({ ...state });

export default compose(
  // withTheme(),
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, null)
)(Home);
