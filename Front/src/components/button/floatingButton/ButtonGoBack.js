import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  btn_back: {
    position: 'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(1),
    zIndex: 100,
    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(10),
      zIndex: 100
    },
  },
}));

const ButtonGoBack = () => {
  
  const classes = useStyles()
  const history = useHistory()

  return (
    <IconButton aria-label="home" className={classes.btn_back} onClick={() => history.goBack()}>
        <ArrowBackIcon fontSize="large"/>
      </IconButton>
  );
}

export default ButtonGoBack;
