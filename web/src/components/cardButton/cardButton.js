/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

import { Styles } from "./styles";

import { Typography, ButtonBase, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom"; 


const cardButton = props => {
  const classes = Styles(props);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const history = useHistory();
  const onNavigate = (route) =>{
    history.push(route);
  }
  return (
    <div className={classes.root}>
      <Box boxShadow={1} className={classes.buttonBase}>
        <ButtonBase
          focusRipple
          className={isTabletOrMobile ? classes.buttonSm : classes.buttonLg}
        >
          {props.insideText != null ? (
            <Typography
              variant="h3"
              className={
                isTabletOrMobile ? classes.insideTextSm : classes.insideTextLg
              }
            >
              {props.insideText}
            </Typography>
          ) : null}
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${props.imageUrl})`
            }}
          ></span>
        </ButtonBase>
        {props.subButtonIcon ? <div className={classes.subButton} onClick={props.subButtonOnClick}>{props.subButtonIcon}</div> : null}
      </Box>
      {props.labelText ? (
        <Typography
          variant="body2"
          className={
            isTabletOrMobile ? classes.labelTextSm : classes.labelTextLg
          }
        >
          {props.labelText}
        </Typography>
      ) : null}
    </div>
  );
};

cardButton.propTypes = {
  onClick:PropTypes.func,
  insideText: PropTypes.string,
  labelText: PropTypes.string,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  subButtonIcon:PropTypes.element,
  subButtonOnClick:PropTypes.func 
};

export default cardButton;
