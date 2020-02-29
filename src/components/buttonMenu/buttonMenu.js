import React from "react";
import PropTypes from "prop-types";
import {Grid, IconButton,Paper, Grow, ClickAwayListener, MenuList, MenuItem, Popper, Badge, Typography} from "@material-ui/core";
import { red, green } from "@material-ui/core/colors"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const badgeColors = [
    {
        1:green[500],
        2:red[500]
    }
]

const ButtonMenu = (props) =>{

    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
      <IconButton
            color="secondary"
            variant="contained"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            ref={anchorRef}
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{zIndex:5}}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {props.tasks.map((option, index) => (
                      <MenuItem
                        key={option.desc}
                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                      >
                        <Badge variant="dot" color="error">
                        <Typography>{option.desc}</Typography>
                        </Badge>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );

}


ButtonMenu.propTypes = {
    tasks:PropTypes.array.isRequired
};

export default ButtonMenu;