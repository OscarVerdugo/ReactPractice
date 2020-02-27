/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

import { Styles } from "./styles";

import { Typography, ButtonBase, Box } from "@material-ui/core";


const cardButton = props => {
  const classes = Styles(props);
  console.log(classes);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

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
  insideText: PropTypes.string,
  labelText: PropTypes.string,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default cardButton;
